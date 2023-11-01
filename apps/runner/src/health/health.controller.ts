import { Public } from ':src/shared/auth.guard';
import { ObjectResponse } from ':src/shared/types';
import { Controller, Get } from '@nestjs/common';
import { HealthCheckService, HealthCheck } from '@nestjs/terminus';

@Controller('/v1/health')
export class HealthController {
  constructor(private health: HealthCheckService) {}

  @Public()
  @Get()
  @HealthCheck()
  async check(): Promise<ObjectResponse<undefined>> {
    await this.health.check([]);

    return {
      status: 'success',
      data: undefined,
    };
  }
}
