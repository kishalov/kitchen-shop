"use client"

import { createContext, useContext, useState, ReactNode } from "react"
import ConsultationModal from "@/components/sections/ConsultationModal"

type ModalContextType = {
	openModal: () => void
	closeModal: () => void
}

const ModalContext = createContext<ModalContextType | undefined>(undefined)

export function useModal() {
	const context = useContext(ModalContext)
	if (!context) {
		throw new Error("useModal must be used within ModalProvider")
	}
	return context
}

export function ModalProvider({ children }: { children: ReactNode }) {
	const [isOpen, setIsOpen] = useState(false)

	function openModal() {
		setIsOpen(true)
	}

	function closeModal() {
		setIsOpen(false)
	}

	return (
		<ModalContext.Provider value={{ openModal, closeModal }}>
			{children}
			{/* Глобальное модальное окно */}
			<ConsultationModal open={isOpen} onOpenChange={setIsOpen} />
		</ModalContext.Provider>
	)
}
