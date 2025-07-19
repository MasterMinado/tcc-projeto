import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Nova Tech - Criar Conta",
  description: "Página de criação de conta da Nova Tech",
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
