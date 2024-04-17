import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { FindUserQueryDto } from './dto/find-user.dto';
import { FindAllResponse, OneUserResponse } from './dto';
import { success } from '@utils';
import { ApiOkResponse } from '@nestjs/swagger';
import { CreateUserBodyDto } from './dto/create-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @ApiOkResponse({
    type: FindAllResponse,
  })
  async findAll(@Query() query: FindUserQueryDto): Promise<FindAllResponse> {
    return success(await this.userService.findAll(query));
  }

  @Post()
  @ApiOkResponse({
    type: OneUserResponse,
  })
  async create(@Body() data: CreateUserBodyDto): Promise<OneUserResponse> {
    return success(await this.userService.create(data));
  }
}
