import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { ApplicationException } from '../exceptions/application.exceptions';
import { Reflector } from '@nestjs/core';
import { IS_PUBLIC_KEY } from '../metadata/metadata';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService, private reflector: Reflector) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {

    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);
    

    if (isPublic) {
      return true;
    }

    if (!token) {
      throw new ApplicationException(
        401,
        '401',
        'Unauthorized. Token is invalid or missing.',
        'Não autorizado! O Token enviado é inválido ou não foi enviado.',
      );
    }
    try {
      const payload = await this.jwtService.verifyAsync(
        token,
        {
          secret: process.env.JWT_SECRET
        }
      );
      // 💡 We're assigning the payload to the request object here
      // so that we can access it in our route handlers
      request['user'] = payload;
    } catch {
      throw new ApplicationException(
        401,
        '401',
        'Unauthorized. Token is invalid or missing.',
        'Não autorizado! O Token enviado é inválido ou não foi enviado.',
      );
    }
    return true;
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}