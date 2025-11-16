import { useState } from 'react'
import { useTheme } from './features/ThemeContext.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import SEO from './components/SEO.jsx'
import { projectsData } from './data/projectsData.jsx'

function Projects({ setCurrentPage }) {
  const { isDarkMode, toggleTheme } = useTheme()
  const [activeTab, setActiveTab] = useState('current')
  const [expandedCards, setExpandedCards] = useState(new Set())

  const toggleCardExpansion = (cardId) => {
    const newExpanded = new Set(expandedCards)
    if (newExpanded.has(cardId)) {
      newExpanded.delete(cardId)
    } else {
      newExpanded.add(cardId)
    }
    setExpandedCards(newExpanded)
  }

  const projects = activeTab === 'current' ? projectsData.currentProjects : projectsData.pastProjects

  return (
    <div>
      <SEO 
        title="Projects - Aerove | Wildlife Conservation, Solar Inspection & SLAM"
        description="Explore Aerove's innovative drone technology projects including WWF wildlife conservation, solar PV farm inspection, advanced SLAM navigation, and award-winning competition drones."
        keywords="Aerove projects, WWF drone conservation, solar panel inspection drone, SLAM navigation, JATAYU quadcopter, VTOL drone, autonomous navigation"
        url="https://aerove-ts.vercel.app/#projects"
      />
      
      {/* Navigation */}
      <Navbar setCurrentPage={setCurrentPage} activePage="projects" />

      {/* Projects Page Content */}
      <div className="projects-page">
        <div className="container">
          <div className="projects-header">
            <h1>Our <span className="highlight">Projects</span></h1>
            <p>{projectsData.subtitle}</p>
          </div>

          <div className="projects-tabs">
            <button 
              className={`tab-button ${activeTab === 'current' ? 'active' : ''}`}
              onClick={() => setActiveTab('current')}
            >
              Current Work
            </button>
            <button 
              className={`tab-button ${activeTab === 'past' ? 'active' : ''}`}
              onClick={() => setActiveTab('past')}
            >
              Past Work
            </button>
          </div>

          <div className="projects-grid">
            {projects.map(project => (
              <div key={project.id} className="project-card">
                <div className="project-image">{project.image}</div>
                <div className="project-title">{project.title}</div>
                <div className="project-description">{project.description}</div>
                
                <div className={`project-details ${expandedCards.has(project.id) ? 'expanded' : ''}`}>
                  <h4>Project Details</h4>
                  <ul>
                    <li><strong>Status:</strong> {project.status}</li>
                    <li><strong>Team:</strong> {project.team}</li>
                    <li><strong>Timeline:</strong> {project.timeline}</li>
                  </ul>
                  
                  <h4>Technologies Used</h4>
                  <ul>
                    {project.technologies.map((tech, index) => (
                      <li key={index}>{tech}</li>
                    ))}
                  </ul>
                  
                  <h4>Key Challenges</h4>
                  <ul>
                    {project.challenges.map((challenge, index) => (
                      <li key={index}>{challenge}</li>
                    ))}
                  </ul>
                  
                  <h4>Achievements</h4>
                  <ul>
                    {project.achievements.map((achievement, index) => (
                      <li key={index}>{achievement}</li>
                    ))}
                  </ul>
                </div>
                
                <button 
                  className="learn-more-btn"
                  onClick={() => toggleCardExpansion(project.id)}
                >
                  {expandedCards.has(project.id) ? '🔽 Show Less' : '🔼 Learn More'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Projects
