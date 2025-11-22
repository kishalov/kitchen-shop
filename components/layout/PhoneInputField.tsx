"use client"

import "react-phone-number-input/style.css"
import PhoneInput from "react-phone-number-input"

interface PhoneInputFieldProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
}

export default function PhoneInputField({
  value,
  onChange,
  placeholder = "+7 (___) ___-__-__",
}: PhoneInputFieldProps) {
  return (
    <div className="w-full">
      <PhoneInput
        defaultCountry="RU"
        value={value}
        onChange={(v) => onChange(v || "")}
        placeholder={placeholder}
        className="w-full border border-gray-300 rounded-lg py-3 px-4 
                   text-gray-800 focus:border-[#ffb700] 
                   focus:ring-2 focus:ring-[#ffb700]/40 
                   outline-none transition-all"
      />
    </div>
  )
}
