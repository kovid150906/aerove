import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import SEO from './components/SEO.jsx'
import { projectsData } from './data/projectsData.jsx'

function Projects({ setCurrentPage }) {
  const [activeTab, setActiveTab] = useState('current')
  const [expandedCards, setExpandedCards] = useState(new Set())

  const toggleCardExpansion = (id) => {
    const next = new Set(expandedCards)
    next.has(id) ? next.delete(id) : next.add(id)
    setExpandedCards(next)
  }

  const projects =
    activeTab === 'current'
      ? projectsData.currentProjects
      : projectsData.pastProjects

  return (
    <div>
      <SEO
        title="Projects | Team AeRoVe, IIT Bombay"
        description="Autonomous aerial robotics projects by Team AeRoVe including VTOL UAVs, vision-based navigation, SLAM and robust perception research."
        url="https://aerove-jet.vercel.app/#projects"
      />

      <Navbar setCurrentPage={setCurrentPage} activePage="projects" />

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
            {projects.map(p => (
              <div key={p.id} className="project-card">
                <div className="project-image">{p.image}</div>
                <div className="project-title">{p.title}</div>
                <div className="project-description">{p.description}</div>

                <div className={`project-details ${expandedCards.has(p.id) ? 'expanded' : ''}`}>
                  <h4>Project Details</h4>
                  <ul>
                    <li><strong>Status:</strong> {p.status}</li>
                    <li><strong>Subsystem:</strong> {p.team}</li>
                    <li><strong>Timeline:</strong> {p.timeline}</li>
                  </ul>

                  <h4>Technologies Used</h4>
                  <ul>{p.technologies.map((t, i) => <li key={i}>{t}</li>)}</ul>

                  <h4>Key Challenges</h4>
                  <ul>{p.challenges.map((c, i) => <li key={i}>{c}</li>)}</ul>

                  <h4>Achievements</h4>
                  <ul>{p.achievements.map((a, i) => <li key={i}>{a}</li>)}</ul>
                </div>

                <button
                  className="learn-more-btn"
                  onClick={() => toggleCardExpansion(p.id)}
                >
                  {expandedCards.has(p.id) ? '🔽 Show Less' : '🔼 Learn More'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Projects
