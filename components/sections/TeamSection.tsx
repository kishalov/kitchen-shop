"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

const team = [
	{ name: "Emily Johnson", role: "3D Designer", image: "/images/team/3d.png" },
	{ name: "David Miller", role: "Measurement Specialist", image: "/images/team/zamer.png" },
	{ name: "James Thompson", role: "Production Manager", image: "/images/team/production.png" },
	{ name: "Sarah Collins", role: "Kitchen Consultant", image: "/images/team/consultant.png" },
]

export default function TeamSection() {
	return (
		<section className="section bg-[#fbcc57] text-center">
			{/* Заголовок */}
			<div className="col-span-12">
				<h2 className="mainheading leading-tight text-[#2b2b2b] mb-16">
					Delivering{" "}
					<span className="font-semibold text-black">flawless quality</span> and{" "}
					<span className="font-semibold text-black">excellent service</span> is only possible
					with the right people on the team.
				</h2>
			</div>

			{/* Карточки команды */}
			<div className="col-span-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
				{team.map((member) => (
					<Card
						key={member.name}
						className="card w-full max-w- border-0 shadow-md hover:shadow-xl transition-shadow"
					>
						<CardContent className="flex flex-col items-center py-4 md:py-0 px-6">
							<div className="relative w-32 h-32 mb-4">
								<Image
									src={member.image}
									alt={member.name}
									fill
									className="rounded-full object-cover"
								/>
							</div>
							<h3 className="text-lg font-semibold text-black mb-1">{member.name}</h3>
							<p className="text-gray-600 text-sm">{member.role}</p>
						</CardContent>
					</Card>
				))}
			</div>
		</section>
	)
}
