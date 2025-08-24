// src/mail/mail.service.ts
import { Injectable } from "@nestjs/common";
import { MailerService } from "@nestjs-modules/mailer";
import { getContactTemplate } from "./templates/ContactEmail";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class EmailService {
  constructor(
    private readonly mailerService: MailerService,
    private readonly configService: ConfigService
  ) {}

  async sendContactForm(data: { name: string; phone?: string }) {
    try {
      const html = getContactTemplate(data);

      await this.mailerService.sendMail({
        to: this.configService.get<string>("CONTACT_EMAIL"),
        subject: `Новое сообщение от ${data.name}`,
        html: html,
      });

      return { success: true };
    } catch (error) {
      console.error("Mail error:", error);
      return { error: error };
    }
  }
}
