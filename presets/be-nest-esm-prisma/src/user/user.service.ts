import { Injectable } from '@nestjs/common';
import { FindUserQueryDto } from './dto';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepo: UserRepository) {}
  async findAll(query: FindUserQueryDto) {
    const { filter, search } = this.userRepo.extractQuery(query);
    return await this.userRepo.findAll({ query, filter, search });
  }
}
