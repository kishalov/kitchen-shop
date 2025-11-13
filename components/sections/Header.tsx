"use client"

import Image from "next/image"
import Link from "next/link"
import Container from "@/components/layout/Container"

export default function Header() {
	return (
		<header className="fixed top-0 left-0 w-full z-50 bg-transparent py-3 sm:py-4 backdrop-blur-sm">
			<Container className="flex justify-between items-center">
				{/* Логотип */}
				<div className="flex items-center gap-2 sm:gap-3">
					<Image
						src="/images/logo.svg"
						alt="Империя Кухонь"
						width={150}
						height={150}
						className="object-contain w-[130px] sm:w-[150px] md:w-[170px] h-auto"
					/>
				</div>

				{/* Контакты */}
				<div className="flex items-center gap-4 sm:gap-6 md:gap-8">
					{/* Текст слева от иконок */}
					<div className="hidden md:flex flex-col text-right">
						<p className="text-sm text-[#707070]">Contact us</p>
						<p className="text-xs text-[#999] -mt-1">via messengers:</p>
					</div>

					{/* Иконки */}
					<div className="flex items-center gap-2 sm:gap-3">
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

					{/* Телефон */}
					<div className="hidden sm:block text-right">
						<p className="font-bold text-[#2b2b2b] text-sm sm:text-base md:text-lg leading-tight">
							+27 (800) 707-64-62
						</p>
						<p className="text-xs sm:text-sm text-[#707070]">
							Daily from 9:00 to 18:00
						</p>
					</div>
				</div>
			</Container>
		</header>
	)
}
