import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const { name, phone } = await req.json()

    const message = `
📩 Новая заявка с сайта:
👤 Имя: ${name}
📱 Телефон: ${phone}
`

    const TOKEN = process.env.TELEGRAM_BOT_TOKEN
    const CHAT_ID = process.env.TELEGRAM_CHAT_ID

    const url = `https://api.telegram.org/bot${TOKEN}/sendMessage`

    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
        parse_mode: "HTML",
      }),
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error("TELEGRAM ERROR:", err)
    return NextResponse.json({ ok: false }, { status: 500 })
  }
}