import { QueryClientProvider } from "@tanstack/react-query"
import { setDefaultOptions } from "date-fns"
import { ptBR } from "date-fns/locale"
import { RouterProvider } from "react-router-dom"

import { queryClient } from "./lib/react-query"
import { router } from "./routes"

setDefaultOptions({
  locale: ptBR,
})

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
}
