import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { AuthResponse } from '../responses/auth-response';
import { Public } from 'src/modules/core/metadata/metadata';
import { AUTH_SERVICE_INTERFACE, IAuthService } from 'src/modules/admin/interface/service/iauth.service';

@Controller('admin')
export class AuthController {
  constructor(
    @Inject(AUTH_SERVICE_INTERFACE) private readonly iAuthService: IAuthService,
  ) {}

  @Public()
  @Post('signin')
  async signin(
    @Body() authenticationDto: any
  ): Promise<any> {
    const admin = await this.iAuthService.login(authenticationDto);

    return AuthResponse.serialize(admin);
  }
}
