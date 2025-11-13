"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Container from "@/components/layout/Container"

export default function GuaranteesSection() {
	return (
		<section className="relative w-full bg-white py-24 px-6 overflow-hidden">
			<Container>
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
					{/* Левая часть */}
					<div>
						<h2 className="sectionheading sectionheading-dark">
							When working with us,{" "}
							<span className="font-semibold text-black">
								you get 3 guarantees
							</span>{" "}
							— all secured in an official contract
						</h2>
						<p className="smalltext">
							You can feel confident about the timing and quality of your future
							kitchen.
						</p>

						{/* Карточки */}
						<div className="flex flex-col gap-6">
							<GuaranteeCard
								bg="bg-white"
								shadow="shadow-md"
								image="/images/guarantees/pen.png"
								title="Reliability Guarantee"
								text="Every process — from measurements to the final screw — is carried out with precision craftsmanship."
								size="medium"
							/>
							<GuaranteeCard
								bg="bg-[#1a1a1a] text-white"
								shadow="shadow-lg"
								image="/images/guarantees/card.png"
								title="Fixed Price Guarantee"
								text="The price will not change — it remains exactly as stated in your signed contract."
								size="large"
							/>
							<GuaranteeCard
								bg="bg-[#ffdb7c]"
								shadow="shadow-md"
								image="/images/guarantees/calendar.png"
								title="On-Time Delivery Guarantee"
								text="Production takes between 10 and 14 days. For each day of delay, we pay a contractual penalty."
								size="large"
							/>
						</div>
					</div>

					{/* Правая часть — документ + кнопка */}
					<div className="relative flex flex-col items-center justify-end h-full">
						<Image
							src="/images/contract221.png"
							alt="Official Contract"
							width={700}
							height={700}
							className="object-contain translate-y-10"
							priority
						/>

						<Button
							className="
								mt-16 text-black font-medium
								rounded-xl px-60 py-10 text-lg shadow-md
								max-md:px-10 max-md:py-4 max-md:text-base
							"
						>
							Download Contract
						</Button>
					</div>
				</div>
			</Container>
		</section>
	)
}

function GuaranteeCard({
	image,
	title,
	text,
	bg = "bg-white",
	shadow = "shadow-sm",
	size = "medium",
}: {
	image: string
	title: string
	text: string
	bg?: string
	shadow?: string
	size?: "small" | "medium" | "large"
}) {
	// размеры иконок в зависимости от типа карточки
	const sizeClasses =
		size === "large"
			? "w-28 h-28 md:w-32 md:h-32"
			: size === "medium"
			? "w-24 h-24 md:w-28 md:h-28"
			: "w-20 h-20 md:w-24 md:h-24"

	return (
		<Card className={`${bg} ${shadow} border-0 rounded-2xl p-6`}>
			<CardContent className="p-0 flex items-center gap-6">
				{/* Иконка слева */}
				<div className={`relative shrink-0 ${sizeClasses}`}>
					<Image
						src={image}
						alt={title}
						fill
						className="object-contain"
						sizes="128px"
					/>
				</div>

				{/* Текст справа */}
				<div>
					<h3 className="font-semibold text-lg mb-1 leading-tight">{title}</h3>
					<p className="text-sm text-current/80 leading-relaxed">{text}</p>
				</div>
			</CardContent>
		</Card>
	)
}
