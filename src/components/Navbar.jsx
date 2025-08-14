import { useState } from 'react'
import { useTheme } from '../features/ThemeContext.jsx'

function Navbar({ setCurrentPage, activePage }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { isDarkMode, toggleTheme } = useTheme()

  const navItems = [
    { id: 'home', label: 'Home', icon: '🏠', href: '#home' },
    { id: 'team', label: 'Team', icon: '👥', href: '#team' },
    { id: 'projects', label: 'Projects', icon: '📋', href: '#projects' },
    { id: 'competitions', label: 'Competitions', icon: '🏆', href: '#competitions' },
    { id: 'alumni', label: 'Alumni', icon: '🎓', href: '#alumni' }
  ]

  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="#home" className="logo" onClick={() => setCurrentPage('home')}>
          <div className="logo-icon"><img src="/AEROVE.png" alt="aerove logo" /></div>
          Aerove
        </a>
        
        {/* Desktop Menu */}
        <ul className="nav-menu">
          {navItems.map(item => (
            <li key={item.id}>
              <a
                href={item.href}
                className={activePage === item.id ? 'active' : ''}
                onClick={() => setCurrentPage(item.id)}
              >
                <i>{item.icon}</i>{item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile buttons container */}
        <div className="mobile-toggle-container">
          <button className="theme-toggle mobile-toggle" onClick={toggleTheme}>
            {isDarkMode ? '☀️' : '🌙'}
          </button>
          <button
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mobile-menu open">
          <ul>
            {navItems.map(item => (
              <li key={item.id}>
                <a 
                  href={item.href} 
                  className={activePage === item.id ? 'active' : ''}
                  onClick={() => setCurrentPage(item.id)}
                >
                  {item.icon} {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar
