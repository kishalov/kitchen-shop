"use client"

import Image from "next/image"
import Container from "@/components/layout/Container"
import Link from "next/link"

export default function FooterSection() {
	return (
		<footer className="w-full bg-[#fffaf3] border-t border-gray-200 py-6">
			<Container className="flex justify-between items-center">
				
				{/* ЛОГО */}
				<div className="flex items-center gap-2 sm:gap-3">
					<Image
						src="/images/logo.svg"
						alt="Kitchen Shop"
						width={150}
						height={150}
						className="object-contain w-[130px] sm:w-[150px] md:w-[170px] h-auto"
					/>
				</div>

				{/* Контакты справа */}
				<div className="flex items-center gap-4 sm:gap-6 md:gap-8">

					{/* Иконки — скрываем на мобильных */}
					<div className="hidden sm:flex items-center gap-2 sm:gap-3">
						<Link href="https://wa.me/88007076462" target="_blank">
							<Image
								src="/images/social/waicon.svg"
								alt="WhatsApp"
								width={32}
								height={32}
								className="hover:scale-105 transition-transform"
							/>
						</Link>
						<Link href="https://t.me/example" target="_blank">
							<Image
								src="/images/social/tgicon.svg"
								alt="Telegram"
								width={30}
								height={30}
								className="hover:scale-105 transition-transform"
							/>
						</Link>
					</div>

					{/* Номер телефона */}
					<div className="text-right">
						<p className="
							font-bold text-[#2b2b2b]
							text-xs sm:text-sm md:text-lg
							max-[360px]:text-[11px]
							leading-tight
						">
							+27 (800) 707-64-62
						</p>

						<p className="text-[10px] sm:text-sm text-[#707070]">
							Daily from 9:00 to 18:00
						</p>
					</div>
				</div>

			</Container>
		</footer>
	)
}
