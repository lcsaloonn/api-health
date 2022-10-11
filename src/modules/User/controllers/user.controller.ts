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
import { IUser } from 'src/Domaine/Types/IUser.interface';

@Controller('user')
@ApiTags('user')
export class UserController {
  constructor(
    private readonly _userService: UserService,
    private userSecurityService: UserSecurityService,
  ) {}

  @Post('register')
  @ApiResponse({
    status: 201,
    description: 'register is success',
  })
  @ApiBody({ type: CreateUserSchema })
  async createUser(@Body() user: CreateUserDto): Promise<void> {
    return this.userSecurityService.createUser(user);
  }

  @Post('login')
  @ApiBody({ type: CreateUserDto })
  async login(@Body() user: CreateUserDto): Promise<LoginResponse> {
    return this.userSecurityService.login(user);
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
