// src/mail/templates/contact-template.ts
export const getContactTemplate = (data: { name: string; phone?: string }) => {
  return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Новое сообщение с сайта</title>
    <style>
        body { 
            font-family: Arial, sans-serif; 
            background-color: #f6f9fc; 
            margin: 0; 
            padding: 20px; 
        }
        .container { 
            max-width: 600px; 
            margin: 0 auto; 
            background: #ffffff; 
            border-radius: 8px; 
            overflow: hidden; 
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }
        .header { 
            background: #667eea; 
            padding: 30px; 
            text-align: center; 
            color: white; 
        }
        .content { 
            padding: 30px; 
        }
        .paragraph { 
            font-size: 16px; 
            line-height: 1.5; 
            color: #333; 
            margin: 15px 0; 
        }
        .message { 
            background: #f8f9fa; 
            padding: 20px; 
            border-radius: 8px; 
            border: 1px solid #e9ecef; 
            color: #666;
            line-height: 1.5;
            font-size: 15px;
        }
        .divider { 
            border: none; 
            border-top: 2px solid #e9ecef; 
            margin: 25px 0; 
        }
        .footer { 
            font-size: 14px; 
            color: #666; 
            text-align: center; 
            margin-top: 20px;
        }
        strong {
            color: #000;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1 style="margin: 0; font-size: 24px;">📧 Новое сообщение с сайта</h1>
        </div>
        
        <div class="content">
            <p class="paragraph"><strong>👤 Имя:</strong> ${data.name}</p>
            ${data.phone ? `<p class="paragraph"><strong>📞 Телефон:</strong> ${data.phone}</p>` : ""}
            
            <hr class="divider">
            
            
            <p class="footer">
                <strong>📅 Дата:</strong> ${new Date().toLocaleDateString("ru-RU")} | 
                <strong>⏰ Время:</strong> ${new Date().toLocaleTimeString("ru-RU")}
            </p>
        </div>
    </div>
</body>
</html>
  `;
};
