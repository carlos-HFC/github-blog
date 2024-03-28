import { Card } from "../components/card"
import { Profile } from "../components/profile"

export function Home() {
  return (
    <>
      <Profile />

      <form className="mt-10 flex flex-col gap-3 md:mt-20">
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold leading-relaxed text-base-subtitle">
            Publicações
          </span>
          <span className="text-sm leading-relaxed text-base-span">
            6 publicações
          </span>
        </div>

        <input
          type="text"
          placeholder="Buscar conteúdo"
          className="rounded-md border border-blue bg-base-input px-4 py-3 text-base-text outline-0 placeholder:text-base-label placeholder-shown:border-base-border focus:border-blue"
        />
      </form>

      <div className="mt-6 grid gap-6 md:mt-12 md:grid-cols-2 md:gap-8">
        {Array.from({ length: 6 }).map((_, i) => (
          <Card
            to="/post"
            key={i}
          />
        ))}
      </div>
    </>
  )
}
