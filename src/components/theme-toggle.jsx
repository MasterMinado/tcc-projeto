"use client"

import { useState, useEffect } from "react"

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    // Verificar tema salvo ou preferência do sistema
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

  const toggleStyle = {
    position: "relative",
    display: "inline-flex",
    height: "24px",
    width: "44px",
    alignItems: "center",
    borderRadius: "9999px",
    backgroundColor: isDark ? "#4B5563" : "#D1D5DB",
    transition: "background-color 0.2s",
    cursor: "pointer",
    border: "none",
    outline: "none",
  }

  const switchStyle = {
    display: "inline-block",
    height: "16px",
    width: "16px",
    borderRadius: "50%",
    backgroundColor: "white",
    transform: isDark ? "translateX(24px)" : "translateX(4px)",
    transition: "transform 0.2s",
  }

  return (
    <button
      onClick={toggleTheme}
      style={toggleStyle}
      aria-label={isDark ? "Mudar para tema claro" : "Mudar para tema escuro"}
    >
      <span style={switchStyle}></span>
    </button>
  )
}
