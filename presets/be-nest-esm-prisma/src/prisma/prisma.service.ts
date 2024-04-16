import { Injectable, OnModuleInit } from '@nestjs/common';
import { Prisma, PrismaClient } from '@prisma/client';
import { PaginationArgs, extension as paginate } from 'prisma-paginate';
import { PrismaFindManyArgs } from 'prisma-paginate/dist/prisma/PrismaFindManyArgs';
import { PrismaPaginateResult } from 'prisma-paginate/dist/prisma/PrismaPaginateResult';
import { AppConfigService } from 'src/config/app.config.service';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  private extendedClient: any;
  constructor(readonly config: AppConfigService) {
    super({
      datasources: {
        db: { url: config.env.DATABASE_URL },
      },
    });
  }
  get extended() {
    let prisma: ReturnType<typeof this.extendClient> = this.extendedClient;
    if (!prisma) {
      prisma = this.extendClient();
    }
    return prisma;
  }
  private extendClient() {
    const prisma = this.$extends({
      model: {
        $allModels: {
          async getTableName<T>(this: T) {
            const context = Prisma.getExtensionContext(this) as any;
            return (prisma as any)._runtimeDataModel.models[context.name]
              .dbName;
          },
          async paginate<Model, Arg>(
            this: Model,
            arg: PrismaFindManyArgs<Model, Arg> & PaginationArgs,
          ) {
            const { exceedCount, exceedTotalPages, hasNextPage, ...res } =
              (await paginate.model.$allModels.paginate.call(
                this,
                arg,
              )) as Awaited<PrismaPaginateResult<Model, Arg>>;
            return {
              ...res,
              hasNextPage,
            };
          },
        },
      },
    });
    this.extendedClient = prisma;
    return prisma;
  }
  async onModuleInit() {
    await this.$connect();
  }
}
