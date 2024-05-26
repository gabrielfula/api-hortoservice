import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { CoreModule } from './modules/core/core.module';
import { HttpModule } from './modules/http/http.module';

@Module({
  imports: [
    CoreModule,
    HttpModule
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {}
}