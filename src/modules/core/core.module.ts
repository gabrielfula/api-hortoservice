import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Module({
  imports: [],
  controllers: [],
  providers: [
    PrismaService
  ],
  exports: [
    PrismaService
  ]
})
export class CoreModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {}
}