import { useTheme } from './features/ThemeContext.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import SEO from './components/SEO.jsx'
import { alumniData } from './data/alumniData.jsx'
import './styles/alumniStyles.css'

function Alumni({ setCurrentPage }) {
  const { isDarkMode } = useTheme()

  return (
    <div className={`alumni-page ${isDarkMode ? 'dark' : ''}`}>
      <SEO
        title="Alumni | Team AeRoVe, IIT Bombay"
        description="AeRoVe alumni have gone on to pursue careers and higher studies at leading global organizations and universities."
        url="https://aerove-jet.vercel.app/#alumni"
      />

      <Navbar setCurrentPage={setCurrentPage} activePage="alumni" />

      <section id="alumni">
        <div className="container">
          <h1 className="alumni-title">{alumniData.title}</h1>
          <p className="alumni-subtitle">{alumniData.subtitle}</p>

          <div className="alumni-grid">
            {alumniData.alumni.map(person => (
              <div key={person.id} className="alumni-card">
                <div className="alumni-photo">
                  <img
                    src={person.image}
                    alt={person.name}
                    loading="lazy"
                  />
                </div>

                <div className="alumni-info">
                  <h3>{person.name}</h3>
                  {person.batch && (
                    <p className="batch-text">Batch of {person.batch}</p>
                  )}
                  <p className="destination-text">{person.destination}</p>
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
