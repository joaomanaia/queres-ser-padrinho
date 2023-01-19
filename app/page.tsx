import NoButton from "../components/no-button";
import YesButton from "../components/yes-button";

export default function Page() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-gray-900 text-white overflow-hidden">
      <h1 className="text-5xl">Queres ser o meu padrinho?</h1>
      <YesButton />
      <NoButton />
    </div>
  )
}