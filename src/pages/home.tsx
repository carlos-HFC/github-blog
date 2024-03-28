import { useEffect, useState } from "react"

import { Card } from "../components/card"
import { Profile } from "../components/profile"
import { api } from "../lib/axios"

interface PostProps {
  number: number
  title: string
  created_at: string
  body: string
}

export function Home() {
  const [posts, setPosts] = useState<PostProps[]>([])

  useEffect(() => {
    api
      .get("/repos/carlos-hfc/github-blog/issues")
      .then(response => setPosts(response.data))
  }, [])

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
        {posts.map((post, i) => (
          <Card
            to={`/post/${post.number}`}
            key={i}
            {...post}
          />
        ))}
      </div>
    </>
  )
}
