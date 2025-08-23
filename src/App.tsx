import AllProjects from './pages/AllProjects.js'
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
      </Routes>
    </>
  )
}

export default App
