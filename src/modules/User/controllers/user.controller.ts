import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { hasRoles } from 'src/Application/auth/decorators/roles.decorator';
import { JwtAuthGuard } from 'src/Application/auth/Guards/jwt.guard';
import { RolesGuard } from 'src/Application/auth/Guards/roles.guard';
import { UserSecurityService } from 'src/Application/auth/services/security-services/user-sercurity.service';
import { UserModel } from 'src/Domaine/models/user.model';
import { CreateUserDto } from '../Dto/createUser.dto';
import { UserService } from '../services/user.service';

@Controller('user')
@ApiTags('user')
export class UserController {
  constructor(
    private readonly _userService: UserService,
    private userSecurityService: UserSecurityService,
  ) {}

  @Post()
  @ApiCreatedResponse({ description: 'User created' })
  @ApiBody({ type: CreateUserDto })
  async createUser(@Body() user: UserModel): Promise<string> {
    return this.userSecurityService.createUser(user);
  }

  @Post('login')
  @ApiBody({ type: CreateUserDto })
  async login(@Body() user: CreateUserDto): Promise<LoginResponse> {
    return this.userSecurityService.login(user);
  }

  // @hasRoles('admin')
  // @UseGuards(JwtAuthGuard, RolesGuard)
  @Get()
  @ApiOkResponse({ description: 'success' })
  async getAllUsers(): Promise<UserModel[]> {
    return this._userService.findAll();
  }
}
