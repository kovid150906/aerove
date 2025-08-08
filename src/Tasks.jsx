import { useState } from 'react'

function Tasks({ setCurrentPage }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [tasks, setTasks] = useState({
    todo: [
      {
        id: 1,
        title: "Battery Life Optimization",
        description: "Research and development of enhanced battery management systems to extend flight time and improve power efficiency for longer autonomous missions.",
        image: "🚁"
      },
      {
        id: 2,
        title: "Obstacle Detection System",
        description: "Implement advanced computer vision algorithms for real-time obstacle detection and avoidance in complex environments.",
        image: "👁️"
      },
      {
        id: 3,
        title: "Payload Integration",
        description: "Design and integrate modular payload systems for different mission requirements including cameras, sensors, and delivery mechanisms.",
        image: "📦"
      }
    ],
    inProgress: [
      {
        id: 4,
        title: "Autonomous Flight Control System",
        description: "Developing advanced autopilot algorithms for stable autonomous flight with obstacle avoidance capabilities. This includes PID tuning and flight path optimization.",
        image: "🧠"
      },
      {
        id: 5,
        title: "Communication Module Replacement",
        description: "Designing the mechanical and electrical systems for automated communication module replacement during flight operations.",
        image: "🔧"
      },
      {
        id: 6,
        title: "GPS Navigation Enhancement",
        description: "Improving GPS accuracy and implementing backup navigation systems for reliable positioning in challenging environments.",
        image: "📍"
      }
    ],
    completed: [
      {
        id: 7,
        title: "High-Resolution Camera Integration",
        description: "Integrating 4K camera systems with gimbal stabilization for aerial photography and surveillance applications. Focus on seamless video transmission.",
        image: "📷"
      },
      {
        id: 8,
        title: "Ground Control Station",
        description: "Developing the ground control interface for mission planning, real-time monitoring, and emergency override capabilities.",
        image: "🖥️"
      }
    ]
  })

  const moveTask = (taskId, fromStatus, toStatus) => {
    const task = tasks[fromStatus].find(t => t.id === taskId)
    if (!task) return

    setTasks(prev => ({
      ...prev,
      [fromStatus]: prev[fromStatus].filter(t => t.id !== taskId),
      [toStatus]: [...prev[toStatus], task]
    }))
  }

  return (
    <div>
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <a href="#home" className="logo" onClick={() => setCurrentPage('home')}>
            <div className="logo-icon">A</div>
            Aerove
          </a>
          
          {/* Desktop Menu */}
          <ul className="nav-menu">
            <li><a href="#home" onClick={() => setCurrentPage('home')}><i>🏠</i>Home</a></li>
            <li><a href="#team" onClick={() => setCurrentPage('team')}><i>👥</i>Team</a></li>
            <li><a href="#tasks" className="active"><i>📋</i>Tasks</a></li>
          </ul>

          {/* Mobile menu button */}
          <button
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div style={{ background: 'rgba(10, 10, 10, 0.95)', padding: '20px' }}>
            <ul style={{ listStyle: 'none', textAlign: 'center' }}>
              <li style={{ margin: '10px 0' }}><a href="#home" onClick={() => setCurrentPage('home')}>🏠 Home</a></li>
              <li style={{ margin: '10px 0' }}><a href="#team" onClick={() => setCurrentPage('team')}>👥 Team</a></li>
              <li style={{ margin: '10px 0' }}><a href="#tasks">📋 Tasks</a></li>
            </ul>
          </div>
        )}
      </nav>

      {/* Tasks Page Content */}
      <div className="tasks-page">
        <div className="container">
          <div className="tasks-header">
            <h1>Project <span className="highlight">Tasks</span></h1>
            <p>Track our progress across all drone technology development initiatives</p>
          </div>

          <div className="kanban-board">
            {/* To Do Column */}
            <div className="kanban-column">
              <div className="column-header">
                <div className="column-title">
                  <div className="status-dot todo"></div>
                  To Do
                </div>
                <div className="task-count">{tasks.todo.length}</div>
              </div>
              {tasks.todo.map(task => (
                <div key={task.id} className="task-card">
                  <div className="task-image">{task.image}</div>
                  <div className="task-title">{task.title}</div>
                  <div className="task-description">{task.description}</div>
                  <button 
                    className="task-button move-forward"
                    onClick={() => moveTask(task.id, 'todo', 'inProgress')}
                  >
                    ▶️ Move to In Progress
                  </button>
                </div>
              ))}
            </div>

            {/* In Progress Column */}
            <div className="kanban-column">
              <div className="column-header">
                <div className="column-title">
                  <div className="status-dot in-progress"></div>
                  In Progress
                </div>
                <div className="task-count">{tasks.inProgress.length}</div>
              </div>
              {tasks.inProgress.map(task => (
                <div key={task.id} className="task-card">
                  <div className="task-image">{task.image}</div>
                  <div className="task-title">{task.title}</div>
                  <div className="task-description">{task.description}</div>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <button 
                      className="task-button move-back"
                      onClick={() => moveTask(task.id, 'inProgress', 'todo')}
                      style={{ flex: 1 }}
                    >
                      ◀️ Move to To Do
                    </button>
                    <button 
                      className="task-button move-forward"
                      onClick={() => moveTask(task.id, 'inProgress', 'completed')}
                      style={{ flex: 1 }}
                    >
                      ▶️ Move to Completed
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Completed Column */}
            <div className="kanban-column">
              <div className="column-header">
                <div className="column-title">
                  <div className="status-dot completed"></div>
                  Completed
                </div>
                <div className="task-count">{tasks.completed.length}</div>
              </div>
              {tasks.completed.map(task => (
                <div key={task.id} className="task-card">
                  <div className="task-image">{task.image}</div>
                  <div className="task-title">{task.title}</div>
                  <div className="task-description">{task.description}</div>
                  <button 
                    className="task-button move-back"
                    onClick={() => moveTask(task.id, 'completed', 'inProgress')}
                  >
                    ◀️ Move to In Progress
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <div className="logo-icon">A</div>
            <div>
              <h3>Aerove</h3>
              <p>Advanced Drone Technology Team</p>
            </div>
          </div>
          
          <div className="footer-copyright">
            © 2024 Aerove Team. All rights reserved. | Innovating the Future of Drone Technology
          </div>
          
          <div className="footer-social">
            <a href="#"><i>📷</i></a>
            <a href="#"><i>💼</i></a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Tasks
