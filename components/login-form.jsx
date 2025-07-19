"use client"

import { useState, useEffect } from "react"

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Verificar se já existe uma preferência salva
    const savedTheme = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDark(true)
      document.documentElement.classList.add("dark")
    } else {
      setIsDark(false)
      document.documentElement.classList.remove("dark")
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = !isDark
    setIsDark(newTheme)

    if (newTheme) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }

  if (!mounted) {
    return (
      <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-300">
        <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-1" />
      </div>
    )
  }

  return (
    <button
      onClick={toggleTheme}
      className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-300 dark:bg-gray-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
      aria-label={isDark ? "Mudar para tema claro" : "Mudar para tema escuro"}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${
          isDark ? "translate-x-6" : "translate-x-1"
        }`}
      />
    </button>
  )
}
