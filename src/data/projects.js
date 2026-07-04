export const projects = [
  {
    id: "aws-autoscaling-lb",
    title: "AWS Auto Scaling & Load Balancer with NGINX",
    description:
      "Built a multi-AZ architecture (EC2, ALB, ASG) achieving ~99.9% uptime with ~40% better performance. Configured an NGINX reverse proxy and CPU-based auto-scaling, cutting response time by ~30% and manual effort by ~60%.",
    tech: ["AWS EC2", "ALB", "ASG", "NGINX", "Linux", "CloudWatch"],
    github: null,
    visit: null,
  },
  {
    id: "cicd-maven-jenkins",
    title: "CI/CD Pipeline for Maven Application",
    description:
      "Built an end-to-end CI/CD pipeline integrating GitHub with Jenkins for automated build, test, and deployment of a Java Maven app. Configured Maven stages and Gmail SMTP notifications for real-time status updates.",
    tech: ["Jenkins", "GitHub Actions", "Maven", "Java", "Linux", "CI/CD"],
    github: null,
    visit: null,
  },
  {
    id: "valor-robot",
    title: "VALOR — Vision-based Autonomous Location & Obstacle-avoidance Robot",
    description:
      "Autonomous vehicle prototype for Indian roads. Achieved 45% better obstacle detection via YOLO + GPS and 40% faster response by integrating Jetson Nano with ESP32 motor control on Ubuntu Linux.",
    tech: ["Python", "OpenCV", "YOLO", "Jetson Nano", "Ubuntu Linux", "GPS", "CNN", "ESP32"],
    github: "https://github.com/Mubeenali53/VALOR.git",
    visit: null,
  },
  {
    id: "face-recognition",
    title: "Face Recognition Attendance System",
    description:
      "Real-time face recognition using OpenCV, improving attendance accuracy by 48%. Automated cloud logging to Firebase reduced manual processing by 42%.",
    tech: ["Python", "OpenCV", "Face Recognition Library", "Firebase", "MySQL"],
    github: null,
    visit: null,
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    description:
      "This site — a data-driven React portfolio deployed via a GitHub Actions CI/CD pipeline to GitHub Pages, with an animated deploy-pipeline visualization in the hero.",
    tech: ["React", "Vite", "Tailwind CSS", "Framer Motion", "GitHub Actions"],
    github: "https://github.com/Mubeenali53/Portfolio",
    visit: "https://syedmubeenali.dev/",
  },
];
