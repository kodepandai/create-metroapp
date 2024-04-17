import type { User } from '@prisma/client';
import { SchemaDto } from '@types';
import { paginateResponseDto, successResponseDto } from '@utils';
import { z } from 'zod';

export const UserSchema = z.object({
  id: z.number(),
  name: z.string(),
  username: z.string(),
  email: z.string().email(),
  password: z.string().optional(),
  created_at: z.date(),
  updated_at: z.date().optional(),
  deleted_at: z.date().nullish(),
} satisfies SchemaDto<User>);

const UserDetailSchema = UserSchema.pick({
  id: true,
  username: true,
  name: true,
  email: true,
  created_at: true,
});
export class OneUserResponse extends successResponseDto(UserDetailSchema) {}
export class FindAllResponse extends paginateResponseDto(UserSchema) {}
export class DeleteUserResponse extends successResponseDto(UserSchema) {}
