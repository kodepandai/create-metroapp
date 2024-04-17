import type { User } from '@prisma/client';
import { createZodDto } from '@anatine/zod-nestjs';
import { z } from 'zod';
import { SchemaDto } from '@types';
export const createUserBodySchema = z.object({
  name: z.string().min(3),
  username: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(3),
} satisfies SchemaDto<User>);
export class CreateUserBodyDto extends createZodDto(createUserBodySchema) {}
