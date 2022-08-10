import { Body, Controller, Get, Post } from '@nestjs/common';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { UserModel } from 'src/Domaine/models/user.model';
import { CreateUserDto } from './Dto/createUser.dto';
import { UserService } from './user.service';

@Controller('user')
@ApiTags('user')
export class UserController {
  constructor(private readonly _userService: UserService) {}

  @Post()
  @ApiCreatedResponse({ description: 'User created' })
  @ApiBody({ type: CreateUserDto })
  async createUser(@Body() user: UserModel): Promise<string> {
    return this._userService.createUser(user);
  }

  @Post('login')
  @ApiBody({ type: CreateUserDto })
  async login(@Body() user: CreateUserDto): Promise<LoginResponse> {
    return this._userService.login(user);
  }

  @Get()
  @ApiOkResponse({ description: 'success' })
  async getAllUsers(): Promise<UserModel[]> {
    return this._userService.findAll();
  }

  @Get('test')
  async getTest() {
    const user = new UserModel('thomas', 'Thomas8*');
    return this._userService.isDuplicationPseudo('vddal');
  }
}
