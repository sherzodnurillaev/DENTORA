import { NextResponse } from "next/server";

const TELEGRAM_TOKEN = process.env.TELEGRAM_TOKEN!;
const CHAT_ID = process.env.TELEGRAM_CHAT_ID!;
const API_URL = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`;

export async function POST(req: Request) {
  try {
    const { fullName, contact, category } = await req.json();

    const text = `
        📩 Новая заявка:
        👤 Имя: ${fullName}
        📱 Контакт: ${contact}
        📂 Категория: ${category}
    `;

    await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: CHAT_ID, text }),
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ ok: false, error }, { status: 500 });
  }
}
