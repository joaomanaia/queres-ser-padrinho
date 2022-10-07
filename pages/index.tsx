import type { NextPage } from "next"
import Head from "next/head"
import { useEffect, useState } from "react"

interface Position {
  top: number
  left: number
}

const Home: NextPage = () => {
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

  const btnYesClick = () => alert("Parabéns, agora és padrinho!")

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-gray-900 text-white overflow-hidden">
      <Head>
        <title>Queres ser o meu padrinho?</title>
        <meta name="description" content="Queres ser o meu padrinho?" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-5xl">Queres ser o meu padrinho?</h1>

      <button 
        onClick={btnYesClick}
        className="rounded-full cursor-pointer bg-blue-500 hover:bg-blue-400 mt-44 py-2 px-5 w-24 h-12">
        Sim
      </button>

      <button
        onClick={randomBtnNoPosition}
        onMouseOver={randomBtnNoPosition}
        style={{ left: noPosition.left, top: noPosition.top }}
        className="absolute cursor-pointer rounded-full outline outline-1 outline-gray-500 text-blue-400 hover:bg-blue-500/30 py-2 px-5 w-24 h-12"
      >
        Não
      </button>
    </div>
  )
}

export default Home
