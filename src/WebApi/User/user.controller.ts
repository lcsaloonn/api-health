import { Body, Controller, Get, Post } from '@nestjs/common';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { UserModel } from 'src/Domaine/models/user.model';
import { createUserDto } from './Dto/createUser.dto';
import { UserService } from './user.service';

@Controller('user')
@ApiTags('user')
export class UserController {
  constructor(private readonly _userService: UserService) {}

  @Post()
  @ApiCreatedResponse({ description: 'User created' })
  @ApiBody({ type: createUserDto })
  async createUser(@Body() user: UserModel): Promise<void> {
    this._userService.createUser(user);
  }

  @Get()
  @ApiOkResponse({ description: 'success' })
  async getAllUsers(): Promise<UserModel[]> {
    return this._userService.findAll();
  }
}
