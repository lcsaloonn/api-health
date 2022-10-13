import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOkResponse,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { hasRoles } from 'src/Application/auth/decorators/roles.decorator';
import { JwtAuthGuard } from 'src/Application/auth/Guards/jwt.guard';
import { RolesGuard } from 'src/Application/auth/Guards/roles.guard';
import { UserSecurityService } from 'src/modules/User/service/security-services/user-sercurity.service';
import { UserRole } from 'src/Domaine/Enums/roles.enums';
import { LoginResponse } from 'src/Domaine/Types/userType/userType';
import { UserModel } from 'src/modules/User/model/user.model';
import { CreateUserDto } from '../Dto/createUser.dto';
import { UserService } from '../service/user.service';
import { CreateUserSchema } from '../schema/CreateUser.schema';
import { ReadUserSchema } from '../schema/ReadUser.schema';
import { ReadUserDto } from '../Dto/readUser.dto';
import { LoginException } from 'src/exceptions/user/login.exceptions';

@Controller('user')
@ApiTags('user')
export class UserController {
  constructor(
    private readonly _userService: UserService,
    private userSecurityService: UserSecurityService,
  ) {}

  @Post('register')
  @ApiBody({ type: CreateUserSchema })
  async createUser(@Body() user: CreateUserDto): Promise<LoginResponse> {
    return this.userSecurityService.createUser(user);
  }

  @Post('login')
  @ApiBody({ type: ReadUserSchema })
  async login(@Body() user: ReadUserDto): Promise<LoginResponse> {
    const response = await this.userSecurityService.login(user);
    if (response.isSuccess) {
      return response;
    } else {
      throw new LoginException();
    }
  }

  @hasRoles(UserRole.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Get()
  @ApiBearerAuth('JWT-auth')
  @ApiOkResponse({ description: 'success' })
  async getAllUsers(): Promise<UserModel[]> {
    return this._userService.findAll();
  }
}
