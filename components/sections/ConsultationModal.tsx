"use client"

import { useState } from "react"
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import PhoneInputField from "@/components/layout/PhoneInputField"

type Props = {
	open: boolean
	onOpenChange: (open: boolean) => void
}

export default function ConsultationModal({ open, onOpenChange }: Props) {
	const [form, setForm] = useState({
		name: "",
		phone: "",
	})

	const [loading, setLoading] = useState(false)
	const [success, setSuccess] = useState(false)
	const [error, setError] = useState(false)

	/* --------------------------------
	         SEND LEAD TO API
	-------------------------------- */
	async function sendLead(name: string, phone: string) {
		const res = await fetch("/api/lead", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ name, phone }),
		})

		const data = await res.json()
		return data.ok
	}

	/* --------------------------------
	                SUBMIT
	-------------------------------- */
	async function handleSubmit(e: React.FormEvent) {
		e.preventDefault()

		setSuccess(false)
		setError(false)

		// мягкая валидация
		const digits = form.phone.replace(/\D/g, "")
		if (!form.name.trim() || digits.length < 10) {
			setError(true)
			return
		}

		setLoading(true)

		const ok = await sendLead(form.name, form.phone)

		setLoading(false)

		if (ok) {
			setSuccess(true)
			setForm({ name: "", phone: "" })

			setTimeout(() => onOpenChange(false), 400)
		} else {
			setError(true)
		}
	}

	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent
				onOpenAutoFocus={(e) => e.preventDefault()}
				className="border-0 bg-white rounded-2xl shadow-xl p-6 sm:p-8 max-w-sm w-[90%] mx-auto text-center"
			>
				<DialogHeader className="mb-2">
					<DialogTitle className="text-2xl font-bold text-[#2b2b2b] text-center">
						Book your free consultation
					</DialogTitle>
					<p className="text-[#707070] mt-2 leading-snug text-sm sm:text-base text-center">
						We’ll call you back within{" "}
						<span className="font-semibold">15 minutes</span>, clarify your
						kitchen details and prepare an estimate in{" "}
						<span className="font-semibold">3 options</span>.
					</p>
				</DialogHeader>

				<form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-2">
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
						onChange={(v) => setForm({ ...form, phone: v })}
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
						{loading ? "Sending..." : "Get a consultation"}
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
			</DialogContent>
		</Dialog>
	)
}
