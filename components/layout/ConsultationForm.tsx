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

	function handleSubmit(e: React.FormEvent) {
		e.preventDefault()
		console.log(form)
	}

	return (
		<div
			className={`card bg-white/95 backdrop-blur-md border-0 shadow-2xl/10 max-w-md ml-auto ${className}`}
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
					className="py-3"
				/>

				<PhoneInputField
					value={form.phone}
					onChange={(v) => setForm({ ...form, phone: v || "" })}
				/>

				<Button
					type="submit"
					className="mt-2 bg-[#ffb700] hover:bg-[#ffcc33] text-black font-medium rounded-xl py-3 transition-colors duration-150"
				>
					{buttonText}
				</Button>
			</form>
		</div>
	)
}
