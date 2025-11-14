"use client"

import KitchenCarousel from "@/components/sections/KitchenCarousel"

export default function ProjectsCarousel() {
	return (
		<section className="w-full bg-[#fafafa] py-24 px-6 text-center">
			<div className="max-w-6xl mx-auto">

				<h2 className="mainheading">
					In 2021 we built not just <span className="font-bold text-[#ffb700]">376 kitchens</span> — 
					we created personal comfort for <span className="font-bold text-[#ffb700]">376 families.</span>
				</h2>

				<p className="maintext">
					Each completed project is a unique reflection of our client’s personality and lifestyle.
				</p>

				{/* ВСТАВКА ГОТОВОЙ КАРУСЕЛИ */}
				<KitchenCarousel />
			</div>
		</section>
	)
}
