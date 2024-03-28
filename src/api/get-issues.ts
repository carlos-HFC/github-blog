import { env } from "../env"
import { api } from "../lib/axios"

interface GetIssuesRequest {
  query?: string | null
}

interface GetIssuesResponse {
  number: number
  title: string
  created_at: string
  body: string
}

export async function getIssues({ query }: GetIssuesRequest) {
  if (query) {
    const response = await api.get<{ items: GetIssuesResponse[] }>(
      "/search/issues",
      {
        params: {
          q: `${query} repo:${env.VITE_GITHUB_USER}/${env.VITE_GITHUB_REPOSITORY}`,
        },
      },
    )

    return response.data.items
  }

  const response = await api.get<GetIssuesResponse[]>(
    `/repos/${env.VITE_GITHUB_USER}/${env.VITE_GITHUB_REPOSITORY}/issues`,
  )

  return response.data
}
