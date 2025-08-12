import { useState } from 'react'
import { useTheme } from './features/ThemeContext.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
<<<<<<< HEAD
import TypewriterHeading from './components/TypewriterHeading.jsx'
=======
>>>>>>> 4ba58ef1faf371fcfc58f286aa6b7c5e8b1a6e38
import { homeData } from './data/homeData.jsx'

function Home({ setCurrentPage }) {
  const { isDarkMode, toggleTheme } = useTheme()

  return (
    <div>
      {/* Navigation */}
      <Navbar setCurrentPage={setCurrentPage} activePage="home" />

      {/* Hero Section */}
      <section id="home" className="hero">
        {/* Video Background */}
        <video className="hero-video" autoPlay muted loop>
          <source src="/Drone_Video_Ready_For_You.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Overlay */}
        <div className="hero-overlay"></div>
        
        <div className="hero-content">
          <div className="partner-logos">
            <div className="partner-logo">
              <div style={{ width: '60px', height: '60px', background: 'rgba(255,255,255,0.1)', borderRadius: '10px', margin: '0 auto 8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><img src="/IITB-logo.png" alt="IITB-logo" /></div>
              <span>IIT Bombay</span>
            </div>
            <div className="partner-logo">
              <div style={{ width: '60px', height: '60px', background: 'rgba(255,255,255,0.1)', borderRadius: '10px', margin: '0 auto 8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><img src="/UMIC.png" alt="UMIC-logo" /></div>
              <span>UMIC</span>
            </div>
          </div>
          
<<<<<<< HEAD
          <h1>
            <TypewriterHeading text={homeData.hero.title} speed={120} />
          </h1>
=======
          <h1>{homeData.hero.title}</h1>
>>>>>>> 4ba58ef1faf371fcfc58f286aa6b7c5e8b1a6e38
          <p>{homeData.hero.description}</p>
          
          <div className="hero-buttons">
            {homeData.hero.buttons.map((button, index) => (
              <a 
                key={index}
                href={button.href} 
                className={`btn btn-${button.type}`}
                onClick={button.href === '#team' ? () => setCurrentPage('team') : undefined}
              >
                <i>{button.icon}</i>{button.text}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section">
        <div className="container">
          <div className="stats">
            {homeData.stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section section-white">
        <div className="container">
          <h2>{homeData.about.title}</h2>
          <div className="about-content">
            {homeData.about.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
            
            <div className="about-grid">
              {homeData.about.cards.map((card, index) => (
                <div key={index} className="about-card">
                  <h3>{card.title}</h3>
                  <ul>
                    {card.items.map((item, itemIndex) => (
                      <li key={itemIndex}>• {item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section">
        <div className="container">
          <h2>{homeData.features.title}</h2>
          <div className="features">
            {homeData.features.items.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="container">
          <div className="contact-content">
            <h2>{homeData.contact.title}</h2>
            <p>{homeData.contact.description}</p>
            <div className="hero-buttons">
              {homeData.contact.buttons.map((button, index) => (
                <a 
                  key={index}
                  href={button.href} 
                  className={`btn btn-${button.type}`}
                >
                  <i>{button.icon}</i>{button.text}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Home
