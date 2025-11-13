"use client"

import Image from "next/image"
import ConsultationForm from "@/components/layout/ConsultationForm"

export default function ConsultationSection() {
	return (
		<section className="section relative w-full overflow-hidden bg-transparent">
			{/* Фон */}
			<Image
				src="/images/122.png"
				alt="Kitchen background"
				fill
				className="object-cover object-center"
				priority
			/>
			<div className="absolute inset-0 bg-white/30 backdrop-blur-[2px]" />

			{/* Контент в 12 колонок (используем .section) */}
			{/* Левая часть */}
			<div className="relative col-span-12 lg:col-span-6">
				<h2 className="sectionheading sectionheading-dark">
					Would you like a kitchen that’s{" "}
					<span className="font-semibold text-black">comfortable to cook in</span>{" "}
					and where{" "}
					<span className="font-semibold text-black">
						every detail has its perfect place?
					</span>
				</h2>

				{/* Карточки преимуществ */}
				{/* Desktop */}
				<div className="hidden lg:block relative mt-10">
					<div className="absolute left-0 top-0">
						<FeatureCard
							text="Proper number and placement of power outlets"
							image="/images/features/sockets.png"
						/>
					</div>
					<div className="absolute left-10 top-36">
						<FeatureCard
							text="Lighting that keeps your eyes comfortable"
							image="/images/features/light.png"
						/>
					</div>
					<div className="absolute left-0 top-72">
						<FeatureCard
							text="Smooth and reliable drawer movement"
							image="/images/features/drawers.png"
						/>
					</div>
					<div className="h-[420px]" />
				</div>

				{/* Mobile */}
				<div className="flex flex-col gap-5 mt-10 lg:hidden">
					<FeatureCard
						text="Proper number and placement of power outlets"
						image="/images/features/sockets.png"
					/>
					<FeatureCard
						text="Lighting that keeps your eyes comfortable"
						image="/images/features/light.png"
					/>
					<FeatureCard
						text="Smooth and reliable drawer movement"
						image="/images/features/drawers.png"
					/>
				</div>
			</div>

			{/* Правая часть — форма */}
			<div className="col-span-12 lg:col-span-6 flex justify-center lg:justify-end">
				<ConsultationForm
					title="Get a free design consultation with our kitchen specialist"
					subtitle="We’ll call you back within 15 minutes"
					buttonText="Get a consultation"
					className="max-w-md w-full"
				/>
			</div>
		</section>
	)
}

/* --------------------- */
/* Feature Card — статичная без hover */
/* --------------------- */
function FeatureCard({ image, text }: { image: string; text: string }) {
	return (
		<div className="flex items-stretch rounded-2xl shadow-2xl/10 bg-white overflow-hidden w-[420px] max-w-full min-h-[110px]">
			<div className="relative w-1/4 min-w-[100px] h-[110px]">
				<Image src={image} alt={text} fill className="object-cover" />
			</div>
			<div className="flex-1 flex items-center px-6">
				<p className="cardtext">{text}</p>
			</div>
		</div>
	)
}
