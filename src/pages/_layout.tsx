import { Outlet } from "react-router-dom"

import { Header } from "../components/header"

export function Layout() {
  return (
    <div>
      <Header />

      <main className="container">
        <Outlet />
      </main>
    </div>
  )
}
