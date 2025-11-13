"use client"

import * as motion from "motion/react-client"
import { cn } from "@/lib/utils"

type ButtonProps = React.ComponentPropsWithoutRef<"button"> & {
	className?: string
}

export function Button({ className, ...props }: ButtonProps) {
	const MotionButton = motion.button as any
	return (
		<MotionButton
			whileHover={{ scale: 1.1, rotate: -2 }}
			whileTap={{ scale: 0.9 }}
			className={cn(
				"bg-[#ffb700] hover:bg-[#ffcc33] transition-colors duration-200 text-black font-semibold text-xl rounded-xl px-8 py-3 cursor-pointer disabled:opacity-50",
				className
			)}
			{...props}
		/>
	)
}
