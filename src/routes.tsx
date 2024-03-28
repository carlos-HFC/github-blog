import { createBrowserRouter } from "react-router-dom"

import { Layout } from "./pages/_layout"
import { Home } from "./pages/home"
import { Post } from "./pages/post"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/post/:number",
        element: <Post />,
      },
    ],
  },
])
