"use client"

import Image from "next/image"
import { CardContent } from "@/components/ui/card"

export default function FounderCard() {
	return (
		<section className="section bg-gray-50 py-16 md:py-20">
			
			<div className="card-no-padding relative overflow-hidden col-span-12 grid md:grid-cols-2">

				{/* Текст */}
				<CardContent
					className="
						relative z-10 flex flex-col justify-center
						pt-8 pb-2
						sm:pt-10 sm:pb-10
						md:pt-12 md:pb-12
						lg:pt-16 lg:pb-14
						pl-5 sm:pl-8 md:pl-10 lg:pl-12
						pr-5 sm:pr-8 md:pr-10 lg:pr-12
					"
				>
					<p className="subheading">
						We take pride in creating furniture that will serve you for years to come.
					</p>

					<h2 className="mainheading">
						Hello, we are <span className="font-semibold text-[#ffb700]">KitchenShop</span>
					</h2>

					<p className="maintext">
						For over seven years, we’ve been designing and building custom kitchen
						furniture that combines European quality with affordable local pricing.
					</p>

					<p className="smalltext">
						With our full-cycle production, we ensure your kitchen is completed within
						14 days — a commitment backed by our personal quality guarantee. Since 2014,
						we’ve designed and installed more than 900 kitchens for happy customers.
					</p>

					<p className="smalltext">
						We’re constantly improving our service to make every step of your kitchen
						purchase fast, comfortable, and stress-free. From the first consultation
						to post-installation support — we’re here for you every step of the way.
					</p>
				</CardContent>

				{/* Картинка */}
				<div className="relative md:absolute md:inset-y-0 md:right-0 md:w-1/2 w-full h-[300px] md:h-auto">
					<Image
						src="/images/features/kitchencard.png"
						alt="Modern kitchen"
						fill
						className="object-cover"
						priority
					/>
				</div>

			</div>
		</section>
	)
}
