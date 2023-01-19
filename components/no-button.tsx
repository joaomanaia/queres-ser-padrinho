"use client"

import { useEffect, useState } from "react"

interface Position {
  top: number
  left: number
}

export default function NoButton() {
  const [noPosition, setNoPosition] = useState<Position>({ top: 0, left: 0 })

  useEffect(() => {
    // Atualiza a posição inicial do butão
    randomBtnNoPosition()
  }, [])

  const randomBtnNoPosition = () => {
    // Tamanho da tela - tamanho do butão
    const maxWidth = window.innerWidth - 96 // Comprimento
    const maxHeight = window.innerHeight - 48 // Altura

    const randomWidth = Math.round(Math.random() * maxWidth)
    const randomHeight = Math.round(Math.random() * maxHeight)

    setNoPosition({ top: randomHeight, left: randomWidth })
  }

  return (
    <button
      onClick={randomBtnNoPosition}
      onMouseOver={randomBtnNoPosition}
      style={{ left: noPosition.left, top: noPosition.top }}
      className="absolute cursor-pointer rounded-full outline outline-1 outline-gray-500 text-blue-400 hover:bg-blue-500/30 py-2 px-5 w-24 h-12"
    >
      Não
    </button>
  )
}
