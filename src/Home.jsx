import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import SEO from './components/SEO.jsx'
import { homeData } from './data/homeData.jsx'
import DroneHeroScene from './canvas/DroneHeroScene.jsx'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <SEO
        title="Aerove | Autonomous Aerial Systems"
        description="Team Aerove, IIT Bombay — building advanced autonomous drone systems."
      />

      <Navbar activePage="home" />

      {/* ===================== */}
      {/* HERO — PRODUCT REVEAL */}
      {/* ===================== */}
      <section
        id="home"
        style={{
          height: '100vh',
          position: 'relative',
          overflow: 'hidden',
          background:
            'radial-gradient(1200px 600px at 20% 10%, rgba(59,130,246,0.25), transparent 60%), radial-gradient(800px 400px at 80% 20%, rgba(34,211,238,0.2), transparent 60%), #0b0f1a'
        }}
      >
        {/* Logos - Top Left */}
        <div
          style={{
            position: 'absolute',
            top: '100px',
            left: '8vw',
            zIndex: 3,
            display: 'flex',
            gap: '20px',
            alignItems: 'center',
            pointerEvents: 'auto'
          }}
        >
          <img 
            src="/UMIC.png" 
            alt="UMIC Logo" 
            style={{
              height: 'clamp(35px, 5vw, 60px)',
              width: 'auto',
              filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.3))'
            }}
          />
          <img 
            src="/IITB-logo.png" 
            alt="IIT Bombay Logo" 
            style={{
              height: 'clamp(35px, 5vw, 60px)',
              width: 'auto',
              filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.3))'
            }}
          />
        </div>

        {/* 3D Drone (must receive pointer events) */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 0
          }}
        >
          <DroneHeroScene />
        </div>

        {/* Contrast Scrim */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(90deg, rgba(11,15,26,0.9) 0%, rgba(11,15,26,0.65) 45%, rgba(11,15,26,0.25) 70%, transparent 100%)',
            zIndex: 1,
            pointerEvents: 'none'
          }}
        />

        {/* HERO CONTENT (does NOT block canvas) */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 2,
            display: 'flex',
            alignItems: 'center',
            padding: '0 8vw',
            pointerEvents: 'none'
          }}
        >
          <div style={{ maxWidth: '640px', pointerEvents: 'auto' }}>
            <img 
              src="/AEROVE.png" 
              alt="Aerove" 
              style={{
                maxWidth: '220px',
                width: '100%',
                height: 'auto',
                marginTop: '60px',
                marginBottom: '10px',
                filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.5))'
              }}
            />

            <p
              style={{
                marginTop: '0',
                fontSize: '1.05rem',
                color: 'rgba(241,245,249,0.75)'
              }}
            >
              {homeData.hero.description}
            </p>

            <div
              style={{
                marginTop: '40px',
                display: 'flex',
                gap: '16px',
                flexWrap: 'wrap'
              }}
            >
              <Link to="/team" className="btn btn-primary">
                Team
              </Link>
              <Link to="/projects" className="btn btn-secondary">
                Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =============================== */}
      {/* ENGINEERING DNA */}
      {/* =============================== */}
      <section
        id="engineering"
        style={{
          padding: '140px 20px',
          background: 'linear-gradient(180deg, #0b0f1a 0%, #0f1629 100%)'
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ maxWidth: '720px', marginBottom: '80px' }}>
            <h2
              style={{
                fontSize: 'clamp(2rem, 4vw, 2.8rem)',
                fontWeight: 600,
                color: '#f1f5f9'
              }}
            >
              Engineering autonomous systems that work in the real world
            </h2>

            <p
              style={{
                marginTop: '20px',
                color: 'rgba(241,245,249,0.7)',
                fontSize: '1.05rem'
              }}
            >
              We design, build, and validate aerial systems that operate
              reliably in harsh, unpredictable environments.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '32px'
            }}
          >
            {homeData.features.items.map((item, i) => (
              <div
                key={i}
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '20px',
                  padding: '36px 32px',
                  backdropFilter: 'blur(20px)'
                }}
              >
                <h3 style={{ color: '#f1f5f9', marginBottom: '14px' }}>
                  {item.title}
                </h3>
                <p style={{ color: 'rgba(241,245,249,0.7)' }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
