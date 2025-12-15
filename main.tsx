import React from "react"
import ReactDOM from "react-dom/client"
import { HeroAnimation } from "@/components/HeroAnimation"
import "./app/globals.css"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <main className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black overflow-hidden">
      <HeroAnimation />
    </main>
  </React.StrictMode>,
)
