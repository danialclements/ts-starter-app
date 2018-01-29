import { Controller, Get } from '@nestjs/common';
import os = require('os');

@Controller('health-check')
export class HealthCheckController {
	@Get()
	performHealthCheck() {
		return {
			isHealthy: true,
			hostname: os.hostname()
		};
	}
}