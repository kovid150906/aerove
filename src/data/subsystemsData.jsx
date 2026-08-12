export const subsystemsData = [
  {
    id: 1,
    name: "Perception",
    tagline: "Giving the aircraft its eyes and brain.",
    description: "The Perception subsystem builds the vision-based intelligence that allows our drones to see, understand, and navigate their environment. We tackle the toughest challenges in autonomous robotics: flying unstable drones using noisy sensors in data-scarce environments.",
    whatWeDo: "Develop robust models for object detection, obstacle avoidance, and high-speed environment mapping.",
    technologies: "Reinforcement Learning (RL), Foundation Models (JEPA), World Models for physics simulation, and low-latency gate detection.",
    highlights: "Competed in autonomous drone racing leagues with 60Hz RL controllers, and participated in AI-GP by Anduril, IARC, and vision challenges at NeurIPS and CVPR.",
    icon: "👁️"
  },
  {
    id: 2,
    name: "Aerodynamics",
    tagline: "The science of turning principles into performance.",
    description: "The Aerodynamics subsystem studies how air interacts with our fleet to make them faster, more stable, and highly efficient. We don't just run simulations; we build, fly, test, analyze, and iterate until the design is perfect.",
    whatWeDo: "Own the complete physical design configuration of both fixed-wing aircraft and multirotors—from airfoil selection and wing sizing to aspect ratio optimization and drag reduction.",
    technologies: "XFLR5, OpenVSP, and ANSYS Fluent.",
    highlights: "Translating complex fluid dynamics into physical, mission-capable aircraft that push the boundaries of flight efficiency.",
    icon: "✈️"
  },
  {
    id: 3,
    name: "Mechatronics",
    tagline: "The nervous system of the AeRoVe fleet.",
    description: "Mechatronics is the crucial layer where hardware meets software—turning a static flying frame into a fully autonomous system. We handle the complete integration of avionics, actuation, and power distribution.",
    whatWeDo: "Design power distribution circuits, integrate custom PCBs, configure autopilot stacks, tune sensor fusion algorithms, and implement critical safety protocols.",
    technologies: "Pixhawk flight controllers, GPS/IMU sensors, ESCs, QGroundControl, and advanced control loops.",
    highlights: "Successfully engineered the complete nervous system for Hanuman, our STOL aircraft that competed at the IMechE UAS Challenge 2026 in the UK.",
    icon: "⚡"
  },
  {
    id: 4,
    name: "Motion Planning & Control (MPC)",
    tagline: "The digital pilots navigating the skies.",
    description: "The MPC subsystem designs, simulates, and deploys the custom motion planning algorithms that tell our aircraft exactly how to move. We bridge the gap between academic research and real-world application.",
    whatWeDo: "Write the control architectures that optimize flight stability, manage complex dynamic constraints, and maximize performance and energy efficiency.",
    technologies: "Python, C++, MATLAB, and ROS-Gazebo for advanced simulation environments.",
    highlights: "Deploying custom algorithms for international competitions and conducting independent robotics research to push the limits of autonomous aerial navigation.",
    icon: "🕹️"
  }
];