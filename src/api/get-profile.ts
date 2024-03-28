import { env } from "../env"
import { api } from "../lib/axios"

interface GetProfileResponse {
  avatar_url: string
  html_url: string
  login: string
  name: string
  followers: number
  bio: string
  company: string
}

export async function getProfile() {
  const response = await api.get<GetProfileResponse>(
    `/users/${env.VITE_GITHUB_USER}`,
  )

  return response.data
}
