"use client"

import * as React from "react"
import useEmblaCarousel from "embla-carousel-react"
import { ArrowLeft, ArrowRight } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

type CarouselProps = {
	opts?: Parameters<typeof useEmblaCarousel>[0]
	plugins?: Parameters<typeof useEmblaCarousel>[1]
	orientation?: "horizontal" | "vertical"
	setApi?: (api: any) => void
}

type CarouselContextType = {
	carouselRef: any
	api: any
	scrollPrev: () => void
	scrollNext: () => void
	canScrollPrev: boolean
	canScrollNext: boolean
	orientation: "horizontal" | "vertical"
} & CarouselProps

const CarouselContext = React.createContext<CarouselContextType | null>(null)

export function useCarousel() {
	const ctx = React.useContext(CarouselContext)
	if (!ctx) throw new Error("useCarousel must be used within <Carousel />")
	return ctx
}

export function Carousel({
	opts,
	plugins,
	orientation = "horizontal",
	setApi,
	className,
	children,
	...props
}: React.ComponentProps<"div"> & CarouselProps) {
	const [carouselRef, api] = useEmblaCarousel(
		{ ...opts, axis: orientation === "horizontal" ? "x" : "y" },
		plugins
	)

	const [canScrollPrev, setPrev] = React.useState(false)
	const [canScrollNext, setNext] = React.useState(false)

	const update = React.useCallback((api: any) => {
		if (!api) return
		setPrev(api.canScrollPrev())
		setNext(api.canScrollNext())
	}, [])

	React.useEffect(() => {
		if (api) {
			update(api)
			api.on("select", update)
			api.on("reInit", update)
			setApi?.(api)
		}
	}, [api, setApi, update])

	return (
		<CarouselContext.Provider
			value={{
				carouselRef,
				api,
				opts,
				plugins,
				orientation,
				scrollPrev: () => api?.scrollPrev(),
				scrollNext: () => api?.scrollNext(),
				canScrollPrev,
				canScrollNext,
			}}
		>
			<div
				className={cn("relative", className)}
				role="region"
				aria-roledescription="carousel"
				{...props}
			>
				{children}
			</div>
		</CarouselContext.Provider>
	)
}

export function CarouselContent({
	className,
	...props
}: React.ComponentProps<"div">) {
	const { carouselRef, orientation } = useCarousel()

	return (
		<div ref={carouselRef} className="overflow-hidden">
			<div
				className={cn(
					"flex",
					orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
					className
				)}
				{...props}
			/>
		</div>
	)
}

export function CarouselItem({
	className,
	...props
}: React.ComponentProps<"div">) {
	const { orientation } = useCarousel()

	return (
		<div
			role="group"
			aria-roledescription="slide"
			className={cn(
				"min-w-0 shrink-0 grow-0 basis-full",
				orientation === "horizontal" ? "pl-4" : "pt-4",
				className
			)}
			{...props}
		/>
	)
}

export function CarouselPrevious({
	className,
	...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
	const { scrollPrev, canScrollPrev, orientation } = useCarousel()

	return (
		<Button
			disabled={!canScrollPrev}
			onClick={scrollPrev}
			className={cn(
				// стиль кнопки
				"flex items-center justify-center rounded-full shadow-md text-black",
				"w-12 h-12 bg-[#ffe28a] hover:bg-[#ffd43b]",
				// позиция
				orientation === "horizontal"
					? "absolute top-1/2 -translate-y-1/2 -left-12"
					: "absolute -top-12 left-1/2 -translate-x-1/2 rotate-90",
				className
			)}
			{...props}
		>
			<ArrowLeft className="w-6 h-6" />
		</Button>
	)
}

export function CarouselNext({
	className,
	...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
	const { scrollNext, canScrollNext, orientation } = useCarousel()

	return (
		<Button
			disabled={!canScrollNext}
			onClick={scrollNext}
			className={cn(
				"flex items-center justify-center rounded-full shadow-md text-black",
				"w-12 h-12 bg-[#ffe28a] hover:bg-[#ffd43b]",
				orientation === "horizontal"
					? "absolute top-1/2 -translate-y-1/2 -right-12"
					: "absolute -bottom-12 left-1/2 -translate-x-1/2 rotate-90",
				className
			)}
			{...props}
		>
			<ArrowRight className="w-6 h-6" />
		</Button>
	)
}
