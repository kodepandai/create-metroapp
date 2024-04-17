/**
 * This file was originally taken directly from:
 * https://github.com/anatine/zod-plugins/blob/main/packages/zod-nestjs/src/lib/zod-validation-pipe.ts
 */

import { PipeTransform, Injectable, ArgumentMetadata } from '@nestjs/common';

import { ZodDtoStatic } from '@anatine/zod-nestjs';

@Injectable()
export class ZodValidationPipe implements PipeTransform {
  public transform(value: unknown, metadata: ArgumentMetadata): unknown {
    const zodSchema = (metadata?.metatype as ZodDtoStatic)?.zodSchema;

    if (zodSchema) {
      const parseResult = zodSchema.safeParse(value);

      if (!parseResult.success) {
        const { error } = parseResult;
        throw error;
      }

      return parseResult.data;
    }

    return value;
  }
}
