"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import PhoneInputField from "@/components/layout/PhoneInputField"

type ConsultationFormProps = {
	title: string
	subtitle: string
	buttonText: string
	className?: string
}

export default function ConsultationForm({
	title,
	subtitle,
	buttonText,
	className = "",
}: ConsultationFormProps) {
	const [form, setForm] = useState({
		name: "",
		phone: "",
	})

	const [loading, setLoading] = useState(false)
	const [success, setSuccess] = useState(false)
	const [error, setError] = useState(false)

	/* -------------------------------
	      ФУНКЦИЯ ОТПРАВКИ В TG
	-------------------------------- */
	async function sendToTelegram(name: string, phone: string) {
		const res = await fetch("/api/telegram", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ name, phone }),
		})

		const data = await res.json()
		return data.ok
	}

	/* -------------------------------
	         SUBMIT FORM
	-------------------------------- */
	async function handleSubmit(e: React.FormEvent) {
		e.preventDefault()

		// сброс статусов
		setSuccess(false)
		setError(false)

		// базовая валидация
		const phoneDigits = form.phone.replace(/\D/g, "")
		if (!form.name.trim() || phoneDigits.length < 10) {
			setError(true)
			return
		}

		setLoading(true)

		const ok = await sendToTelegram(form.name, form.phone)

		setLoading(false)

		if (ok) {
			setSuccess(true)
			setForm({ name: "", phone: "" })
		} else {
			setError(true)
		}
	}

	return (
		<div
			className={`
				bg-white/95 backdrop-blur-md border-0 shadow-2xl/10 
				rounded-3xl
				p-6 md:p-8
				max-w-full
				${className}
			`}
		>
			<h3 className="text-lg md:text-xl font-semibold mb-2 text-[#2b2b2b]">
				{title}
			</h3>

			<p className="text-sm text-[#707070] mb-6">{subtitle}</p>

			<form className="flex flex-col gap-4" onSubmit={handleSubmit}>
				<Input
					placeholder="Enter your name"
					value={form.name}
					onChange={(e) => setForm({ ...form, name: e.target.value })}
					className={`py-6 px-4 rounded-lg border 
					    ${error && !form.name.trim() ? "border-red-500" : "border-gray-300"}
						text-gray-800 focus:border-[#ffb700] 
						focus:ring-2 focus:ring-[#ffb700]/40 
						outline-none transition-all`}
				/>

				<PhoneInputField
					value={form.phone}
					onChange={(v) => setForm({ ...form, phone: v || "" })}
				/>

				<Button
					type="submit"
					disabled={loading}
					className="
						mt-2 bg-[#ffb700] hover:bg-[#ffcc33]
						text-black font-medium 
						rounded-xl 
						py-3.5 md:py-4
						text-base md:text-lg  
						transition-colors duration-150
					"
				>
					{loading ? "Sending..." : buttonText}
				</Button>

				{success && (
					<p className="text-green-600 text-sm">
						Request sent successfully!
					</p>
				)}

				{error && (
					<p className="text-red-600 text-sm">
						Please fill in your name and phone number correctly.
					</p>
				)}
			</form>
		</div>
	)
}
