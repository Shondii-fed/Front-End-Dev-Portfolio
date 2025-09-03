import AllProjects from './pages/AllProjects.js'
import Certifications from './pages/Certifications.js'
import Home from './pages/Home.js'
import { Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ui/ScrollToTop.js'

function App() {  
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<AllProjects />} />
        <Route path="/certifications" element={<Certifications />} />
      </Routes>
    </>
  )
}

export default App
