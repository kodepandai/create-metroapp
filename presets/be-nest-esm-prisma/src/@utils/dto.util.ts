import { createZodDto } from '@anatine/zod-nestjs';
import { ZodSchema, ZodTypeAny } from 'zod/lib';
import { z } from 'zod';

export const successResponseDto = <Data extends ZodTypeAny = ZodSchema>(
  responseData: Data,
) => createZodDto(z.object({ message: z.string(), data: responseData }));

export const paginateResponseDto = <Data extends ZodTypeAny = ZodSchema>(
  responseData: Data,
) =>
  successResponseDto(
    z.object({
      limit: z.number().default(10),
      page: z.number().default(1),
      count: z.number().default(1),
      hasNextPage: z.boolean(),
      result: z.array(responseData),
    }),
  );
