export const projectsData = {
  title: "Our Projects",
  subtitle:
    "AeRoVe’s projects focus on building robust, autonomous aerial systems through research-driven engineering and real-world validation.",

  currentProjects: [
    {
      id: 1,
      title: "QuadPlane VTOL UAV Development",
      description:
        "Design and development of a QuadPlane VTOL UAV capable of autonomous takeoff, transition, cruise, and landing.",
      image: "✈️",
      status: "Ongoing",
      team: "Mechatronics, Aerodynamics, MPC",
      timeline: "2024 – Present",
      technologies: [
        "VTOL Aerodynamics",
        "Carbon Fiber Structures",
        "PX4 Autopilot",
        "ANSYS",
        "X-Plane"
      ],
      challenges: [
        "Stable VTOL-to-cruise transition",
        "Weight optimization",
        "Control tuning across flight regimes"
      ],
      achievements: [
        "Validated 4+1 configuration",
        "Successful autonomous VTOL testing"
      ]
    },

    {
      id: 2,
      title: "Vision-Based Autonomous Navigation",
      description:
        "Development of perception pipelines enabling UAVs to navigate using onboard vision in GPS-denied environments.",
      image: "👁️",
      status: "Ongoing",
      team: "Perception Subsystem",
      timeline: "2024 – Present",
      technologies: [
        "Computer Vision",
        "SLAM (ORB-SLAM3, RTAB-Map)",
        "Deep Learning",
        "Sensor Fusion"
      ],
      challenges: [
        "Robust localization",
        "Simulation-to-real domain gap"
      ],
      achievements: [
        "Reliable vision-based localization in controlled environments"
      ]
    }
  ],

  pastProjects: [
    {
      id: 3,
      title: "Autonomous Maze-Solving Drone (Ri4Rover)",
      description:
        "A fully autonomous drone designed to solve complex mazes in GPS-denied environments.",
      image: "🚁",
      status: "Completed",
      team: "Perception, Motion Planning & Control",
      timeline: "2023 – 2024",
      technologies: [
        "2D LiDAR",
        "Grid-based SLAM",
        "A* Path Planning"
      ],
      challenges: [
        "Fast decision-making",
        "Precise localization"
      ],
      achievements: [
        "1st place globally at Ri4Rover 2024",
        "Fastest completion time (15.54 seconds)"
      ]
    },

    {
      id: 4,
      title: "Robust Multi-Modal BEV Perception (RoboDrive)",
      description:
        "Research project focused on robust object detection under sensor failures for autonomous systems.",
      image: "🤖",
      status: "Completed",
      team: "Perception Subsystem",
      timeline: "2024",
      technologies: [
        "BEVFusion",
        "Modality-Agnostic Feature Sampler (MAFS)",
        "Multi-modal Sensor Fusion"
      ],
      challenges: [
        "Random sensor dropouts",
        "Generalization across sensing modalities"
      ],
      achievements: [
        "4th place globally at RoboDrive 2024 (ICRA)",
        "NDS score of 42.79% on NuScenes-C"
      ]
    }
  ]
}
