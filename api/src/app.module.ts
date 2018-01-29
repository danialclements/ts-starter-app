import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { HealthCheckModule } from './health-check/health-check.module';

@Module({
  imports: [ HealthCheckModule ],
  controllers: [AppController],
  components: [],
})
export class ApplicationModule {}
