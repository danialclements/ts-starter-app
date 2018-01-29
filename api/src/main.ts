import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app.module';

async function bootstrap() {
	const port = parseInt(process.env.PORT, 10) || 3000;
	const app = await NestFactory.create(ApplicationModule);

	app.setGlobalPrefix('/api/v1');

	await app.listen(port);
}
bootstrap();
