import { useState } from 'react'
import { useTheme } from './features/ThemeContext.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import SEO from './components/SEO.jsx'
import { competitionsData } from './data/competitionsData.jsx'

function Competitions({ setCurrentPage }) {
  const { isDarkMode, toggleTheme } = useTheme()

  return (
    <div>
      <SEO 
        title="Competitions - Aerove | ICUAS, UAS, CUASC & RI4Rover Winners"
        description="Aerove's achievements in international drone competitions: 1st Worldwide ICUAS '23, Global Rank 6 UAS '23, 1st Place RI4Rover, and CUASC '24 VTOL demonstration."
        keywords="ICUAS 2023, UAS competition, drone competition winners, CUASC VTOL, RI4Rover, autonomous UAV competition, aerial robotics competition"
        url="https://aerove-jet.vercel.app/#competitions"
      />
      
      {/* Navigation */}
      <Navbar setCurrentPage={setCurrentPage} activePage="competitions" />

      {/* Competitions Page Content */}
      <div className="projects-page">
        <div className="container">
          <div className="projects-header">
            <h1>Our <span className="highlight">Competitions</span></h1>
            <p>{competitionsData.subtitle}</p>
          </div>

          <div className="projects-grid">
            {competitionsData.competitions.map(competition => (
              <div key={competition.id} className="project-card">
                <div className="project-image">{competition.image}</div>
                <div className="project-title">{competition.name}</div>
                <div className="project-description">{competition.description}</div>
                
                <div className="project-details expanded">
                  <h4>Competition Details</h4>
                  <ul>
                    <li><strong>Year:</strong> {competition.year}</li>
                    <li><strong>Location:</strong> {competition.location}</li>
                    <li><strong>Status:</strong> {competition.status}</li>
                    <li><strong>Team:</strong> {competition.team}</li>
                    <li><strong>Result:</strong> {competition.results}</li>
                  </ul>
                  
                  <h4>Technologies Used</h4>
                  <ul>
                    {competition.technologies.map((tech, index) => (
                      <li key={index}>{tech}</li>
                    ))}
                  </ul>
                  
                  <h4>Key Achievements</h4>
                  <ul>
                    {competition.achievements.map((achievement, index) => (
                      <li key={index}>{achievement}</li>
                    ))}
                  </ul>
                  
                  <h4>Challenges Faced</h4>
                  <ul>
                    {competition.challenges.map((challenge, index) => (
                      <li key={index}>{challenge}</li>
                    ))}
                  </ul>
                  
                  <h4>Impact</h4>
                  <ul>
                    <li>{competition.impact}</li>
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Competition Stats */}
          <div className="section" style={{ padding: '60px 0 0 0' }}>
            <div className="container">
              <h2>Competition Statistics</h2>
              <div className="stats">
                {competitionsData.stats.map((stat, index) => (
                  <div key={index} className="stat-card">
                    <div className="stat-icon">{stat.icon}</div>
                    <div className="stat-number">{stat.number}</div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Competitions
