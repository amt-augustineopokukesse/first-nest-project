import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { logger } from './logger/logger.middleware';
import { CatsController } from './cats/cats.controller';

@Module({
  imports: [CatsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(LoggerMiddleware).forRoutes('cats'); // only for cats route
    // consumer
    //   .apply(LoggerMiddleware)
    //   // .forRoutes({ path: 'cats', method: RequestMethod.GET }); // only for cats route with a specific request method
    //   .forRoutes(CatsController);
    consumer.apply(logger).forRoutes(CatsController);
  }
}
