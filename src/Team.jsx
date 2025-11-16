import { useState } from 'react'
import { useTheme } from './features/ThemeContext.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import SEO from './components/SEO.jsx'
import { teamData } from './data/teamData.jsx'

function Team({ setCurrentPage }) {
  const { isDarkMode, toggleTheme } = useTheme()

  return (
    <div>
      <SEO 
        title="Our Team - Aerove | IIT Bombay Drone Technology"
        description="Meet the brilliant minds behind Aerove's innovative drone technology solutions. Our team includes experts in mechatronics, aerodynamics, machine learning, perception, and controls."
        url="https://aerove.vercel.app/#team"
      />
      
      {/* Navigation */}
      <Navbar setCurrentPage={setCurrentPage} activePage="team" />

      {/* Team Section */}
      <section id="team" className="section section-white">
        <div className="container">
          <h2>{teamData.title}</h2>
          <p style={{ textAlign: 'center', marginBottom: '50px', color: 'var(--text-secondary)' }}>
            {teamData.subtitle}
          </p>
          <div className="team-grid">
            {teamData.members.map(member => (
              <div key={member.id} className="team-card">
                <div className="team-avatar">
                  <img src={member.avatar} alt={member.name} />
                </div>
                <h3>{member.name}</h3>
                <div className="role">{member.role}</div>
                <div className="department">{member.department}</div>
                <div className="team-social">
                  <a href={member.social.instagram}><i>📷</i> Instagram</a>
                  <a href={member.social.linkedin}><i>💼</i> LinkedIn</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Team
