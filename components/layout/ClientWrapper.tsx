"use client"

import Script from "next/script"
import { ModalProvider } from "@/components/sections/ModalProvider"

import Hero from "@/components/sections/Hero"
import FounderCard from "@/components/sections/FounderCard"
import TeamSection from "@/components/sections/TeamSection"
import ConsultationSection from "@/components/sections/ConsultationSection"
import ProjectsCarousel from "@/components/sections/ProjectsCarousel"
import GuaranteesSection from "@/components/sections/GuaranteesSection"
import StepsSection from "@/components/sections/StepsSection"
import DesignerVisitSection from "@/components/sections/DesignerVisitSection"
import MapSection from "@/components/sections/MapSection"
import FooterSection from "@/components/sections/FooterSection"

export default function ClientWrapper({ children }: { children?: React.ReactNode }) {
	return (
		<>
			<Script
				src={`https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY`}
				strategy="afterInteractive"
			/>
			<ModalProvider>
				<main>
					<Hero />
					<FounderCard />
					<TeamSection />
					<ConsultationSection />
					<ProjectsCarousel />
					<GuaranteesSection />
					<StepsSection />
					<DesignerVisitSection />
					<MapSection />
					<FooterSection />
					{children}
				</main>
			</ModalProvider>
		</>
	)
}
