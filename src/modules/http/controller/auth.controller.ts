import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { AUTH_SERVICE_INTERFACE, IAuthService } from 'src/modules/admins/interface/service/iauth.service';
import { PrismaService } from 'src/modules/core/prisma.service';

@Controller('admin')
export class AuthController {
  constructor(
    @Inject(AUTH_SERVICE_INTERFACE) private readonly iAuthService: IAuthService,
  ) {}

  @Post('signin')
  async signin(
    @Body() authenticationDto: any
  ): Promise<any> {
    const admin = await this.iAuthService.login(authenticationDto);
  }
}
