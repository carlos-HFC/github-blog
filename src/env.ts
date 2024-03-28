import { z } from "zod"

const envSchema = z.object({
  VITE_GITHUB_USER: z.string(),
  VITE_GITHUB_REPOSITORY: z.string(),
})

export const env = envSchema.parse(import.meta.env)
