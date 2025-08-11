export const projectsData = {
  title: "Our Projects",
  subtitle: "Explore our innovative drone technology development initiatives",
  currentProjects: [
    {
      id: 1,
      title: "Autonomous Flight Control System",
      description: "Developing advanced autopilot algorithms for stable autonomous flight with obstacle avoidance capabilities. This includes PID tuning and flight path optimization.",
      image: "🧠",
      status: "In Progress",
      team: "Controls Team",
      timeline: "6 months",
      technologies: ["Python", "ROS", "PID Control", "Computer Vision"],
      challenges: ["Real-time processing", "Wind compensation", "Battery optimization"],
      achievements: ["Stable hover achieved", "Obstacle detection working", "Path planning implemented"]
    },
    {
      id: 2,
      title: "Communication Module Replacement",
      description: "Designing the mechanical and electrical systems for automated communication module replacement during flight operations.",
      image: "🔧",
      status: "In Progress",
      team: "Mechatronics Team",
      timeline: "4 months",
      technologies: ["SolidWorks", "Arduino", "Servo Motors", "RF Communication"],
      challenges: ["Precision alignment", "Weight constraints", "Reliability testing"],
      achievements: ["Prototype completed", "Mechanical design finalized", "Testing phase started"]
    },
    {
      id: 3,
      title: "GPS Navigation Enhancement",
      description: "Improving GPS accuracy and implementing backup navigation systems for reliable positioning in challenging environments.",
      image: "📍",
      status: "In Progress",
      team: "Localization Team",
      timeline: "3 months",
      technologies: ["GPS", "IMU", "Kalman Filter", "SLAM"],
      challenges: ["Signal interference", "Indoor navigation", "Accuracy improvement"],
      achievements: ["Multi-sensor fusion", "Error reduction by 40%", "Backup systems ready"]
    }
  ],
  pastProjects: [
    {
      id: 4,
      title: "High-Resolution Camera Integration",
      description: "Integrating 4K camera systems with gimbal stabilization for aerial photography and surveillance applications. Focus on seamless video transmission.",
      image: "📷",
      status: "Completed",
      team: "Perception Team",
      timeline: "Completed in 2023",
      technologies: ["4K Camera", "Gimbal", "Video Processing", "Wireless Transmission"],
      challenges: ["Weight balance", "Video latency", "Power consumption"],
      achievements: ["4K streaming achieved", "Stabilization working", "Deployed in field tests"]
    },
    {
      id: 5,
      title: "Ground Control Station",
      description: "Developing the ground control interface for mission planning, real-time monitoring, and emergency override capabilities.",
      image: "🖥️",
      status: "Completed",
      team: "Software Team",
      timeline: "Completed in 2023",
      technologies: ["React", "WebSocket", "Python", "Mission Planner"],
      challenges: ["Real-time updates", "User interface design", "Emergency protocols"],
      achievements: ["Full mission control", "Emergency override working", "User-friendly interface"]
    },
    {
      id: 6,
      title: "Battery Life Optimization",
      description: "Research and development of enhanced battery management systems to extend flight time and improve power efficiency for longer autonomous missions.",
      image: "🚁",
      status: "Completed",
      team: "Power Systems Team",
      timeline: "Completed in 2022",
      technologies: ["Battery Management", "Power Electronics", "Efficiency Algorithms"],
      challenges: ["Weight vs capacity", "Thermal management", "Safety protocols"],
      achievements: ["30% flight time increase", "Thermal issues resolved", "Safety standards met"]
    }
  ]
}
