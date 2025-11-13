"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function FounderCard() {
	return (
		<section className="section bg-gray-50 py-16 md:py-20">
			<div className="card col-span-12 relative grid md:grid-cols-2 overflow-hidden p-0">
				
				{/* Левая часть — текст */}
				<CardContent className="relative z-10 flex flex-col justify-center p-6 md:p-12">
					<p className="subheading">
						We take pride in creating furniture that will serve you for years to come.
					</p>

					<h2 className="mainheading">
						Hello, we are KitchenShop
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

				{/* Правая часть — изображение */}
				<div className="relative md:absolute md:inset-y-0 md:right-0 md:w-1/2 w-full h-[300px] md:h-auto">
					<Image
						src="/images/features/kitchencard.png"
						alt="Modern kitchen"
						fill
						className="object-cover object-[0%_center]"
						priority
					/>
				</div>
			</div>
		</section>
	)
}
