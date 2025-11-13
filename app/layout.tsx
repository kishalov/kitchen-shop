import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import ClientWrapper from "@/components/layout/ClientWrapper"

const clashGrotesk = localFont({
	src: [
		{ path: "./fonts/ClashGrotesk-Extralight.woff2", weight: "200", style: "normal" },
		{ path: "./fonts/ClashGrotesk-Light.woff2", weight: "300", style: "normal" },
		{ path: "./fonts/ClashGrotesk-Regular.woff2", weight: "400", style: "normal" },
		{ path: "./fonts/ClashGrotesk-Medium.woff2", weight: "500", style: "normal" },
		{ path: "./fonts/ClashGrotesk-Semibold.woff2", weight: "600", style: "normal" },
		{ path: "./fonts/ClashGrotesk-Bold.woff2", weight: "700", style: "normal" },
	],
	display: "swap",
	variable: "--font-clash-grotesk",
})

export const metadata: Metadata = {
	title: "Империя Кухонь — изготовление стильных кухонь за 14 дней",
	description:
		"Создадим удобную и стильную кухню за 14 дней с гарантией до 10 лет от производителя. Бесплатный расчет и консультация.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="ru" className={clashGrotesk.variable}>
			<body className="font-sans antialiased bg-white text-gray-900">
				<ClientWrapper>{children}</ClientWrapper>
			</body>
		</html>
	)
}
