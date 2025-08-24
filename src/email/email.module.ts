import { Module } from "@nestjs/common";
import { EmailService } from "./email.service";
import { EmailController } from "./email.controller";
import { MailerModule } from "@nestjs-modules/mailer";
import { join } from "path";
import { HandlebarsAdapter } from "@nestjs-modules/mailer/dist/adapters/handlebars.adapter";
import { ConfigModule, ConfigService } from "@nestjs/config";
@Module({
  imports: [
    MailerModule.forRootAsync({
      imports: [ConfigModule], // импортируем ConfigModule
      useFactory: async (configService: ConfigService) => ({
        transport: {
          host: configService.get<string>("SMTP_HOST"),
          port: configService.get<number>("SMTP_PORT", 465),
          secure: true,
          auth: {
            user: configService.get<string>("SMTP_USER"),
            pass: configService.get<string>("SMTP_PASSWORD"),
          },
          tls: {
            rejectUnauthorized: false,
          },
        },
        defaults: {
          from: `"Emka " <${configService.get<string>("SMTP_FROM")}>`,
        },

        template: {
          dir: join(__dirname, "templates"),
          adapter: new HandlebarsAdapter(),
          options: {
            strict: true,
          },
        },
      }),
      inject: [ConfigService], // инжектим ConfigService
    }),
  ],
  controllers: [EmailController],
  providers: [EmailService],
})
export class EmailModule {}
