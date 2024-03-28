import { zodResolver } from "@hookform/resolvers/zod"
import { useQuery } from "@tanstack/react-query"
import { useForm } from "react-hook-form"
import { useSearchParams } from "react-router-dom"
import { z } from "zod"

import { getIssues } from "../api/get-issues"
import { Card } from "../components/card"
import { Profile } from "../components/profile"

const postFilterSchema = z.object({
  query: z.string().optional(),
})

type PostFilterSchema = z.infer<typeof postFilterSchema>

export function Home() {
  const [searchParams, setSearchParams] = useSearchParams()

  const query = searchParams.get("query")

  const { register, handleSubmit } = useForm<PostFilterSchema>({
    resolver: zodResolver(postFilterSchema),
    defaultValues: {
      query: query ?? "",
    },
  })

  const { data: result } = useQuery({
    queryKey: ["issues", query],
    queryFn: () =>
      getIssues({
        query,
      }),
  })

  function handleFilter({ query }: PostFilterSchema) {
    setSearchParams(prev => {
      if (query) {
        prev.set("query", query)
      } else {
        prev.delete("query")
      }

      return prev
    })
  }

  return (
    <>
      <Profile />

      <form
        className="mt-10 flex flex-col gap-3 md:mt-20"
        onSubmit={handleSubmit(handleFilter)}
      >
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold leading-relaxed text-base-subtitle">
            Publicações
          </span>
          <span className="text-sm leading-relaxed text-base-span">
            {result?.length} publicações
          </span>
        </div>

        <input
          type="text"
          placeholder="Buscar conteúdo"
          className="rounded-md border border-blue bg-base-input px-4 py-3 text-base-text outline-0 placeholder:text-base-label placeholder-shown:border-base-border focus:border-blue"
          {...register("query")}
        />
      </form>

      <div className="mt-6 grid gap-6 md:mt-12 md:grid-cols-2 md:gap-8">
        {result?.map((post, i) => (
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
