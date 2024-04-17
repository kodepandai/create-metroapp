import type { Prisma, User } from '@prisma/client';
import { FindUserQueryDto } from '../dto/find-user.dto';
import { ExtractedQuery } from 'src/@types/repository.types';

export type UserExtractedQuery = ExtractedQuery<Prisma.UserWhereInput[]>;
export interface UserFindAllParam extends UserExtractedQuery {
  query: FindUserQueryDto;
}
export type UserSearchParam = {
  search: Partial<Pick<User, 'name' | 'email' | 'username'>>;
  not?: {
    id: number;
  };
};
