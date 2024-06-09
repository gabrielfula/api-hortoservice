
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { CoreModule } from '../core/core.module';
import { CLIENT_REPOSITORY_INTERFACE } from './interface/repositories/iclient.repository';
import { ClientRepository } from './repositories/client.repository';
import { FetchClientService } from './service/fetch-client.service';
import { FETCH_CLIENT_SERVICE_INTERFACE } from './interface/service/ifetch-client.service';

@Module({
  imports: [CoreModule],
  providers: [
   { provide: CLIENT_REPOSITORY_INTERFACE, useClass: ClientRepository },

   { provide: FETCH_CLIENT_SERVICE_INTERFACE, useClass: FetchClientService }
  ],
  exports: [
    CLIENT_REPOSITORY_INTERFACE,
    
    FETCH_CLIENT_SERVICE_INTERFACE
  ]
})
export class ClientModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {}
}