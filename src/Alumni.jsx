import { useTheme } from './features/ThemeContext.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import SEO from './components/SEO.jsx'
import { alumniData } from './data/alumniData.jsx'
import './styles/alumniStyles.css'
import { FaLinkedin, FaInstagram } from 'react-icons/fa'

function Alumni({ setCurrentPage }) {
  const { isDarkMode } = useTheme()

  return (
    <div className={`alumni-page ${isDarkMode ? 'dark' : ''}`}>
      <SEO 
        title="Alumni - Aerove | IIT Bombay Drone Team Alumni Network"
        description="Meet Aerove's accomplished alumni network from IIT Bombay's premier autonomous drone technology team."
        url="https://aerove-jet.vercel.app/#alumni"
      />
      
      <Navbar setCurrentPage={setCurrentPage} activePage="alumni" />

      <section id="alumni">
        <div className="container">
          <h1 className="alumni-title">{alumniData.title}</h1>
          <p className="alumni-subtitle">{alumniData.subtitle}</p>

          <div className="alumni-timeline">
            {alumniData.years.map(yearGroup => (
              <div key={yearGroup.year} className="year-group">
                <h2 className="year-heading">{yearGroup.year}</h2>
                <div className="year-members">
                  {yearGroup.members.map(member => (
                    <div key={member.id} className="alumni-card">
                      <div className="alumni-photo">
                        <img src={member.avatar} alt={member.name} />
                        <span className="batch-badge">{member.batch}</span>
                      </div>
                      <div className="alumni-info">
                        <h3>{member.name}</h3>
                        <p className="alumni-role">{member.role} at Aerove</p>
                        <p className="current-position">{member.currentPosition}</p>
                        <div className="alumni-social">
                          <a href={member.social.linkedin} aria-label="LinkedIn">
                            <FaLinkedin className="social-icon" />
                          </a>
                          <a href={member.social.instagram} aria-label="Instagram">
                            <FaInstagram className="social-icon" />
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Alumni