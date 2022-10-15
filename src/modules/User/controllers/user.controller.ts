import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  Response,
} from '@nestjs/common';
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

import { UserRole } from 'src/Domaine/Enums/roles.enums';
import { LoginResponse } from 'src/Domaine/Types/userType/userType';
import { UserModel } from 'src/modules/User/model/user.model';
import { CreateUserDto } from '../Dto/createUser.dto';
import { UserService } from '../service/user.service';
import { CreateUserSchema } from '../schema/CreateUser.schema';
import { ReadUserSchema } from '../schema/ReadUser.schema';
import { LoginException } from 'src/exceptions/user/login.exceptions';
import { LoginUserDTO } from '../Dto/loginUser.dto';

@Controller('user')
@ApiTags('user')
export class UserController {
  constructor(private readonly _userService: UserService) {}

  @Post('register')
  @ApiBody({ type: CreateUserSchema })
  async createUser(@Body() user: CreateUserDto): Promise<LoginResponse> {
    return this._userService.register(user);
  }

  @Post('login')
  @ApiBody({ type: ReadUserSchema })
  async login(
    @Body() user: LoginUserDTO,
    @Response() res,
  ): Promise<LoginResponse> {
    const response = await this._userService.login(user);
    if (response.isSuccess) {
      res.cookie('accesstoken', response.token, {
        expires: new Date(new Date().getTime() + 30 * 1000),
        sameSite: 'strict',
        httpOnly: true,
        // secure: true,
      });
      return res.send(response);
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
