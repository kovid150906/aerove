
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './features/ThemeContext.jsx'

import Home from './Home.jsx'
import Team from './Team.jsx'
import Projects from './Projects.jsx'
import Competitions from './Competitions.jsx'
import Alumni from './Alumni.jsx'

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/competitions" element={<Competitions />} />
          <Route path="/alumni" element={<Alumni />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
