import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { FindUserQueryDto } from './dto';
import { UserRepository } from './user.repository';
import { CreateUserBodyDto } from './dto/create-user.dto';
import bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private readonly userRepo: UserRepository) {}
  async findAll(query: FindUserQueryDto) {
    const { filter, search } = this.userRepo.extractQuery(query);
    return await this.userRepo.findAll({ query, filter, search });
  }

  async create(data: CreateUserBodyDto) {
    if (
      await this.userRepo.isExist({
        username: data.username,
        name: data.name,
        email: data.email,
      })
    ) {
      throw new HttpException('User already exist', HttpStatus.CONFLICT);
    }
    data.password = bcrypt.hashSync(data.password, 10);
    return await this.userRepo.create(data);
  }
}
