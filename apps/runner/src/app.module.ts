import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import config from '../connery-runner.config';
import { HealthModule } from './health/health.module';
import { SharedModule } from './shared/shared.module';
import { AdminApiModule } from './admin-api/admin-api.module';
import { ClientsApiModule } from './clients-api/clients-api.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [config],
    }),
    HealthModule,
    SharedModule,
    AdminApiModule,
    ClientsApiModule,
  ],
})
export class AppModule {}
