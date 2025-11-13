// src/components/sections/KitchenEstimate.tsx
"use client"

import { Button } from "@/components/ui/button"

export default function KitchenEstimate() {
  return (
    <section className="w-full bg-white py-20 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-medium text-[#2b2b2b] leading-snug">
          Узнайте{" "}
          <span className="font-semibold text-black">
            стоимость
          </span>{" "}
          вашей будущей кухни{" "}
          <span className="font-semibold text-black">
            с точностью до 90%
          </span>
        </h2>

        <p className="text-[#707070] mt-5 text-base md:text-lg leading-relaxed">
          Ответьте на 7 простых вопросов и получите расчет вашей будущей кухни{" "}
          <br className="hidden md:block" />
          + инструкцию в подарок{" "}
          <span className="font-semibold text-black">
            "ТОП 7 ошибок при выборе кухни"
          </span>
        </p>

        <Button
          size="lg"
          className="mt-10 rounded-xl bg-[#ffb700] hover:bg-[#ffcc33] text-black font-medium shadow-md transition-all"
        >
          Пройти опрос
        </Button>
      </div>
    </section>
  )
}
