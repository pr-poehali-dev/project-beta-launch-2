"""
Обработчик заявок с сайта навесов. Принимает имя и телефон клиента,
отправляет уведомление на email владельца.
"""
import json
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from datetime import datetime


def handler(event: dict, context) -> dict:
    cors_headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
    }

    if event.get("httpMethod") == "OPTIONS":
        return {"statusCode": 200, "headers": cors_headers, "body": ""}

    try:
        body = json.loads(event.get("body", "{}"))
    except Exception:
        return {
            "statusCode": 400,
            "headers": cors_headers,
            "body": json.dumps({"error": "Неверный формат данных"}),
        }

    name = body.get("name", "").strip()
    phone = body.get("phone", "").strip()

    if not name or not phone:
        return {
            "statusCode": 400,
            "headers": cors_headers,
            "body": json.dumps({"error": "Укажите имя и телефон"}),
        }

    contact_email = os.environ.get("CONTACT_EMAIL", "")
    smtp_password = os.environ.get("SMTP_PASSWORD", "")

    if contact_email and smtp_password:
        try:
            msg = MIMEMultipart("alternative")
            msg["Subject"] = f"Новая заявка с сайта — {name}"
            msg["From"] = contact_email
            msg["To"] = contact_email

            now = datetime.now().strftime("%d.%m.%Y %H:%M")
            html = f"""
            <html><body style="font-family: Arial, sans-serif; color: #222;">
              <h2 style="color: #1a1a1a;">Новая заявка с сайта МеталлСтрой</h2>
              <table style="border-collapse: collapse; width: 100%; max-width: 500px;">
                <tr><td style="padding: 10px; border: 1px solid #ddd; background: #f9f9f9;"><b>Имя</b></td>
                    <td style="padding: 10px; border: 1px solid #ddd;">{name}</td></tr>
                <tr><td style="padding: 10px; border: 1px solid #ddd; background: #f9f9f9;"><b>Телефон</b></td>
                    <td style="padding: 10px; border: 1px solid #ddd;"><a href="tel:{phone}">{phone}</a></td></tr>
                <tr><td style="padding: 10px; border: 1px solid #ddd; background: #f9f9f9;"><b>Время</b></td>
                    <td style="padding: 10px; border: 1px solid #ddd;">{now}</td></tr>
              </table>
              <p style="color: #666; margin-top: 20px;">Свяжитесь с клиентом как можно скорее!</p>
            </body></html>
            """
            msg.attach(MIMEText(html, "html"))

            with smtplib.SMTP_SSL("smtp.gmail.com", 465) as server:
                server.login(contact_email, smtp_password)
                server.sendmail(contact_email, contact_email, msg.as_string())
        except Exception as e:
            print(f"Email error: {e}")

    return {
        "statusCode": 200,
        "headers": cors_headers,
        "body": json.dumps({"success": True, "message": "Заявка принята"}),
    }
