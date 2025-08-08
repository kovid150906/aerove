import { useState } from 'react'

function Home({ setCurrentPage }) {
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
            <li><a href="#home" className="active"><i>🏠</i>Home</a></li>
            <li><a href="#team" onClick={() => setCurrentPage('team')}><i>👥</i>Team</a></li>
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
              <li style={{ margin: '10px 0' }}><a href="#home">🏠 Home</a></li>
              <li style={{ margin: '10px 0' }}><a href="#team" onClick={() => setCurrentPage('team')}>👥 Team</a></li>
              <li style={{ margin: '10px 0' }}><a href="#tasks" onClick={() => setCurrentPage('tasks')}>📋 Tasks</a></li>
            </ul>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <div className="partner-logos">
            <div className="partner-logo">
              <div style={{ width: '60px', height: '60px', background: 'rgba(255,255,255,0.1)', borderRadius: '10px', margin: '0 auto 8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>IITB</div>
              <span>IIT Bombay</span>
            </div>
            <div className="partner-logo">
              <div style={{ width: '60px', height: '60px', background: 'rgba(255,255,255,0.1)', borderRadius: '10px', margin: '0 auto 8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>UMIC</div>
              <span>UMIC</span>
            </div>
          </div>
          
          <h1>Aerove</h1>
          <p>Pioneering the Future of Autonomous Drone Technology</p>
          
          <div className="hero-buttons">
            <a href="#about" className="btn btn-primary">
              <i>🚁</i>Explore Our Work
            </a>
            <a href="#team" className="btn btn-secondary" onClick={() => setCurrentPage('team')}>
              <i>👥</i>Meet the Team
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section">
        <div className="container">
          <div className="stats">
            <div className="stat-card">
              <div className="stat-icon">🚁</div>
              <div className="stat-number">50+</div>
              <div className="stat-label">Flight Hours</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">👥</div>
              <div className="stat-number">12</div>
              <div className="stat-label">Team Members</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">🏆</div>
              <div className="stat-number">25+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">🎖️</div>
              <div className="stat-number">3</div>
              <div className="stat-label">Awards Won</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section section-white">
        <div className="container">
          <h2>About Aerove</h2>
          <div className="about-content">
            <p>
              Team AeRoVe of UMIC is on a never-ending pursuit of developing an ultimate system of autonomous fixed-wing as well as multirotor aircraft. 
              Incorporating different subsystems namely 'Mechatronics', 'Controls', 'Machine Learning', 'Perception', 'Path Planning', and 'Localisation', 
              the team emphatically covers every aspect to forge a de rigueur system of autonomous aerial vehicles.
            </p>
            <p>
              At Team AeRoVe, we always look for problems that challenge, excite, and motivate us to grow intellectually. Our purpose is to further the boundaries 
              of autonomous aerial technology and realize the true potential of this field. We aim to contribute and start the culture of creating cutting edge 
              technology through indigenous innovation.
            </p>
            <p>
              The International Aerial Robotics Competition, the longest-running aerial robotics competition in the world, is the kind of problem that has pushed 
              us to the best of our capabilities and made us think in ways like never before, providing us with an international platform to display our aptitudes.
            </p>
            
            <div className="about-grid">
              <div className="about-card">
                <h3>Our Mission</h3>
                <ul>
                  <li>• Develop autonomous aerial vehicles</li>
                  <li>• Push boundaries in aerial robotics</li>
                  <li>• Create cutting-edge technology</li>
                  <li>• Participate in international competitions</li>
                  <li>• Foster innovation and collaboration</li>
                </ul>
              </div>
              <div className="about-card">
                <h3>Our Approach</h3>
                <ul>
                  <li>• Mothership-Daughter drone configuration</li>
                  <li>• Advanced flight control systems</li>
                  <li>• Computer vision and AI integration</li>
                  <li>• Real-time path planning</li>
                  <li>• Robust hardware integration</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section">
        <div className="container">
          <h2>Our Technology</h2>
          <div className="features">
            <div className="feature-card">
              <div className="feature-icon">🚁</div>
              <h3>Mothership Drone</h3>
              <p>An autonomous 25 Kg hexacopter with an integral cage-like structure that carries the daughter drone and deploys it at the mast.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🤖</div>
              <h3>Daughter Drone</h3>
              <p>A 25 kg autonomous coaxial-octocopter capable of launching in mid-air, equipped with robotic arm for module replacement.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🧠</div>
              <h3>AI & Machine Learning</h3>
              <p>Advanced algorithms for autonomous flight, obstacle avoidance, and intelligent decision-making in complex environments.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="container">
          <div className="contact-content">
            <h2>Get In Touch</h2>
            <p>
              Ready to collaborate on the future of autonomous drone technology? 
              Let's work together to push the boundaries of aerial robotics.
            </p>
            <div className="hero-buttons">
              <a href="#contact" className="btn btn-primary">
                <i>📧</i>Contact Us
              </a>
              <a href="#about" className="btn btn-secondary">
                <i>📋</i>View Projects
              </a>
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

export default Home
