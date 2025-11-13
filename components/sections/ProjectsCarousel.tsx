"use client"

import Image from "next/image"
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"

const projects = [
	{
		image: "/images/projects/kitchen1.png",
		name: "Michael Dlamini",
		date: "28.09.2021",
		stars: 5,
		title: "They don’t impose their own ideas — they listen and guide carefully",
		text: "Before working with Kitchen Shop, I had a bad experience with furniture companies — there was always a lack of understanding. Here it’s different: they truly listen to what you need, suggest improvements gently, and make you feel heard.",
		fittings: "BLUM",
		facade: "FENIX Plastic",
		price: "ZAR 175,000",
		duration: "16 days",
		avatar: "/images/avatars/michael.png",
	},
	{
		image: "/images/projects/kitchen2.png",
		name: "Thandi Nkosi",
		date: "04.10.2021",
		stars: 5,
		title: "We were left with the best impression!",
		text: "Kitchen Shop exceeded all our expectations. The furniture quality and the entire process were top-notch. Every detail was done on time, with clear communication and professionalism.",
		fittings: "BLUM",
		facade: "Solid wood with patina",
		price: "ZAR 189,000",
		duration: "28 days",
		avatar: "/images/avatars/thandi.png",
	},
	{
		image: "/images/projects/kitchen3.png",
		name: "Lerato van der Merwe",
		date: "18.07.2023",
		stars: 5,
		title: "In the end, the kitchen fit perfectly — down to a millimetre.",
		text: "What impressed me most was their precision. The designer came twice for measurements — no guesswork, no shortcuts. The final kitchen fits the space flawlessly and looks even better than expected.",
		fittings: "BLUM",
		facade: "FENIX + SMART",
		price: "ZAR 210,000",
		duration: "21 days",
		avatar: "/images/avatars/lerato.png",
	},
]

export default function ProjectsCarousel() {
	return (
		<section className="w-full bg-[#fafafa] py-24 px-6 text-center">
			<div className="max-w-6xl mx-auto">
				{/* Heading */}
				<h2 className="mainheading">
					In <span className="font-bold">2021</span> we built not just{" "}
					<span className="font-bold">376 kitchens</span> — we created{" "}
					<span className="font-bold">personal comfort</span> for{" "}
					<span className="font-bold">376 families.</span>
				</h2>
				<p className="maintext">
					Each completed project is a unique reflection of our client’s
					personality and lifestyle.
				</p>

				{/* Carousel */}
				<Carousel className="relative">
					<CarouselContent>
						{projects.map((p, i) => (
							<CarouselItem key={i}>
								<Card className="flex flex-col md:flex-row items-stretch gap-6 rounded-2xl shadow-lg border-0 bg-white overflow-hidden">
									{/* Kitchen image */}
									<div className="relative w-full md:w-1/2 min-h-[360px]">
										<Image
											src={p.image}
											alt={p.name}
											fill
											className="object-cover"
										/>
									</div>

									{/* Review */}
									<CardContent className="w-full md:w-1/2 flex flex-col justify-between text-left p-8">
										{/* Author */}
										<div className="flex items-center gap-4 mb-4">
											<div className="relative w-12 h-12 rounded-full overflow-hidden">
												<Image
													src={p.avatar}
													alt={p.name}
													fill
													className="object-cover"
												/>
											</div>
											<div>
												<p className="font-semibold text-black">{p.name}</p>
												<p className="text-sm text-gray-500">{p.date}</p>
											</div>
										</div>

										{/* Rating */}
										<div className="flex mb-3">
											{Array.from({ length: p.stars }).map((_, j) => (
												<span key={j} className="text-yellow-400 text-lg">
													★
												</span>
											))}
										</div>

										{/* Text */}
										<h3 className="font-semibold text-lg mb-2 text-black">
											{p.title}
										</h3>
										<p className="text-gray-700 text-sm leading-relaxed mb-4">
											{p.text}
										</p>

										<div className="mt-auto grid grid-cols-3 gap-y-2 text-sm text-gray-800">
											<div>
												<span className="text-gray-500">Fittings</span>
												<br />
												<span className="font-semibold">{p.fittings}</span>
											</div>
											<div>
												<span className="text-gray-500">Facade</span>
												<br />
												<span className="font-semibold">{p.facade}</span>
											</div>
											<div>
												<span className="text-gray-500">Price</span>
												<br />
												<span className="font-semibold">{p.price}</span>
											</div>
											<div>
												<span className="text-gray-500">Lead time</span>
												<br />
												<span className="font-semibold">{p.duration}</span>
											</div>
										</div>
									</CardContent>
								</Card>
							</CarouselItem>
						))}
					</CarouselContent>

						<CarouselPrevious className="absolute -left-4 lg:-left-12 top-1/2 -translate-y-1/2 bg-[#ffde7b] hover:bg-[#ffd43b] text-black w-12 h-12 rounded-full shadow-md flex items-center justify-center p-0"/>
						<CarouselNext className="absolute -right-4 lg:-right-12 top-1/2 -translate-y-1/2 bg-[#ffde7b] hover:bg-[#ffd43b] text-black w-12 h-12 rounded-full shadow-md flex items-center justify-center p-0"/>
				</Carousel>
			</div>
		</section>
	)
}
