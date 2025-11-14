"use client"

import Image from "next/image"
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel"

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

export default function KitchenCarousel() {
	return (
		<div className="relative mt-12">
			<Carousel className="relative w-full">

				<CarouselContent className="-ml-4">
					{projects.map((p, i) => (
						<CarouselItem key={i} className="pl-4">

							<div className="
								flex flex-col md:flex-row
								rounded-2xl shadow-lg bg-white overflow-hidden
								min-h-[520px] md:min-h-[420px]
							">

								{/* ЛЕВАЯ ФОТО */}
								<div className="relative w-full md:w-1/2 h-[260px] md:h-auto">
									<Image
										src={p.image}
										alt={p.name}
										fill
										className="object-cover"
									/>
								</div>

								{/* ПРАВАЯ ЧАСТЬ */}
								<div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col text-left">

									{/* Автор */}
									<div className="flex items-center gap-4 mb-4">
										<div className="relative w-12 h-12 rounded-full overflow-hidden">
											<Image src={p.avatar} alt={p.name} fill className="object-cover" />
										</div>
										<div>
											<p className="font-semibold text-black">{p.name}</p>
											<p className="text-sm text-gray-500">{p.date}</p>
										</div>
									</div>

									{/* Рейтинг */}
									<div className="flex mb-3">
										{Array.from({ length: p.stars }).map((_, j) => (
											<span key={j} className="text-yellow-400 text-lg">★</span>
										))}
									</div>

									<h3 className="font-semibold text-lg mb-2 text-black">{p.title}</h3>
									<p className="text-gray-700 text-sm leading-relaxed mb-4">{p.text}</p>

									{/* Таблица */}
									<div className="grid grid-cols-3 gap-y-2 text-sm text-gray-800 mt-auto">
										<div><span className="text-gray-500">Fittings</span><br /><b>{p.fittings}</b></div>
										<div><span className="text-gray-500">Facade</span><br /><b>{p.facade}</b></div>
										<div><span className="text-gray-500">Price</span><br /><b>{p.price}</b></div>
										<div><span className="text-gray-500">Lead time</span><br /><b>{p.duration}</b></div>
									</div>

								</div>
							</div>

						</CarouselItem>
					))}
				</CarouselContent>

				{/* СТРЕЛКИ — БЕРЁМ ИЗ ui/carousel.tsx */}
				<CarouselPrevious />
				<CarouselNext />

			</Carousel>
		</div>
	)
}
