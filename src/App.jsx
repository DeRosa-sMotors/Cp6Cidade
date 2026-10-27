import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Carros from "./pages/Carros"

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-[#0d0d0d]">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/carros" element={<Carros />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  )
}

export default App
