
import { BrowserRouter, HashRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './features/ThemeContext.jsx'

import Home from './Home.jsx'
import Team from './Team.jsx'
import Projects from './Projects.jsx'
import Competitions from './Competitions.jsx'
import Alumni from './Alumni.jsx'
import Subsystems from './Subsystems.jsx'

// Use HashRouter for GitHub Pages, BrowserRouter for Vercel
const Router = import.meta.env.BASE_URL === '/aerove/' ? HashRouter : BrowserRouter

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/subsystems" element={<Subsystems />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/competitions" element={<Competitions />} />
          <Route path="/alumni" element={<Alumni />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
