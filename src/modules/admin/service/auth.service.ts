import { HttpStatus, Inject, Injectable } from '@nestjs/common';
import { compare } from "bcrypt"
import { ApplicationException } from 'src/modules/core/exceptions/application.exceptions';
import { JwtService } from '@nestjs/jwt';
import { FETCH_ADMIN_SERVICE_INTERFACE, IFetchAdminService } from 'src/modules/admin/interface/service/ifetch-admin.service';
import { IAuthService } from '../interface/service/iauth.service';

@Injectable()
export class AuthService implements IAuthService {
  constructor(
    @Inject(FETCH_ADMIN_SERVICE_INTERFACE) private readonly iFetchAdminService: IFetchAdminService,
    private jwtService: JwtService
  ) {}

  async login(authenticationDto: any): Promise<any> {
    const admin = await this.iFetchAdminService.getByUsername(authenticationDto.username);

    if(!admin) {
      throw new ApplicationException(
        HttpStatus.BAD_REQUEST,
        '002',
        'Invalid credentials.',
        'As credenciais informadas estão inválidas.',
      )
    }

    if(!(await compare(authenticationDto.password, admin.password))) {
      throw new ApplicationException(
        HttpStatus.BAD_REQUEST,
        '002',
        'Invalid credentials.',
        'As credenciais informadas estão inválidas.',
      );
    }

    const payload = { sub: admin.id, username: admin.username };

    const adminLogged = {
      id: admin.id,
      username: admin.username,
      access_token: await this.jwtService.signAsync(payload),
    }
    
    return adminLogged;
  }
}
