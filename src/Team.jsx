import { useState } from 'react'

function Team({ setCurrentPage }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div>
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <a href="#home" className="logo" onClick={() => setCurrentPage('home')}>
            <div className="logo-icon">A</div>
            Aerove
          </a>
          
          {/* Desktop Menu */}
          <ul className="nav-menu">
            <li><a href="#home" onClick={() => setCurrentPage('home')}><i>🏠</i>Home</a></li>
            <li><a href="#team" className="active"><i>👥</i>Team</a></li>
            <li><a href="#tasks" onClick={() => setCurrentPage('tasks')}><i>📋</i>Tasks</a></li>
          </ul>

          {/* Mobile menu button */}
          <button
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div style={{ background: 'rgba(10, 10, 10, 0.95)', padding: '20px' }}>
            <ul style={{ listStyle: 'none', textAlign: 'center' }}>
              <li style={{ margin: '10px 0' }}><a href="#home" onClick={() => setCurrentPage('home')}>🏠 Home</a></li>
              <li style={{ margin: '10px 0' }}><a href="#team">👥 Team</a></li>
              <li style={{ margin: '10px 0' }}><a href="#tasks" onClick={() => setCurrentPage('tasks')}>📋 Tasks</a></li>
            </ul>
          </div>
        )}
      </nav>

      {/* Team Section */}
      <section id="team" className="section section-white">
        <div className="container">
          <h2>Meet Our Team</h2>
          <p style={{ textAlign: 'center', marginBottom: '50px', color: '#666' }}>
            The brilliant minds behind Aerove's innovative drone technology solutions
          </p>
          <div className="team-grid">
            <div className="team-card">
              <div className="team-avatar">A</div>
              <h3>Alex Chen</h3>
              <div className="role">Team Lead & Project Manager</div>
              <div className="department">Computer Science Engineering</div>
              <div className="team-social">
                <a href="#"><i>📷</i> Instagram</a>
                <a href="#"><i>💼</i> LinkedIn</a>
              </div>
            </div>
            
            <div className="team-card">
              <div className="team-avatar">S</div>
              <h3>Sarah Williams</h3>
              <div className="role">Senior Drone Engineer</div>
              <div className="department">Aerospace Engineering</div>
              <div className="team-social">
                <a href="#"><i>📷</i> Instagram</a>
                <a href="#"><i>💼</i> LinkedIn</a>
              </div>
            </div>
            
            <div className="team-card">
              <div className="team-avatar">L</div>
              <h3>Lisa Zhang</h3>
              <div className="role">AI & Machine Learning Specialist</div>
              <div className="department">Artificial Intelligence</div>
              <div className="team-social">
                <a href="#"><i>📷</i> Instagram</a>
                <a href="#"><i>💼</i> LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <div className="logo-icon">A</div>
            <div>
              <h3>Aerove</h3>
              <p>Advanced Drone Technology Team</p>
            </div>
          </div>
          
          <div className="footer-copyright">
            © 2024 Aerove Team. All rights reserved. | Innovating the Future of Drone Technology
          </div>
          
          <div className="footer-social">
            <a href="#"><i>📷</i></a>
            <a href="#"><i>💼</i></a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Team
