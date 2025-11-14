"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useModal } from "@/components/sections/ModalProvider"

export default function MapSection() {
	const { openModal } = useModal()

	return (
		<section className="section relative w-full bg-[#fffaf3] overflow-hidden">

			<div className="col-span-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">

				{/* MAP */}
				<div className="flex">
					<div className="relative w-full h-full rounded-2xl overflow-hidden shadow-lg min-h-[350px]">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423809.4949443506!2d18.326424165814068!3d-33.915098981775145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc500f8826eed7%3A0x687fe1fc2828aa87!2z0JrQtdC50L_RgtCw0YPQvSwg0K7QttC90LDRjyDQkNGE0YDQuNC60LA!5e0!3m2!1sru!2slt!4v1762524139753!5m2!1sru!2slt"
							width="100%"
							height="100%"
							style={{ border: 0 }}
							allowFullScreen
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
						/>
					</div>
				</div>

				{/* CARD */}
				<div className="flex justify-end relative">
					<Card
						className="bg-white border-0 rounded-2xl shadow-xl
							px-8 py-6 w-full max-w-lg
							relative z-10 -ml-20 compact-text"
					>
						<CardContent className="p-0 flex flex-col gap-3">

							<h2 className="sectionheading sectionheading-dark">
								Would you like to{" "}
								<span className="font-semibold text-[#ffb700]">see our materials</span>{" "}
								and explore{" "}
								<span className="font-semibold text-[#ffb700]">real kitchen samples</span>{" "}
								in person?
							</h2>

							<p className="smalltext">
								Visit our showroom — we’ll be happy to meet you and discuss your project!
							</p>

							<div className="space-y-2">
								<div>
									<p className="text-sm text-[#999]">Phone:</p>
									<p className="font-semibold text-lg text-[#2b2b2b]">
										+27 (800) 707-64-62
									</p>
								</div>

								<div>
									<p className="text-sm text-[#999]">Address:</p>
									<p className="font-semibold text-[#2b2b2b]">
										45 Highveld Rd, Kempton Park, Johannesburg, South Africa
									</p>
								</div>

								<div>
									<p className="text-sm text-[#999]">Working hours:</p>
									<p className="font-semibold text-[#2b2b2b]">
										09:00 — 19:00
									</p>
								</div>
							</div>

							<Button
								onClick={openModal}
								className="w-full text-black font-medium rounded-xl py-5 text-lg shadow-md mt-2"
							>
								Book a consultation
							</Button>

						</CardContent>
					</Card>
				</div>

			</div>
		</section>
	)
}
