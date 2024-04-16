import type { User } from '@prisma/client';
import { createZodDto } from '@anatine/zod-nestjs';
import { z } from 'zod';
import { QueryableDto, SchemaDto } from '@types';
export const findUserQuerySchema = z.object({
  search: z.string().optional(),
  orderBy: z
    .enum(['name', 'created_at', 'username', 'email'])
    .optional()
    .default('username'),
  orderDirection: z.enum(['asc', 'desc']).optional().default('asc'),
  //pagination
  limit: z.number({ coerce: true }).optional(),
  page: z.number({ coerce: true }).optional(),
} satisfies SchemaDto<User, QueryableDto>);
export class FindUserQueryDto extends createZodDto(findUserQuerySchema) {}
