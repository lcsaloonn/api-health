import {
  CanActivate,
  ExecutionContext,
  Injectable,
  Inject,
  forwardRef,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { UserModel } from 'src/Domaine/models/user.model';
import { UserService } from 'src/modules/User/services/user.service';
import { UserSecurityService } from '../services/security-services/user-sercurity.service';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private userSecurityService: UserSecurityService,
  ) {}

  canActivate(context: ExecutionContext): boolean | Promise<boolean> {
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    console.log(roles);
    if (!roles) return true;

    const request = context.switchToHttp().getRequest();

    const user: UserModel = request.user;
    const hasRole = () => {
      roles.indexOf(user.role) > -1;
    };
    let hasPermission = false;

    if (roles.indexOf(user.role) > -1) {
      hasPermission = true;
      console.log('bien');
    }

    return hasPermission;
  }
}
