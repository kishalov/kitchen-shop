"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useModal } from "@/components/sections/ModalProvider"

export default function MapSection() {
	const { openModal } = useModal()

	return (
		<section className="relative w-full bg-[#fffaf3] py-20 px-6 overflow-hidden">
			<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
				{/* Map */}
				<div className="relative w-full h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-md">
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

				{/* Right card */}
				<Card className="bg-white border-0 rounded-2xl shadow-xl p-8 relative z-10">
					<CardContent className="p-0 space-y-5">
						<h2 className="sectionheading sectionheading-dark">
							Would you like to{" "}
							<span className="font-semibold text-black">see our materials</span>{" "}
							and explore{" "}
							<span className="font-semibold text-black">real kitchen samples</span>{" "}
							in person?
						</h2>
						<p className="smalltext">
							Visit our showroom — we’ll be happy to meet you and discuss your project!
						</p>

						<div className="space-y-4 mt-6">
							<div>
								<p className="text-sm text-[#999] mb-1">Phone:</p>
								<p className="font-semibold text-lg text-[#2b2b2b]">
									+27 (800) 707-64-62
								</p>
							</div>

							<div>
								<p className="text-sm text-[#999] mb-1">Address:</p>
								<p className="font-semibold text-[#2b2b2b]">
									45 Highveld Rd, Kempton Park, Johannesburg, South Africa
								</p>
							</div>

							<div>
								<p className="text-sm text-[#999] mb-1">Working hours:</p>
								<p className="font-semibold text-[#2b2b2b]">09:00 — 19:00</p>
							</div>
						</div>

						{/* Крупная кнопка */}
						<div className="mt-8">
							<Button
								onClick={openModal}
								className="w-full text-black font-medium rounded-xl px-20 py-8 text-lg sm:text-xl shadow-md"
							>
								Book a consultation
							</Button>
						</div>
					</CardContent>
				</Card>
			</div>

			{/* Bottom block */}
			<div className="max-w-7xl mx-auto mt-20 flex flex-col md:flex-row justify-between items-center gap-6 border-t border-gray-200 pt-6">
				<div className="flex items-center gap-3">
					<Image
						src="/images/logo.svg"
						alt="Kitchen Shop"
						width={100}
						height={100}
						className="object-contain"
					/>
					<div>
						<p className="font-semibold text-[#2b2b2b]">Hello, we are KitchenShop</p>
						<p className="text-sm text-[#707070]">
							We design and install custom kitchens across South Africa
						</p>
					</div>
				</div>

				<div className="flex items-center gap-4">
					<a href="https://t.me/example" target="_blank" rel="noopener noreferrer">
						<Image src="/images/social/tgicon.svg" alt="Telegram" width={33} height={33} />
					</a>
					<a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
						<Image src="/images/social/waicon.svg" alt="WhatsApp" width={35} height={35} />
					</a>
				</div>

				<div className="text-center md:text-right">
					<p className="font-semibold text-[#2b2b2b]">+27 (800) 707-64-62</p>
					<p className="text-sm text-[#707070]">Daily from 9:00 to 18:00</p>
				</div>
			</div>
		</section>
	)
}
