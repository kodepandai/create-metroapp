import type {
  UserExtractedQuery,
  UserFindAllParam,
  UserSearchParam,
} from './types';
import { Injectable } from '@nestjs/common';
import { dotToObject } from '@utils';
import { PrismaService } from 'src/prisma';
import { FindUserQueryDto, UpdateUserBodyDto } from './dto';
import { CreateUserBodyDto } from './dto/create-user.dto';

@Injectable()
export class UserRepository {
  constructor(private readonly prisma: PrismaService) {}
  extractQuery(query: FindUserQueryDto): UserExtractedQuery {
    const filter: UserExtractedQuery['filter'] = [];
    let search: UserExtractedQuery['search'] = [];
    if (query.search) {
      search = [
        {
          name: {
            contains: query.search,
            mode: 'insensitive',
          },
        },
        {
          username: {
            contains: query.search,
            mode: 'insensitive',
          },
        },
        {
          email: {
            contains: query.search,
            mode: 'insensitive',
          },
        },
      ];
    }
    return {
      filter,
      search,
    };
  }

  findAll({ query, filter, search }: UserFindAllParam) {
    return this.prisma.extended.user.paginate({
      limit: query.limit || 10,
      page: query.page,
      where: {
        deleted_at: null,
        AND: [
          ...filter,
          {
            OR: search,
          },
        ],
      },
      orderBy: dotToObject(query.orderBy, query.orderDirection),
      select: {
        id: true,
        name: true,
        email: true,
        username: true,
        created_at: true,
      },
    });
  }

  create(data: CreateUserBodyDto) {
    return this.prisma.user.create({ data });
  }

  update(id: number, { password, ...data }: UpdateUserBodyDto) {
    return this.prisma.user.update({
      where: {
        id,
      },
      data: {
        ...data,
        password: password ? password : undefined,
      },
    });
  }

  async isExist({
    search: { username, name, email },
    not,
  }: UserSearchParam): Promise<boolean> {
    const user = await this.prisma.user.findFirst({
      where: {
        id: {
          not: not?.id,
        },
        deleted_at: null,
        OR: [
          {
            username,
          },
          {
            name,
          },
          {
            email,
          },
        ],
      },
    });
    return !!user;
  }
}
