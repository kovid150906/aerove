import { useState } from 'react'
import { ThemeProvider } from './features/ThemeContext.jsx'
import Home from './Home.jsx'
import Team from './Team.jsx'
import Projects from './Projects.jsx'
import Competitions from './Competitions.jsx'
import Alumni from './Alumni.jsx'
import './styles/index.css'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  // Function to handle page changes with scroll to top
  const handlePageChange = (page) => {
    setCurrentPage(page)
    window.scrollTo(0, 0)
  }

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <Home setCurrentPage={handlePageChange} />
      case 'team':
        return <Team setCurrentPage={handlePageChange} />
      case 'projects':
        return <Projects setCurrentPage={handlePageChange} />
      case 'competitions':
        return <Competitions setCurrentPage={handlePageChange} />
      case 'alumni':
        return <Alumni setCurrentPage={handlePageChange} />
      default:
        return <Home setCurrentPage={handlePageChange} />
    }
  }

  return (
    <ThemeProvider>
      <div id="app">
        {renderPage()}
      </div>
    </ThemeProvider>
  )
}

export default App
