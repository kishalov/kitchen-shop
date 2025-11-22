import { NextResponse } from "next/server"
import { google } from "googleapis"

export async function POST(req: Request) {
	try {
		const { name, phone } = await req.json()

		if (!name || !phone) {
			return NextResponse.json(
				{ ok: false, error: "Missing fields" },
				{ status: 400 }
			)
		}

		/* -----------------------------------
		          GOOGLE SHEETS
		----------------------------------- */
		const auth = new google.auth.GoogleAuth({
			credentials: {
				client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
				private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, "\n"),
			},
			scopes: ["https://www.googleapis.com/auth/spreadsheets"],
		})

		const sheets = google.sheets({ version: "v4", auth })

		await sheets.spreadsheets.values.append({
			// 🔥 ПРАВИЛЬНАЯ ПЕРЕМЕННАЯ
			spreadsheetId: process.env.GOOGLE_SHEETS_SPREADSHEET_ID!,
			range: "A1",
			valueInputOption: "USER_ENTERED",
			requestBody: {
				values: [[new Date().toISOString(), name, phone]],
			},
		})

		/* -----------------------------------
		               TELEGRAM
		----------------------------------- */
		const TOKEN = process.env.TELEGRAM_BOT_TOKEN
		const CHAT_ID = process.env.TELEGRAM_CHAT_ID

		const message = `
📩 Новая заявка:
👤 Имя: ${name}
📱 Телефон: ${phone}
		`

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

		/* -----------------------------------
		             SUCCESS
		----------------------------------- */
		return NextResponse.json({ ok: true })

	} catch (err) {
		console.error("LEAD API ERROR:", err)
		return NextResponse.json({ ok: false }, { status: 500 })
	}
}
