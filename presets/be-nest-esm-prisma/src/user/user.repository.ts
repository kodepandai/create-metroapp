import type { UserExtractedQuery, UserFindAllParam } from './types';
import { Injectable } from '@nestjs/common';
import { dotToObject } from '@utils';
import { PrismaService } from 'src/prisma';
import { FindUserQueryDto } from './dto';

@Injectable()
export class UserRepository {
  constructor(private readonly prisma: PrismaService) {}
  extractQuery(query: FindUserQueryDto): UserExtractedQuery {
    const filter: UserExtractedQuery['filter'] = [];
    let search: UserExtractedQuery['search'] = [];
    if (query.search) {
      search = [
        {
          name: {
            contains: query.search,
            mode: 'insensitive',
          },
        },
        {
          username: {
            contains: query.search,
            mode: 'insensitive',
          },
        },
        {
          email: {
            contains: query.search,
            mode: 'insensitive',
          },
        },
      ];
    }
    return {
      filter,
      search,
    };
  }

  findAll({ query, filter, search }: UserFindAllParam) {
    return this.prisma.extended.user.paginate({
      limit: query.limit || 10,
      page: query.page,
      where: {
        deleted_at: null,
        AND: [
          ...filter,
          {
            OR: search,
          },
        ],
      },
      orderBy: dotToObject(query.orderBy, query.orderDirection),
    });
  }
}
