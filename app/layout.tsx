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
	title: "Kitchen Shop — Stylish kitchens in 14 days",
	description:
		"We design and build stylish custom kitchens in 10–14 days with up to 10 years manufacturer’s warranty. Free quote and consultation.",

	// ✅ Добавленные favicon'ы
	icons: {
		icon: [
			{
				url: "/favicon2.svg",
				media: "(prefers-color-scheme: light)",
			},
			{
				url: "/favicon2.svg",
				media: "(prefers-color-scheme: dark)",
			},
		],
		apple: "/apple-touch-icon.png",
		other: [
			{
				rel: "icon",
				url: "/android-chrome-512x512.png",
				type: "image/png",
				sizes: "512x512",
			},
		],
	},

	openGraph: {
		title: "Kitchen Shop — Stylish kitchens in 14 days",
		description:
			"We design and build stylish custom kitchens in 10–14 days with up to 10 years manufacturer’s warranty. Free quote and consultation.",
		url: "https://www.kitchen-shop.co.za",
		siteName: "Kitchen Shop",
		type: "website",
		images: [
			{
				url: "/images/og/kitchen-shop-og.png",
				width: 1200,
				height: 630,
				alt: "Kitchen Shop — modern custom kitchen example",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Kitchen Shop — Stylish kitchens in 14 days",
		description:
			"We design and build stylish custom kitchens in 10–14 days with up to 10 years manufacturer’s warranty.",
		images: ["/images/og/kitchen-shop-og.png"],
	},
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
