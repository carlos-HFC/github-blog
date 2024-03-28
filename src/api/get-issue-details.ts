import { env } from "../env"
import { api } from "../lib/axios"

interface GetIssueDetailsRequest {
  number: number
}

interface GetIssueDetailsResponse {
  number: number
  html_url: string
  title: string
  user: {
    login: string
  }
  comments: number
  created_at: string
  body: string
}

export async function getIssueDetails({ number }: GetIssueDetailsRequest) {
  const response = await api.get<GetIssueDetailsResponse>(
    `/repos/${env.VITE_GITHUB_USER}/${env.VITE_GITHUB_REPOSITORY}/issues/${number}`,
  )

  return response.data
}
