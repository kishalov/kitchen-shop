"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useModal } from "@/components/sections/ModalProvider"

export default function StepsSection() {
	const { openModal } = useModal()

	return (
		<section className="section bg-white">
			<h2 className="mainheading col-span-12 text-center">
				Only <span className="font-semibold text-black">5 steps</span> — and your brand new kitchen will be ready in just{" "}
				<span className="font-semibold text-black">14 days</span>
			</h2>

			<div className="steps-grid col-span-12">

				{/* Step 1 */}
				<Card className="step-1 bg-[#1a1a1a] text-white flex flex-col justify-start rounded-2xl p-8 shadow-lg relative">
					<CardContent className="p-0 relative z-10 flex flex-col h-full justify-start">
						<div>
							<h3 className="font-bold text-xl mb-3">Request a Measurement</h3>
							<p className="text-sm leading-relaxed">
								Submit a request — we’ll discuss your preferences and agree on a convenient time for our designer to visit.
							</p>
						</div>
						<Button
							onClick={openModal}
							className="text-black font-semibold text-lg rounded-xl px-25 py-1 mt-6 self-start"
							>
							Book a visit
						</Button>

					</CardContent>
				</Card>

				{/* Step 2 */}
				<Card className="step-2 relative overflow-hidden rounded-2xl shadow-md border-0 flex flex-col justify-center text-white">
					<Image src="/images/steps/measure.png" alt="Measurement & Design" fill className="object-cover" />
					<div className="absolute inset-0 bg-black/60" />
					<CardContent className="relative z-10 p-8 flex flex-col justify-center">
						<span className="absolute right-6 top-4 text-[250px] font-bold text-white/20 select-none leading-none">01</span>
						<h3 className="font-bold text-xl mb-2">Measurement & Design Project</h3>
						<p className="text-sm leading-relaxed">
							A free visit from our specialist to take precise measurements and create a detailed kitchen design with an accurate cost estimate.
						</p>
					</CardContent>
				</Card>

				{/* Step 3 */}
				<Card className="step-3 bg-white relative overflow-hidden rounded-2xl shadow-md border-0 flex flex-row items-center">
					<div className="relative w-1/3 flex justify-center items-center">
						<Image
							src="/images/steps/contract.png"
							alt="Contract"
							width={200}
							height={260}
							className="object-contain drop-shadow-lg rotate-[-4deg]"
						/>
					</div>
					<CardContent className="relative w-2/3 z-10 flex flex-col justify-center gap-3 pr-8">
						<span className="absolute right-6 top-4 text-[250px] font-bold text-black/10 select-none leading-none">02</span>
						<h3 className="font-bold text-lg text-black">Contract</h3>
						<p className="text-sm text-[#2b2b2b] leading-relaxed">
							After approving the design and estimate, we sign a formal contract. A <b>10% prepayment</b> is required to start production.
						</p>
					</CardContent>
				</Card>

				{/* Step 4 */}
				<Card className="step-4 relative overflow-hidden rounded-2xl shadow-md border-0 flex flex-col justify-center text-white">
					<Image src="/images/steps/production.png" alt="Manufacturing" fill className="object-cover" />
					<div className="absolute inset-0 bg-black/45" />
					<CardContent className="relative z-10 p-8 flex flex-col justify-center">
						<span className="absolute right-6 top-4 text-[250px] font-bold text-white/20 select-none leading-none">03</span>
						<h3 className="font-bold text-xl mb-2">Manufacturing</h3>
						<p className="text-sm leading-relaxed">
							Your kitchen is crafted on modern European equipment according to your individual dimensions.
						</p>
					</CardContent>
				</Card>

				{/* Step 5 */}
				<Card className="step-5 bg-[#ffdb7c] relative overflow-hidden rounded-2xl shadow-md border-0 flex flex-col justify-center">
					<CardContent className="relative z-10 p-8 flex flex-col justify-center gap-3">
						<span className="absolute right-6 top-4 text-[250px] font-bold text-black/10 select-none leading-none">04</span>
						<h3 className="font-bold text-lg text-black">Quality Control</h3>
						<p className="text-sm text-[#2b2b2b] leading-relaxed max-w-sm">
							Each kitchen undergoes a strict quality check to ensure it matches your expectations perfectly.
						</p>
					</CardContent>
				</Card>

				{/* Step 6 */}
				<Card className="step-6 relative overflow-hidden rounded-2xl shadow-md border-0 flex flex-col justify-center text-white">
					<Image src="/images/steps/install.png" alt="Assembly & Installation" fill className="object-cover" />
					<div className="absolute inset-0 bg-black/60" />
					<CardContent className="relative z-10 p-8 flex flex-col justify-center">
						<span className="absolute right-6 top-4 text-[250px] font-bold text-white/20 select-none leading-none">05</span>
						<h3 className="font-bold text-xl mb-2">Assembly & Installation</h3>
						<p className="text-sm leading-relaxed">
							Free installation by skilled craftsmen with over <b>5 years of experience</b>.
						</p>
					</CardContent>
				</Card>

			</div>
		</section>
	)
}
