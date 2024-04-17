import { Module } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';
import { ZodValidationPipe } from '../zod/validation.pipe';
import { AppConfigModule } from './config';
import { PrismaModule } from './prisma';
import { UserModule } from './user';

@Module({
  imports: [AppConfigModule, PrismaModule, UserModule],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ZodValidationPipe,
    },
  ],
})
export class AppModule {}
