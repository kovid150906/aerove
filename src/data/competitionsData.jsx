export const competitionsData = {
  title: "Our Competitions",
  subtitle:
    "Team AeRoVe represents IIT Bombay at premier international aerial robotics competitions, achieving top global ranks through rigorous engineering and autonomous system design.",

  competitions: [
    {
      id: 1,
      name: "Ri4Rover 2024 (Drone Class)",
      year: "2024",
      location: "Purdue University, USA",
      status: "Completed",
      description:
        "An international autonomous aerial robotics competition focused on GPS-denied planetary exploration scenarios.",
      image: "🚁",
      achievements: [
        "1st place globally in Drone Class",
        "Lowest flight time among all competitors (15.54 seconds)",
        "Completed all software milestones successfully"
      ],
      challenges: [
        "GPS-denied maze environment",
        "Real-time obstacle avoidance",
        "Fast and reliable localization"
      ],
      technologies: [
        "2D LiDAR",
        "Grid-based SLAM",
        "A* Path Planning",
        "Autonomous Navigation"
      ],
      results: "1st Place Globally",
      impact:
        "Demonstrated robust autonomous navigation for planetary exploration missions."
    },

    {
      id: 2,
      name: "CUASC 2024 – Californian Unmanned Aerial Systems Competition",
      year: "2024",
      location: "California, USA",
      status: "Completed",
      description:
        "An international UAV competition emphasizing aircraft design, mission autonomy, and payload delivery.",
      image: "✈️",
      achievements: [
        "Won Aircraft Design Award",
        "Autonomous VTOL takeoff, transition and cruise",
        "Vision-based precision payload delivery"
      ],
      challenges: [
        "VTOL stability and cruise efficiency trade-off",
        "Precise payload deployment",
        "Energy-aware mission execution"
      ],
      technologies: [
        "QuadPlane VTOL (4+1 Configuration)",
        "Carbon Fiber Composites",
        "Computer Vision",
        "Raspberry Pi 4B"
      ],
      results: "1st Place – Aircraft Design Award",
      impact:
        "Validated AeRoVe’s VTOL aircraft design and mission autonomy capabilities."
    },

    {
      id: 3,
      name: "RoboDrive 2024 (ICRA)",
      year: "2024",
      location: "ICRA – International Conference",
      status: "Completed",
      description:
        "A global autonomous perception challenge focusing on robust multi-modal object detection under sensor degradation.",
      image: "🤖",
      achievements: [
        "4th rank globally among international teams",
        "NuScenes Detection Score (NDS) of 42.79%",
        "Outperformed baseline BEVFusion without retraining"
      ],
      challenges: [
        "Random sensor failures",
        "Robust perception under corrupted data",
        "Generalization across sensing configurations"
      ],
      technologies: [
        "BEVFusion",
        "Modality-Agnostic Feature Sampler (MAFS)",
        "LiDAR and Camera Sensor Fusion"
      ],
      results: "4th Place Globally",
      impact:
        "Demonstrated state-of-the-art robustness in autonomous perception systems."
    },

    {
      id: 4,
      name: "ICUAS 2023",
      year: "2023",
      location: "Poland",
      status: "Completed",
      description:
        "International competition featuring simulation and hardware challenges for autonomous aerial systems.",
      image: "🌍",
      achievements: [
        "World Rank 1 in Simulation Challenge",
        "World Rank 3 in Hardware Challenge"
      ],
      challenges: [
        "Simulation-to-hardware transfer",
        "Robust autonomous flight control"
      ],
      technologies: [
        "Autonomous Flight Control",
        "Simulation-based Testing",
        "Hardware Integration"
      ],
      results: "World Rank 1 (Simulation), Rank 3 (Hardware)",
      impact:
        "Established AeRoVe’s strength in both simulated and real-world UAV systems."
    },

    {
      id: 5,
      name: "UAS Challenge 2023",
      year: "2023",
      location: "United Kingdom",
      status: "Completed",
      description:
        "A prestigious UAV competition emphasizing safe design, autonomy, and mission reliability.",
      image: "🏆",
      achievements: [
        "Advancement Award",
        "Design Award",
        "Scrutineers Award"
      ],
      challenges: [
        "Strict safety constraints",
        "High mission reliability requirements"
      ],
      technologies: [
        "Fixed-wing UAV Design",
        "Autonomous Mission Planning",
        "System Safety Validation"
      ],
      results:
        "Advancement Award, Design Award, Scrutineers Award",
      impact:
        "International recognition for UAV design quality and execution."
    }
  ],

  stats: [
    { icon: "🏆", number: "5", label: "International Competitions" },
    { icon: "🥇", number: "6", label: "Global Podium Finishes" },
    { icon: "🌍", number: "6", label: "Countries Represented" }
  ]
}
