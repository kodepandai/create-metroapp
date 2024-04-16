import { Controller, Get, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { FindUserQueryDto } from './dto/find-user.dto';
import { FindAllResponse } from './dto';
import { success } from '@utils';
import { ApiOkResponse } from '@nestjs/swagger';

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
}
