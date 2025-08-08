import { useState } from 'react'
import Home from './Home.jsx'
import Team from './Team.jsx'
import Tasks from './Tasks.jsx'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const renderPage = () => {
    switch(currentPage) {
      case 'tasks':
        return <Tasks setCurrentPage={setCurrentPage} />
      case 'team':
        return <Team setCurrentPage={setCurrentPage} />
      default:
        return <Home setCurrentPage={setCurrentPage} />
    }
  }

  return renderPage()
}

export default App
