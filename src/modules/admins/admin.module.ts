
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AuthService } from './service/auth.service';
import { AUTH_SERVICE_INTERFACE } from './interface/service/iauth.service';
import { CoreModule } from '../core/core.module';
import { ADMIN_REPOSITORY_INTERFACE } from './interface/repositories/iadmin.repository';
import { AdminRepository } from './repositories/admin.repository';

@Module({
  imports: [CoreModule],
  providers: [
    {provide: ADMIN_REPOSITORY_INTERFACE, useClass: AdminRepository},

    {provide: AUTH_SERVICE_INTERFACE, useClass: AuthService},
  ],
  exports: [
    ADMIN_REPOSITORY_INTERFACE,

    AUTH_SERVICE_INTERFACE
  ]
})
export class AdminModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {}
}