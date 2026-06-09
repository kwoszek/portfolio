import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import { useEffect } from "react"
import Home from "@/pages/Home"
import WorkSense from "@/pages/projects/WorkSense"
import DocDiff from "@/pages/projects/DocDiff"
import Mesa from "@/pages/projects/Mesa"

function ScrollToTop() {
  const { pathname } = useLocation()
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  
  return null
}

export function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/worksense" element={<WorkSense />} />
        <Route path="/projects/docdiff" element={<DocDiff />} />
        <Route path="/projects/mesa" element={<Mesa />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
