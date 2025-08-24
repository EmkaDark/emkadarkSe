import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: ["http://emkadark.ru", "http://localhost:3000"],
  });
  app.setGlobalPrefix("/api");
  await app.listen(process.env.PORT || 3002, () => {
    console.log(`[--server] Listening in http://localhost:${process.env.PORT}`);
  });
}
bootstrap();
