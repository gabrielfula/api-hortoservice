import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { CoreModule } from '../core/core.module';
import { AuthController } from './controller/auth.controller';
import { AdminModule } from '../admins/admin.module';

@Module({
  imports: [
    CoreModule,
    AdminModule
  ],
  controllers: [
    AuthController
  ],
})
export class HttpModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {}
}
