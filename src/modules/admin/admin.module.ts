
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { CoreModule } from '../core/core.module';
import { ADMIN_REPOSITORY_INTERFACE } from './interface/repositories/iadmin.repository';
import { AdminRepository } from './repositories/admin.repository';
import { FETCH_ADMIN_SERVICE_INTERFACE } from './interface/service/ifetch-admin.service';
import { FetchAdminService } from './service/fetch-admin.service';
import { AUTH_SERVICE_INTERFACE } from './interface/service/iauth.service';
import { AuthService } from './service/auth.service';

@Module({
  imports: [CoreModule],
  providers: [
    {provide: ADMIN_REPOSITORY_INTERFACE, useClass: AdminRepository},

    {provide: FETCH_ADMIN_SERVICE_INTERFACE, useClass: FetchAdminService},
    {provide: AUTH_SERVICE_INTERFACE, useClass: AuthService},
  ],
  exports: [
    ADMIN_REPOSITORY_INTERFACE,

    FETCH_ADMIN_SERVICE_INTERFACE,
    AUTH_SERVICE_INTERFACE,
  ]
})
export class AdminModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {}
}