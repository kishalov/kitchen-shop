"use client"

import Image from "next/image"
import ConsultationForm from "@/components/layout/ConsultationForm"

export default function DesignerVisitSection() {
	return (
		<section className="section relative w-full overflow-hidden bg-transparent">
			{/* Background */}
			<Image
				src="/images/bg-kitchen.png"
				alt="Kitchen background"
				fill
				className="object-cover object-center opacity-90"
				priority
			/>
			<div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]" />

			{/* Content */}
			<div className="relative z-10 col-span-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
				{/* Left column */}
				<div className="relative">
					<h2 className="sectionheading sectionheading-light">
						Invite a{" "}
						<span className="font-semibold text-white">
							measurement specialist
						</span>{" "}
						for a free kitchen consultation
					</h2>

					<p className="smalltextwhite">
						Our designer will visit your home, take precise measurements, help
						with colour and layout choices, and provide professional advice. All
						that’s left is signing the contract and waiting for your new kitchen.
					</p>

					<h3 className="text-white font-medium mb-6">
						What the specialist will do:
					</h3>

					{/* Step-like cards */}
					<div className="relative">
						<div className="absolute left-0 top-0">
							<CheckCard text="Explain how to make the best use of your kitchen space" />
						</div>
						<div className="absolute left-10 top-24">
							<CheckCard text="Show material samples and help choose your kitchen design" />
						</div>
						<div className="absolute left-0 top-48">
							<CheckCard text="Take accurate measurements of your kitchen" />
						</div>
						<div className="h-[300px]" />
					</div>

					{/* Badge */}
					<div className="absolute -bottom-15 left-[60%] hidden sm:flex items-center gap-5 bg-[#ffdb7c] rounded-full px-5 py-2 shadow-2xl/10 w-fit z-20 whitespace-nowrap">
						<p className="text-sm font-medium text-[#2b2b2b]">David Miller</p>
						<span className="text-sm text-[#2b2b2b]/80">
							Measurement Specialist
						</span>
					</div>
				</div>

				{/* Right column — reusable form */}
				<ConsultationForm
					title="Book your free consultation"
					subtitle="We’ll call you back within 15 minutes"
					buttonText="Get a consultation"
				/>
			</div>

			{/* Specialist image */}
			<div className="absolute bottom-0 left-[35%] w-[600px] hidden lg:block">
				<Image
					src="/images/des.png"
					alt="Measurement specialist"
					width={600}
					height={800}
					className="object-contain drop-shadow-2xl"
					priority
				/>
			</div>
		</section>
	)
}

/* --------------------- */
/* Check Card — статичная, без hover */
/* --------------------- */
function CheckCard({ text }: { text: string }) {
	return (
		<div className="flex items-center gap-4 bg-white rounded-xl shadow-2xl/10 px-5 py-3 w-fit max-w-md">
			<div className="flex items-center justify-center bg-[#ffb700] w-8 h-8 rounded-full shrink-0">
				<span className="text-white text-lg font-bold">✓</span>
			</div>
			<p className="text-sm text-[#2b2b2b] font-medium leading-snug">{text}</p>
		</div>
	)
}
