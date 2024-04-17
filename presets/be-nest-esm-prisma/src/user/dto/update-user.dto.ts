import { User } from '@prisma/client';
import { createZodDto } from '@anatine/zod-nestjs';
import { SchemaDto } from '@types';
import { createUserBodySchema } from './create-user.dto';
import { z } from 'zod';
const updateUserBodySchema = createUserBodySchema.extend({
  password: z.string().min(3).nullish(),
} satisfies SchemaDto<User>);
export class UpdateUserBodyDto extends createZodDto(updateUserBodySchema) {}
