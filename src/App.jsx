import { useState, useEffect } from 'react'
import './styles/index.css'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [isDarkMode, setIsDarkMode] = useState(false)

  // Function to handle page changes with scroll to top
  const handlePageChange = (page) => {
    setCurrentPage(page)
    window.scrollTo(0, 0)
  }

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.setAttribute('data-theme', !isDarkMode ? 'dark' : 'light')
  }

const Navbar = ({ currentPage, handlePageChange, isDarkMode, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(v => !v);

  const onNavClick = (e, page) => {
    e.preventDefault();
    handlePageChange(page);
    setIsMenuOpen(false); // close menu on click
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        
        {/* Logo */}
        <a
          href="#home"
          className="logo"
          onClick={(e) => onNavClick(e, 'home')}
        >
          <div className="logo-icon">
            <img
              src="/AEROVE.png"
              alt="aerove logo"
              style={{ width: '40px', height: '40px' }}
            />
          </div>
          Aerove
        </a>

        {/* Nav Links */}
        <ul className={`nav-menu ${isMenuOpen ? 'open' : ''}`} id="nav-menu">
          <li>
            <a
              href="#home"
              className={currentPage === 'home' ? 'active' : ''}
              onClick={(e) => onNavClick(e, 'home')}
            >
              🏠 Home
            </a>
          </li>
          <li>
            <a
              href="#team"
              className={currentPage === 'team' ? 'active' : ''}
              onClick={(e) => onNavClick(e, 'team')}
            >
              👥 Team
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className={currentPage === 'projects' ? 'active' : ''}
              onClick={(e) => onNavClick(e, 'projects')}
            >
              📋 Projects
            </a>
          </li>
          <li>
            <a
              href="#competitions"
              className={currentPage === 'competitions' ? 'active' : ''}
              onClick={(e) => onNavClick(e, 'competitions')}
            >
              🏆 Competitions
            </a>
          </li>
          <li>
            <a
              href="#alumni"
              className={currentPage === 'alumni' ? 'active' : ''}
              onClick={(e) => onNavClick(e, 'alumni')}
            >
              🎓 Alumni
            </a>
          </li>
        </ul>

        {/* Toggles (Theme + Hamburger) */}
        <div className="mobile-toggle-container">
          <button
            className="theme-toggle mobile-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            type="button"
          >
            {isDarkMode ? '☀️' : '🌙'}
          </button>

          <button
            className="mobile-menu-btn"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-controls="nav-menu"
            type="button"
          >
            ☰
          </button>
        </div>
      </div>
    </nav>
  );
};

  const HomePage = () => (
    <div style={{flex: 1, display: 'flex', flexDirection: 'column'}}>
       <Navbar
        currentPage={currentPage}
        handlePageChange={handlePageChange}
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
      />
      
      <section id="home" className="hero">
        <video className="hero-video" autoPlay muted loop>
          <source src="/Drone_Video_Ready_For_You.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        <div className="hero-overlay"></div>
        
        <div className="hero-content">
          <div className="partner-logos">
            <div className="partner-logo">
              <div style={{ width: '60px', height: '60px', background: 'rgba(255,255,255,0.1)', borderRadius: '10px', margin: '0 auto 8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src="/IITB-logo.png" alt="IITB-logo" style={{width: '50px', height: '50px'}} />
              </div>
              <span>IIT Bombay</span>
            </div>
            <div className="partner-logo">
              <div style={{ width: '60px', height: '60px', background: 'rgba(255,255,255,0.1)', borderRadius: '10px', margin: '0 auto 8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src="/UMIC.png" alt="UMIC-logo" style={{width: '50px', height: '50px'}} />
              </div>
              <span>UMIC</span>
            </div>
          </div>
          
          <h1>Aerove</h1>
          <p>Pioneering the Future of Autonomous Drone Technology</p>
          
          <div className="hero-buttons">
            <a href="#about" className="btn btn-primary">
              <i>�</i>Explore Our Work
            </a>
            <a href="#team" className="btn btn-secondary" onClick={() => handlePageChange('team')}>
              <i>�</i>Meet the Team
            </a>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon">🚁</div>
              <div className="stat-number">50+</div>
              <div className="stat-label">Flight Hours</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">�</div>
              <div className="stat-number">33</div>
              <div className="stat-label">Team Members</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">�</div>
              <div className="stat-number">7</div>
              <div className="stat-label">Active Projects</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">�</div>
              <div className="stat-number">4</div>
              <div className="stat-label">Competitions</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <div className="about-content">
            <h2>About Aerove</h2>
            <p>
              Team AeRoVe of UMIC is on a never-ending pursuit of developing an ultimate system of autonomous 
              fixed-wing as well as multirotor aircraft. Incorporating different subsystems namely 'Mechatronics', 
              'Controls', 'Machine Learning', 'Perception', 'Path Planning', and 'Localisation', the team 
              emphatically covers every aspect to forge a de rigueur system of autonomous aerial vehicles.
            </p>
            <p>
              At Team AeRoVe, we always look for problems that challenge, excite, and motivate us to grow 
              intellectually. Our purpose is to further the boundaries of autonomous aerial technology and 
              realize the true potential of this field. We aim to contribute and start the culture of creating 
              cutting edge technology through indigenous innovation.
            </p>
            <p>
              The International Aerial Robotics Competition, the longest-running aerial robotics competition in the world, 
              is the kind of problem that has pushed us to the best of our capabilities and made us think in ways like 
              never before, providing us with an international platform to display our aptitudes.
            </p>
            
            <div className="mission-approach">
              <div className="mission-section">
                <h3>Our Mission</h3>
                <ul>
                  <li>Develop autonomous aerial vehicles</li>
                  <li>Push boundaries in aerial robotics</li>
                  <li>Create cutting-edge technology</li>
                  <li>Participate in international competitions</li>
                  <li>Foster innovation and collaboration</li>
                </ul>
              </div>
              
              <div className="approach-section">
                <h3>Our Approach</h3>
                <ul>
                  <li>Mothership-Daughter drone configuration</li>
                  <li>Advanced flight control systems</li>
                  <li>Computer vision and AI integration</li>
                  <li>Real-time path planning</li>
                  <li>Robust hardware integration</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="technology-section">
        <div className="container">
          <h2>Our Technology</h2>
          <div className="tech-grid">
            <div className="tech-card">
              <div className="tech-icon">🚁</div>
              <h3>Mothership Drone</h3>
              <p>An autonomous 25 Kg hexacopter with an integral cage-like structure that carries the daughter drone and deploys it at the mast.</p>
            </div>
            <div className="tech-card">
              <div className="tech-icon">🤖</div>
              <h3>Daughter Drone</h3>
              <p>A 25 kg autonomous coaxial-octocopter capable of launching in mid-air, equipped with robotic arm for module replacement.</p>
            </div>
            <div className="tech-card">
              <div className="tech-icon">🧠</div>
              <h3>AI & Machine Learning</h3>
              <p>Advanced algorithms for autonomous flight, obstacle avoidance, and intelligent decision-making in complex environments.</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )

  const Footer = () => (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-info">
          <div className="footer-logo">
            <img src="/AEROVE.png" alt="aerove logo" />
            <div>
              <h3>Aerove</h3>
              <p>Advanced Drone Technology Team</p>
            </div>
          </div>
          <div className="footer-copyright">
            © 2024 Aerove Team. All rights reserved.
          </div>
        </div>
        
        <div className="footer-social">
          <a href="https://instagram.com/aerove_iitb" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <a href="https://linkedin.com/company/aerove-iitb" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )

  const ProjectsPage = () => {
    const [activeTab, setActiveTab] = useState('current')
    const [expandedProjectCards, setExpandedProjectCards] = useState(new Set())
    

    const toggleProjectCardExpansion = (cardId) => {
      const newExpanded = new Set(expandedProjectCards)
      if (newExpanded.has(cardId)) {
        newExpanded.delete(cardId)
      } else {
        newExpanded.add(cardId)
      }
      setExpandedProjectCards(newExpanded)
    }

    const projectsData = {
      title: "Our Projects",
      subtitle: "Explore our innovative drone technology development initiatives",
      currentProjects: [
        {
          id: 1,
          title: "Wildlife Conservation with WWF",
          description: "Collaborating with WWF India for tiger identification, human-tiger conflict prevention, and crop damage mapping in Dudhwa National Park using advanced computer vision and thermal imaging.",
          image: "/photos/wwf-main.jpg",
          status: "In Progress",
          team: "Computer Vision & Conservation Team",
          timeline: "Ongoing Collaboration",
          technologies: ["Thermal Imaging", "Computer Vision", "Tiger Stripe Recognition", "Pose Estimation", "Crop Damage Assessment"],
          challenges: ["Dense forest navigation", "Tiger stripe pattern recognition", "Real-time thermal detection"],
          achievements: ["Individual tiger identification system", "Thermal-based animal detection", "Accurate crop damage mapping"]
        },
        {
          id: 2,
          title: "Solar PV Farm Inspection",
          description: "Autonomous drone-based solution for solar panel inspection using RGB and thermal cameras. Automatically detects faulty PV modules and plans optimal flight paths for large solar installations.",
          image: "/photos/solar-main.jpg",
          status: "In Progress",
          team: "Perception & Automation Team",
          timeline: "Development Phase",
          technologies: ["RGB Cameras", "Thermal Imaging", "Image Processing", "Cloud Communication", "Automatic Path Planning"],
          challenges: ["Large-scale inspection efficiency", "Thermal-RGB registration", "Real-time fault detection"],
          achievements: ["Automated flight path planning", "PV module extraction algorithm", "Cloud-based communication system"]
        },
        {
          id: 3,
          title: "Advanced SLAM & Navigation",
          description: "Developing state-of-the-art Simultaneous Localization and Mapping algorithms for GPS-denied environments with real-time obstacle avoidance and path optimization.",
          image: "/photos/slam-main.jpg",
          status: "In Progress",
          team: "Navigation & Controls Team",
          timeline: "Continuous R&D",
          technologies: ["SLAM", "EGO Planner", "ESDF-free Planning", "Kalman Filtering", "ROS2", "Gazebo"],
          challenges: ["GPS-denied navigation", "Real-time path planning", "Dynamic obstacle avoidance"],
          achievements: ["World-class SLAM performance", "Real-time trajectory generation", "Robust localization systems"]
        }
      ],
      pastProjects: [
        {
          id: 4,
          title: "JATAYU Quadcopter",
          description: "Advanced quadcopter design featuring Pixhawk Cube flight controller, Raspberry Pi 4 onboard computer, and advanced safety systems.",
          image: "/photos/jatayu-main.jpg",
          status: "Completed",
          team: "Full Integration Team",
          timeline: "Completed 2023",
          technologies: ["Pixhawk Cube", "Raspberry Pi 4", "Mission Planner", "ArduPilot", "Topology Optimization", "Carbon Fiber"],
          challenges: ["Autonomous navigation", "Safety system integration", "Battery optimization", "Competition requirements"],
          achievements: ["Advanced safety systems", "25-min endurance", "3kg payload capacity"]
        },
        {
          id: 5,
          title: "VTOL Quadplane Development",
          description: "Innovative VTOL (Vertical Take-Off and Landing) drone with custom carbon fiber fuselage using 4+1 configuration for enhanced control and efficiency.",
          image: "/photos/cuasc-vtol-main.jpg",
          status: "Completed",
          team: "Mechanical & Avionics Team",
          timeline: "Completed 2024",
          technologies: ["VTOL Design", "Carbon Fiber Manufacturing", "Custom Firmware", "4+1 Configuration", "MAVROS"],
          challenges: ["VTOL parameter tuning", "Custom firmware development", "Flight stability", "Target detection integration"],
          achievements: ["Successful flight demonstration", "Custom firmware implementation"]
        },
        {
          id: 6,
          title: "Multi-Modal BEV Detection System",
          description: "Robust Bird's Eye View detection system for autonomous vehicles using camera and LiDAR fusion, achieving state-of-the-art performance in challenging conditions.",
          image: "/photos/bev-detection-main.jpg",
          status: "Completed",
          team: "Perception & AI Team",
          timeline: "Completed 2024",
          technologies: ["Computer Vision", "LiDAR Processing", "Transformer Models", "Multi-GPU Training", "nuScenes Dataset"],
          challenges: ["Sensor failure robustness", "Real-time processing", "Multi-modal fusion", "Large-scale training"],
          achievements: ["4th place globally", "20% performance improvement", "mAP of 0.30", "Surpassed previous SOTA"]
        },
        {
          id: 7,
          title: "Advanced Battery Management & Power Optimization",
          description: "Dynamic battery prediction and optimization algorithms using sliding-window analysis for optimal energy usage and extended flight time.",
          image: "/photos/battery-optimization-main.jpg",
          status: "Completed",
          team: "Power Systems Team",
          timeline: "Completed 2023",
          technologies: ["Battery Modeling", "Power Optimization", "Sliding-Window Analysis", "Predictive Algorithms", "Energy Management"],
          challenges: ["Real-time power prediction", "Mission-specific optimization", "Environmental impact minimization", "Charge cycle optimization"],
          achievements: ["Dynamic decision-making algorithm", "Optimal battery utilization", "Minimal environmental impact", "Extended mission capability"]
        }
      ]
    }

    const projects = activeTab === 'current' ? projectsData.currentProjects : projectsData.pastProjects
    
    return (
      <div style={{flex: 1, display: 'flex', flexDirection: 'column'}}>
         <Navbar
        currentPage={currentPage}
        handlePageChange={handlePageChange}
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
      />
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
                  <div className="project-image">
                    <img src={project.image} alt={project.title} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                    <div className="project-status">{project.status}</div>
                  </div>
                  <div className="project-title">{project.title}</div>
                  <div className="project-description">{project.description}</div>
                  
                  <button 
                    className="expand-button"
                    onClick={() => toggleProjectCardExpansion(project.id)}
                  >
                    {expandedProjectCards.has(project.id) ? 'Show Less' : 'Show More'}
                  </button>
                  
                  {expandedProjectCards.has(project.id) && (
                    <div className="project-details expanded">
                      <h4>Project Details</h4>
                      <ul>
                        <li><strong>Team:</strong> {project.team}</li>
                        <li><strong>Timeline:</strong> {project.timeline}</li>
                        <li><strong>Status:</strong> {project.status}</li>
                      </ul>
                      
                      <h4>Technologies Used</h4>
                      <div className="tech-tags">
                        {project.technologies.map((tech, index) => (
                          <span key={index} className="tech-tag">{tech}</span>
                        ))}
                      </div>
                      
                      <h4>Key Challenges</h4>
                      <ul>
                        {project.challenges.map((challenge, index) => (
                          <li key={index}>{challenge}</li>
                        ))}
                      </ul>
                      
                      <h4>Major Achievements</h4>
                      <ul>
                        {project.achievements.map((achievement, index) => (
                          <li key={index}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  const CompetitionsPage = () => {
    const [expandedCompetitionCards, setExpandedCompetitionCards] = useState(new Set())
    
    const toggleCompetitionCardExpansion = (cardId) => {
      const newExpanded = new Set(expandedCompetitionCards)
      if (newExpanded.has(cardId)) {
        newExpanded.delete(cardId)
      } else {
        newExpanded.add(cardId)
      }
      setExpandedCompetitionCards(newExpanded)
    }

    const competitionsData = {
      title: "Our Competitions",
      subtitle: "Showcasing our achievements in international drone technology competitions",
      competitions: [
        {
          id: 1,
          name: "ICUAS '23",
          year: "2023",
          location: "International",
          status: "Completed",
          description: "International UAV competition organized by LARICS including autonomous exploration, crack detection in unknown environment, and pose estimation in GPS-denied environments.",
          image: "/photos/icuas-2023-main.jpg",
          team: "Full Aerove Team",
          achievements: [
            "1st Worldwide (Simulation)",
            "2nd Runner-ups (Hardware Pose Estimation)",
            "State-of-the-art crack detection results",
            "Advanced SLAM implementation in GPS-denied environment"
          ],
          challenges: [
            "GPS-denied navigation",
            "Real-time crack detection",
            "Unknown environment exploration",
            "Hardware pose estimation"
          ],
          technologies: ["SLAM", "Computer Vision", "Machine Learning", "Path Planning", "ESDF-free gradient planning"],
          results: "1st Worldwide (Simulation), 2nd Runner-ups (Hardware)",
          impact: "Established Aerove as world-leading team in autonomous UAV navigation"
        },
        {
          id: 2,
          name: "UAS '23",
          year: "2023",
          location: "International",
          status: "Completed",
          description: "International Student Unmanned Aerial Systems competition focusing on autonomous flight, payload delivery, and system design excellence.",
          image: "/photos/uas-2023-main.jpg",
          team: "Aerove Core Team",
          achievements: [
            "Global Rank 6",
            "Advanced safety system implementation", 
            "Successful autonomous payload delivery"
          ],
          challenges: [
            "Multi-objective mission requirements",
            "International competition standards",
            "System integration complexity",
            "Real-world flight conditions"
          ],
          technologies: ["Pixhawk", "Mission Planner", "Geofencing", "Battery Management", "Radio Failsafe"],
          results: "Global Rank 6",
          impact: "Recognition for design excellence and safety innovation"
        },
        {
          id: 3,
          name: "CUASC '24",
          year: "2024",
          location: "International",
          status: "Completed",
          description: "Competition focusing on VTOL (Vertical Take-Off and Landing) drone technology for waypoint navigation, target detection, and payload delivery.",
          image: "/photos/cuasc-2024-main.jpg",
          team: "Aerove Innovation Team",
          achievements: [
            "Successful flight demonstration",
            "Custom carbon fiber VTOL implementation"
          ],
          challenges: [
            "VTOL configuration complexity",
            "Custom firmware development",
            "4+1 motor configuration optimization",
            "Real-time target detection and payload delivery"
          ],
          technologies: ["VTOL Design", "Carbon Fiber Manufacturing", "Custom Firmware", "Computer Vision", "MAVROS"],
          results: "Successful Flight Demo",
          impact: "Pioneered VTOL technology implementation in competitive environment"
        },
        {
          id: 4,
          name: "RI4Rover",
          year: "2024",
          location: "International",
          status: "Completed",
          description: "Robotics competition involving autonomous navigation through unknown maze environments using advanced planning algorithms.",
          image: "/photos/ri4rover-main.jpg",
          team: "Controls & Planning Team",
          achievements: [
            "1st Place among all international teams",
            "Maze solved in under 2 minutes",
            "Advanced localization and mapping",
            "Custom Two-opt algorithm implementation"
          ],
          challenges: [
            "Unknown maze navigation",
            "Real-time path optimization",
            "Sensor fusion and localization",
            "Time-critical mission completion"
          ],
          technologies: ["ROS2", "Gazebo", "LIDAR", "Two-opt Algorithm", "EGO Planner", "Min-snap Trajectories"],
          results: "1st Place International",
          impact: "Demonstrated world-class autonomous navigation capabilities"
        }
      ],
      stats: [
        {
          icon: "🏆",
          number: "4",
          label: "Competitions"
        },
        {
          icon: "🌍",
          number: "6",
          label: "Global Rank (UAS '23)"
        },
        {
          icon: "🚁",
          number: "1st",
          label: "Worldwide (ICUAS Sim)"
        },
        {
          icon: "�",
          number: "2nd",
          label: "Runner-up (ICUAS)"
        }
      ]
    }
    
    return (
      <div style={{flex: 1, display: 'flex', flexDirection: 'column'}}>
         <Navbar
        currentPage={currentPage}
        handlePageChange={handlePageChange}
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
      />
        <div className="projects-page">
          <div className="container">
            <div className="projects-header">
              <h1>Our <span className="highlight">Competitions</span></h1>
              <p>{competitionsData.subtitle}</p>
            </div>

            {/* Competition Stats */}
            <div className="competition-stats">
              {competitionsData.stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <div className="stat-icon">{stat.icon}</div>
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
            
            <div className="projects-grid">
              {competitionsData.competitions.map(competition => (
                <div key={competition.id} className="project-card">
                  <div className="project-image">
                    <img src={competition.image} alt={competition.name} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                  </div>
                  <div className="project-title">{competition.name}</div>
                  <div className="project-description">{competition.description}</div>
                  
                  <button 
                    className="expand-button"
                    onClick={() => toggleCompetitionCardExpansion(competition.id)}
                  >
                    {expandedCompetitionCards.has(competition.id) ? 'Show Less' : 'Show More'}
                  </button>
                  
                  {expandedCompetitionCards.has(competition.id) && (
                    <div className="project-details expanded">
                      <h4>Competition Details</h4>
                      <ul>
                        <li><strong>Year:</strong> {competition.year}</li>
                        <li><strong>Location:</strong> {competition.location}</li>
                        <li><strong>Status:</strong> {competition.status}</li>
                        <li><strong>Team:</strong> {competition.team}</li>
                        <li><strong>Result:</strong> {competition.results}</li>
                      </ul>
                      
                      <h4>Key Achievements</h4>
                      <ul>
                        {competition.achievements.map((achievement, index) => (
                          <li key={index}>{achievement}</li>
                        ))}
                      </ul>
                      
                      <h4>Technologies Used</h4>
                      <div className="tech-tags">
                        {competition.technologies.map((tech, index) => (
                          <span key={index} className="tech-tag">{tech}</span>
                        ))}
                      </div>
                      
                      <h4>Challenges Overcome</h4>
                      <ul>
                        {competition.challenges.map((challenge, index) => (
                          <li key={index}>{challenge}</li>
                        ))}
                      </ul>
                      
                      <div className="impact-section">
                        <h4>Impact</h4>
                        <p>{competition.impact}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  const TeamPage = () => {
    // Import team data directly
    const teamData = {
      title: "Meet Our Team",
      subtitle: "The brilliant minds behind Aerove's innovative drone technology solutions",
      members: [
        { id: 1, name: "Jainam", role: "OC", department: "Leadership", avatar: "photos/Jainam.jpeg", social: { instagram: "#", linkedin: "#" } },
        { id: 2, name: "Prashant", role: "Manager", department: "Management", avatar: "photos/Prashant.jpg", social: { instagram: "#", linkedin: "#" } },
        { id: 3, name: "Jeet", role: "Manager", department: "Management", avatar: "photos/Jeet.jpeg", social: { instagram: "#", linkedin: "#" } },
        { id: 4, name: "Anjali", role: "Manager", department: "Management", avatar: "photos/Anjali.jpeg", social: { instagram: "#", linkedin: "#" } },
        { id: 5, name: "Viraj", role: "Manager", department: "Management", avatar: "photos/Viraj.jpg", social: { instagram: "#", linkedin: "#" } },
        { id: 6, name: "Rohan", role: "Lead", department: "Mechatronics Subsystem", avatar: "photos/Rohan.jpeg", social: { instagram: "#", linkedin: "#" } },
        { id: 7, name: "Divig", role: "Senior Engineer", department: "Mechatronics Subsystem", avatar: "photos/Divig.jpeg", social: { instagram: "#", linkedin: "#" } },
        { id: 8, name: "Jahnavi", role: "Member", department: "Mechatronics Subsystem", avatar: "photos/Jahnavi.jpg", social: { instagram: "#", linkedin: "#" } },
        { id: 9, name: "Sambhav", role: "Member", department: "Mechatronics Subsystem", avatar: "photos/Sambhav.jpeg", social: { instagram: "#", linkedin: "#" } },
        { id: 10, name: "Manav", role: "Lead", department: "Aerodynamic Subsystem", avatar: "photos/Manav.png", social: { instagram: "#", linkedin: "#" } },
        { id: 11, name: "Prabhakar", role: "Senior Engineer", department: "Aerodynamic Subsystem", avatar: "photos/Prabhakar.jpeg", social: { instagram: "#", linkedin: "#" } },
        { id: 12, name: "Vijay", role: "Member", department: "Aerodynamic Subsystem", avatar: "photos/Vijay.jpg", social: { instagram: "#", linkedin: "#" } },
        { id: 13, name: "Durva", role: "Member", department: "Aerodynamic Subsystem", avatar: "photos/Durva.jpeg", social: { instagram: "#", linkedin: "#" } },
        { id: 14, name: "Nipun", role: "Member", department: "Aerodynamic Subsystem", avatar: "photos/Nipun.jpeg", social: { instagram: "#", linkedin: "#" } },
        { id: 15, name: "Gokul", role: "Lead", department: "MPC Subsystem", avatar: "photos/Gokul.jpeg", social: { instagram: "#", linkedin: "#" } },
        { id: 16, name: "Deepak", role: "Senior Engineer", department: "MPC Subsystem", avatar: "photos/Deepak.jpeg", social: { instagram: "#", linkedin: "#" } },
        { id: 17, name: "Vihang", role: "Member", department: "MPC Subsystem", avatar: "photos/Vihang.jpeg", social: { instagram: "#", linkedin: "#" } },
        { id: 18, name: "Basant", role: "Member", department: "MPC Subsystem", avatar: "photos/Basant.jpeg", social: { instagram: "#", linkedin: "#" } },
        { id: 19, name: "Anushka", role: "Member", department: "MPC Subsystem", avatar: "photos/Anushka.jpeg", social: { instagram: "#", linkedin: "#" } },
        { id: 20, name: "Manan", role: "Member", department: "MPC Subsystem", avatar: "photos/Manan.png", social: { instagram: "#", linkedin: "#" } },
        { id: 21, name: "Arpit", role: "Member", department: "MPC Subsystem", avatar: "photos/Arpit.jpg", social: { instagram: "#", linkedin: "#" } },
        { id: 22, name: "Daksh", role: "Senior Engineer", department: "Perception Subsystem", avatar: "photos/Daksh.jpeg", social: { instagram: "#", linkedin: "#" } },
        { id: 23, name: "Sujay", role: "Senior Engineer", department: "Perception Subsystem", avatar: "photos/Sujay.jpg", social: { instagram: "#", linkedin: "#" } },
        { id: 24, name: "Aarav", role: "Member", department: "Perception Subsystem", avatar: "photos/Aarav.jpeg", social: { instagram: "#", linkedin: "#" } },
        { id: 25, name: "Megha", role: "Member", department: "Perception Subsystem", avatar: "photos/Megha.jpg", social: { instagram: "#", linkedin: "#" } },
        { id: 26, name: "Narendra", role: "Member", department: "Perception Subsystem", avatar: "photos/Narendra.jpg", social: { instagram: "#", linkedin: "#" } },
        { id: 27, name: "Maitreyee", role: "Member", department: "Perception Subsystem", avatar: "photos/Maitreyee.jpg", social: { instagram: "#", linkedin: "#" } },
        { id: 28, name: "Joshua", role: "Member", department: "Perception Subsystem", avatar: "photos/Joshua.jpg", social: { instagram: "#", linkedin: "#" } },
        { id: 29, name: "Ishwar", role: "Finance & Logistics Member", department: "Business Team", avatar: "photos/Ishwar.jpg", social: { instagram: "#", linkedin: "#" } },
        { id: 30, name: "Preetham", role: "Finance & Logistics Member", department: "Business Team", avatar: "photos/Preetham.jpg", social: { instagram: "#", linkedin: "#" } },
        { id: 31, name: "Srinidhi", role: "Web Dev Member", department: "Business Team", avatar: "photos/Srinidhi.jpg", social: { instagram: "#", linkedin: "#" } },
        { id: 32, name: "Kovid", role: "Web Dev Member", department: "Business Team", avatar: "photos/Kovid.jpg", social: { instagram: "#", linkedin: "#" } },
        { id: 33, name: "Premansh", role: "Media & PR Member", department: "Business Team", avatar: "photos/Premansh.jpg", social: { instagram: "#", linkedin: "#" } }
      ]
    }
    
    return (
      <div style={{flex: 1, display: 'flex', flexDirection: 'column'}}>
         <Navbar
        currentPage={currentPage}
        handlePageChange={handlePageChange}
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
      />
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
                    <img src={member.avatar} alt={member.name} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                  </div>
                  <h3>{member.name}</h3>
                  <div className="role">{member.role}</div>
                  <div className="department">{member.department}</div>
                  <div className="team-social">
                    <a href={member.social.instagram} target="_blank" rel="noopener noreferrer">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                      Instagram
                    </a>
                    <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                      LinkedIn
                    </a>
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

  const AlumniPage = () => {
  return (
    <div className={`launching-soon-page ${isDarkMode ? 'dark' : ''}`}>
      <Navbar
        currentPage={currentPage}
        handlePageChange={handlePageChange}
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
      />


      <div className="launching-soon-container">
        <div className="launching-soon-content">
          <div className="launching-soon-text">
            <h1 className="launching-title" style={{
              color: isDarkMode ? 'white' : 'blue',
              marginTop: '50px',
              paddingTop:'50px',
              fontSize: '36px',
              textAlign: 'center',
            }}>Launching Soon</h1>
            <p className="launching-subtitle" style={{
              color: isDarkMode ? 'white' : 'blue',
              // marginTop: '380px',
              // marginBottom: '0px',
              paddingBottom:'150px',
              paddingTop:'250px',
              fontSize: '40px',
              textAlign: 'center',
              bottom:'100px'
            }}>
              Something amazing is on the horizon
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

  const renderPage = () => {
    switch(currentPage) {
      case 'projects':
        return <ProjectsPage />
      case 'competitions':
        return <CompetitionsPage />
      case 'team':
        return <TeamPage />
      case 'alumni':
        return <AlumniPage />
      default:
        return <HomePage />
    }
  }

  return (
    <div id="app" data-theme={isDarkMode ? 'dark' : 'light'}>
      {renderPage()}
    </div>
  )
}

export default App
