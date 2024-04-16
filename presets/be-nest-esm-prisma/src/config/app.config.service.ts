import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ZodError, z } from 'zod';

const envSchema = z.object({
  PORT: z.number({ coerce: true }).min(1000),
  DATABASE_URL: z.string(),
  DOCS_URL: z.string().nullish(),
});

export type Env = z.infer<typeof envSchema>;
@Injectable()
export class AppConfigService extends ConfigService {
  get env() {
    return new Proxy(
      {},
      {
        get: (_, prop: any) => {
          return this.get(prop);
        },
      },
    ) as Env;
  }

  public static validate(env: unknown) {
    try {
      return envSchema.parse(env);
    } catch (error) {
      if (error instanceof ZodError) {
        throw new Error(
          'Invalid ENV config: ' + JSON.stringify(error.format(), null, 2),
        );
      }
      throw error;
    }
  }
}
