import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import SEO from './components/SEO.jsx'
import { competitionsData } from './data/competitionsData.jsx'

function Competitions({ setCurrentPage }) {
  return (
    <div>
      <SEO
        title="Competitions | Team AeRoVe, IIT Bombay"
        description="Team AeRoVe (UMIC, IIT Bombay) at international aerial robotics competitions including Ri4Rover, CUASC, RoboDrive (ICRA), ICUAS and UAS Challenge."
        url="https://aerove-jet.vercel.app/#competitions"
      />

      <Navbar setCurrentPage={setCurrentPage} activePage="competitions" />

      <div className="projects-page">
        <div className="container">
          <div className="projects-header">
            <h1>Our <span className="highlight">Competitions</span></h1>
            <p>{competitionsData.subtitle}</p>
          </div>

          <div className="projects-grid">
            {competitionsData.competitions.map(c => (
              <div key={c.id} className="project-card">
                <div className="project-image">{c.image}</div>
                <div className="project-title">{c.name}</div>
                <div className="project-description">{c.description}</div>

                <div className="project-details expanded">
                  <h4>Competition Details</h4>
                  <ul>
                    <li><strong>Year:</strong> {c.year}</li>
                    <li><strong>Location:</strong> {c.location}</li>
                    <li><strong>Status:</strong> {c.status}</li>
                    <li><strong>Result:</strong> {c.results}</li>
                  </ul>

                  <h4>Technologies Used</h4>
                  <ul>{c.technologies.map((t, i) => <li key={i}>{t}</li>)}</ul>

                  <h4>Key Achievements</h4>
                  <ul>{c.achievements.map((a, i) => <li key={i}>{a}</li>)}</ul>

                  <h4>Challenges Faced</h4>
                  <ul>{c.challenges.map((ch, i) => <li key={i}>{ch}</li>)}</ul>

                  <h4>Impact</h4>
                  <ul><li>{c.impact}</li></ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Competitions
