"use client"

export default function YesButton() {
  const btnYesClick = () => alert("Parabéns, agora és padrinho!")

  return (
    <button
      onClick={btnYesClick}
      className="rounded-full cursor-pointer bg-blue-500 hover:bg-blue-400 mt-44 py-2 px-5 w-24 h-12"
    >
      Sim
    </button>
  )
}
