import { HttpStatus, Inject, Injectable } from '@nestjs/common';
import { IAuthService } from '../interface/service/iauth.service';
import { ADMIN_REPOSITORY_INTERFACE, IAdminRepository } from '../interface/repositories/iadmin.repository';
import { PrismaService } from 'src/modules/core/prisma.service';
import { compare } from "bcrypt"
import { ApplicationException } from 'src/modules/core/exceptions/application.exceptions';

@Injectable()
export class AuthService implements IAuthService {
  constructor(
    @Inject(ADMIN_REPOSITORY_INTERFACE) private readonly iAdminRepository: IAdminRepository,
    private readonly prisma: PrismaService
  ) {}

  async login(authenticationDto: any): Promise<any> {
    const admin = await this.iAdminRepository.findByUsername(authenticationDto.username)


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
    
    return admin;
  }
}
