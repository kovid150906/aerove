import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../features/ThemeContext.jsx'

const getAssetUrl = (path) => {
  const base = import.meta.env.BASE_URL || '/';
  return `${base}${path.startsWith('/') ? path.slice(1) : path}`;
};

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
        <Link to="/" className="logo">
          <div className="logo-icon">
            <img src={getAssetUrl('AEROVE.png')} alt="Aerove logo" />
          </div>
          Aerove
        </Link>

        {/* Desktop Menu */}
        <ul className="nav-menu">
          {navItems.map(item => (
            <li key={item.id}>
              <Link
                to={item.id === 'home' ? '/' : `/${item.id}`}
                className={activePage === item.id ? 'active' : ''}
              >
                <i>{item.icon}</i>{item.label}
              </Link>
            </li>
          ))}
          <li>
            <button 
              onClick={toggleTheme} 
              className="theme-toggle"
              aria-label="Toggle theme"
              style={{background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.5rem', padding: '0.5rem'}}
            >
              {isDarkMode ? '☀️' : '🌙'}
            </button>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mobile-menu open">
          <ul>
            {navItems.map(item => (
              <li key={item.id}>
                <Link
                  to={item.id === 'home' ? '/' : `/${item.id}`}
                  className={activePage === item.id ? 'active' : ''}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.icon} {item.label}
                </Link>
              </li>
            ))}
            <li>
              <button 
                onClick={toggleTheme} 
                className="theme-toggle-mobile"
                aria-label="Toggle theme"
                style={{background: 'none', border: 'none', cursor: 'pointer', fontSize: '1rem', padding: '0.75rem', width: '100%', textAlign: 'left'}}
              >
                {isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar
