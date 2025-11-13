"use client"

import { Button } from "@/components/ui/button"
import { useModal } from "@/components/sections/ModalProvider"

export default function Hero() {
	const { openModal } = useModal()

	return (
		<section
			className="section h-lvh bg-cover bg-center"
			style={{ backgroundImage: "url('/images/kitchenexample.png')" }}
		>
			<div className="card col-span-12 lg:col-span-9 xl:col-span-10">
				<p className="subheading">
					We design and install custom kitchens across South Africa
				</p>

				<h1 className="mainheading">
					We’ll create a comfortable and stylish kitchen in{" "}
					<span className="text-[#ffb700]">14 days </span>
					with a warranty of up to 10 years directly from the manufacturer
				</h1>

				<p className="maintext">
					Get a free consultation and a custom kitchen quote in 3 price options
				</p>

				<Button
					onClick={openModal}
					className="mt-8 px-16 py-6 text-lg max-md:px-10 max-md:py-4 max-md:text-base"
				>
					Calculate cost
				</Button>
			</div>
		</section>
	)
}
