export const competitionsData = {
  title: "Our Competitions",
  subtitle:
    "Team AeRoVe represents IIT Bombay at premier international aerial robotics competitions, achieving top global ranks through rigorous engineering and autonomous system design.",

  competitions: [
    {
      id: 6, // Make sure to update this ID based on the last ID in your file
      name: "IRoC-U 2025",
      year: "2025",
      location: "UR Rao Satellite Centre (URSC), Bengaluru, India",
      status: "Completed",
      description: "An autonomous Navigation system for Aerial Vehicles (ANAV) designed to explore a simulated Martian environment without external navigation aids like GPS.",
      image: "🛸",
      achievements: [
        "Reached the penultimate round among 1600 participating teams",
        "Autonomously mapped a 30 ft × 40 ft arena for hazard-free landing zones",
        "Executed stable vertical takeoffs, precise waypoint navigation, and sequential multi-landing operations"
      ],
      challenges: [
        "Low-drift visual-inertial state estimation under constrained compute",
        "Severe SWaP limitations for sloped terrain landing mechanism",
        "Short 4.5-minute flight endurance on a 2200mAh 4S LiPo battery"
      ],
      technologies: [
        "Nvidia Jetson Nano & Cubepilot Orange Cube (PX4)",
        "ZED2 Stereo Camera with ORB-SLAM3",
        "RTAB-Map 3D Occupancy Grids",
        "OpenCV Boundary-Following & Boustrophedon Sweep",
        "4-bar Parallel Linkage Landing Mechanism"
      ],
      results: "Penultimate Round (Top 1600 Teams)",
      impact: "Demonstrated advanced autonomous flight and mapping capabilities necessary for extra-terrestrial aerial exploration."
    },
    {
      id: 7, // Make sure to update this ID as well
      name: "SUAS 2025",
      year: "2025",
      location: "St. Mary's County Regional Airport, California, Maryland, USA",
      status: "Completed",
      description: "A portable Unmanned Aerial System weighing under 35 lbs built to execute a multi-faceted autonomous mission within a 30-minute window.",
      image: "🛩️",
      achievements: [
        "Built sub-35 lbs portable system fitting standard flight luggage",
        "Engineered delivery mechanism dropping 4 payloads within 20 ft target radius from >75 ft height",
        "Mapped 15-acre area over 15-mile flight path and detected airport-debris targets"
      ],
      challenges: [
        "Balancing camera resolution with overall payload mass under strict weight limits",
        "Maximizing endurance for 15-mile flight within strict 100Wh battery limit",
        "Unifying mechanical sub-assemblies, flight controls, image processing, and sensor payloads"
      ],
      technologies: [
        "Lightweight Object Detection Models",
        "Custom Motor-Driven Pulley Mechanism",
        "Lightweight LiDAR & Real-Time Obstacle Avoidance",
        "100Wh Modular Battery Housing"
      ],
      results: "Mission Completed successfully",
      impact: "Successfully integrated a transportable airframe capable of dynamic hazard navigation alongside other aircraft with minimal operator reliance."
    },
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
    },
  ],

  stats: [
    { icon: "🏆", number: "5", label: "International Competitions" },
    { icon: "🥇", number: "6", label: "Global Podium Finishes" },
    { icon: "🌍", number: "6", label: "Countries Represented" }
  ]
}
