import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { CoreModule } from '../core/core.module';
import { AuthController } from './controller/auth.controller';
import { AdminModule } from '../admin/admin.module';
import { ClientModule } from '../client/client.module';
import { ClientController } from './controller/clients.controller';

@Module({
  imports: [
    CoreModule,
    AdminModule,
    ClientModule,
  ],
  controllers: [
    AuthController,
    ClientController
  ],
})
export class HttpModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {}
}
