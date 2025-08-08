import { useState } from 'react'
import Home from './Home.jsx'
import Team from './Team.jsx'
import Projects from './Projects.jsx'
import Competitions from './Competitions.jsx'
import { ThemeProvider } from './features/ThemeContext.jsx'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const renderPage = () => {
    switch(currentPage) {
      case 'projects':
        return <Projects setCurrentPage={setCurrentPage} />
      case 'competitions':
        return <Competitions setCurrentPage={setCurrentPage} />
      case 'team':
        return <Team setCurrentPage={setCurrentPage} />
      default:
        return <Home setCurrentPage={setCurrentPage} />
    }
  }

  return (
    <ThemeProvider>
      {renderPage()}
    </ThemeProvider>
  )
}

export default App
