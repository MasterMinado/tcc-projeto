"use client"

import { useState } from "react"
import ThemeToggle from "./theme-toggle"

export default function LoginForm() {
  const [formData, setFormData] = useState({
    nomeCompleto: "",
    email: "",
    senha: "",
    confirmarSenha: "",
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Dados do formulário:", formData)
  }

  const containerStyle = {
    minHeight: "100vh",
    display: "flex",
  }

  const leftSideStyle = {
    display: "none",
    "@media (min-width: 1024px)": {
      display: "flex",
      width: "50%",
    },
  }

  const rightSideStyle = {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "32px",
    position: "relative",
  }

  const toggleContainerStyle = {
    position: "absolute",
    top: "24px",
    right: "24px",
  }

  const cardStyle = {
    width: "100%",
    maxWidth: "448px",
    borderRadius: "8px",
    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    padding: "32px",
  }

  const headerStyle = {
    textAlign: "center",
    paddingBottom: "32px",
  }

  const logoStyle = {
    marginBottom: "32px",
  }

  const titleStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "8px",
  }

  const subtitleStyle = {
    fontSize: "14px",
  }

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  }

  const fieldStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  }

  const labelStyle = {
    fontSize: "14px",
  }

  const inputStyle = {
    width: "100%",
    padding: "8px 12px",
    border: "1px solid",
    borderRadius: "6px",
    fontSize: "14px",
    outline: "none",
    transition: "all 0.2s",
  }

  const buttonStyle = {
    width: "100%",
    backgroundColor: "#EA580C",
    color: "white",
    fontWeight: "500",
    padding: "12px",
    borderRadius: "6px",
    border: "none",
    cursor: "pointer",
    transition: "background-color 0.2s",
    fontSize: "14px",
  }

  const dividerStyle = {
    position: "relative",
    margin: "24px 0",
  }

  const dividerLineStyle = {
    position: "absolute",
    top: "50%",
    left: "0",
    right: "0",
    height: "1px",
    transform: "translateY(-50%)",
  }

  const dividerTextStyle = {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    fontSize: "14px",
  }

  const dividerSpanStyle = {
    padding: "0 8px",
  }

  const linkContainerStyle = {
    textAlign: "center",
  }

  const linkStyle = {
    fontSize: "14px",
  }

  const forgotPasswordStyle = {
    textAlign: "right",
  }

  return (
    <div style={containerStyle} className="bg-white dark:bg-gray-900">
      {/* Lado esquerdo - fundo escuro */}
      <div className="hidden lg:flex lg:w-1/2 bg-gray-900 dark:bg-black"></div>

      {/* Lado direito - formulário */}
      <div style={rightSideStyle} className="w-full lg:w-1/2 bg-gray-100 dark:bg-gray-800">
        {/* Toggle de tema */}
        <div style={toggleContainerStyle}>
          <ThemeToggle />
        </div>

        <div style={cardStyle} className="bg-white dark:bg-gray-900">
          {/* Header */}
          <div style={headerStyle}>
            <div style={logoStyle}>
              <h1 style={titleStyle} className="text-gray-900 dark:text-white">
                Nova <span style={{ color: "#EA580C" }}>Tech</span>
              </h1>
            </div>
            <div>
              <h2 style={{ ...titleStyle, fontSize: "20px" }} className="text-gray-900 dark:text-white">
                Criar Conta
              </h2>
              <p style={subtitleStyle} className="text-gray-600 dark:text-gray-400">
                Preencha os dados abaixo para criar sua conta
              </p>
            </div>
          </div>

          {/* Formulário */}
          <form onSubmit={handleSubmit} style={formStyle}>
            <div style={fieldStyle}>
              <label htmlFor="nomeCompleto" style={labelStyle} className="text-gray-700 dark:text-gray-300">
                Nome Completo
              </label>
              <input
                id="nomeCompleto"
                name="nomeCompleto"
                type="text"
                placeholder="Seu nome completo"
                value={formData.nomeCompleto}
                onChange={handleInputChange}
                style={inputStyle}
                className="bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>

            <div style={fieldStyle}>
              <label htmlFor="email" style={labelStyle} className="text-gray-700 dark:text-gray-300">
                E-mail
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Seu e-mail"
                value={formData.email}
                onChange={handleInputChange}
                style={inputStyle}
                className="bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>

            <div style={fieldStyle}>
              <label htmlFor="senha" style={labelStyle} className="text-gray-700 dark:text-gray-300">
                Senha
              </label>
              <input
                id="senha"
                name="senha"
                type="password"
                placeholder="Sua senha"
                value={formData.senha}
                onChange={handleInputChange}
                style={inputStyle}
                className="bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>

            <div style={fieldStyle}>
              <label htmlFor="confirmarSenha" style={labelStyle} className="text-gray-700 dark:text-gray-300">
                Confirmar Senha
              </label>
              <input
                id="confirmarSenha"
                name="confirmarSenha"
                type="password"
                placeholder="Confirmar Senha"
                value={formData.confirmarSenha}
                onChange={handleInputChange}
                style={inputStyle}
                className="bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>

            <div style={forgotPasswordStyle}>
              <a
                href="#"
                style={{ fontSize: "14px" }}
                className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
              >
                Esqueceu sua senha?
              </a>
            </div>

            <button
              type="submit"
              style={buttonStyle}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#DC2626")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#EA580C")}
            >
              Criar Conta
            </button>

            <div style={dividerStyle}>
              <div style={dividerLineStyle} className="bg-gray-300 dark:bg-gray-600"></div>
              <div style={dividerTextStyle}>
                <span style={dividerSpanStyle} className="bg-white dark:bg-gray-900 text-gray-500 dark:text-gray-400">
                  ou
                </span>
              </div>
            </div>

            <div style={linkContainerStyle}>
              <span style={linkStyle} className="text-gray-600 dark:text-gray-400">
                Já tem uma conta?{" "}
                <a href="#" style={{ color: "#EA580C", fontWeight: "500" }} className="hover:text-orange-600">
                  Faça login aqui
                </a>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
