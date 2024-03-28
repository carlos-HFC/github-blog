import { Outlet } from "react-router-dom"

import { Header } from "../components/header"

export function Layout() {
  return (
    <div>
      <Header />

      <main className="container -mt-20 pb-32">
        <Outlet />
      </main>
    </div>
  )
}
