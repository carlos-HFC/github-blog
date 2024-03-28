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
          q: `${query} repo:carlos-hfc/github-blog`,
        },
      },
    )

    return response.data.items
  }

  const response = await api.get<GetIssuesResponse[]>(
    "/repos/carlos-hfc/github-blog/issues",
  )

  return response.data
}
