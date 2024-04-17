import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { UserService } from './user.service';
import { FindUserQueryDto } from './dto/find-user.dto';
import { FindAllResponse, OneUserResponse, UpdateUserBodyDto } from './dto';
import { success } from '@utils';
import { ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
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
  @ApiCreatedResponse({
    type: OneUserResponse,
  })
  async create(@Body() data: CreateUserBodyDto): Promise<OneUserResponse> {
    return success(await this.userService.create(data));
  }

  @Patch()
  @ApiOkResponse({
    type: OneUserResponse,
  })
  async update(
    @Param('id') id: string,
    @Body() data: UpdateUserBodyDto,
  ): Promise<OneUserResponse> {
    return success(await this.userService.update(+id, data));
  }
}
