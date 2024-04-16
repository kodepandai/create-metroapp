import { createZodDto } from '@anatine/zod-nestjs';
import { ZodSchema } from 'zod/lib';
import { z } from 'zod';

export const successResponseDto = (responseData: ZodSchema) =>
  createZodDto(z.object({ message: z.string(), data: responseData }));

export const paginateResponseDto = (responseData: ZodSchema) =>
  successResponseDto(
    z.object({
      limit: z.number().default(10),
      page: z.number().default(1),
      count: z.number().default(1),
      hasNextPage: z.boolean(),
      result: z.array(responseData),
    }),
  );
