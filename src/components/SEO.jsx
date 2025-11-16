import { Helmet } from 'react-helmet-async'

const SEO = ({ 
  title = "Aerove - Advanced Autonomous Drone Technology | IIT Bombay",
  description = "Team Aerove of UMIC, IIT Bombay pioneers autonomous drone technology. We develop cutting-edge aerial robotics for wildlife conservation, solar inspection, and international competitions.",
  keywords = "Aerove, IIT Bombay, IITB, UMIC, drone technology, autonomous drones, aerial robotics, UAV, quadcopter, VTOL, computer vision, machine learning, SLAM, drone competition, ICUAS, wildlife conservation, solar panel inspection",
  image = "https://aerove-jet.vercel.app/AEROVE.png",
  url = "https://aerove-jet.vercel.app/"
}) => {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      
      {/* Twitter */}
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      <meta property="twitter:url" content={url} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
    </Helmet>
  )
}

export default SEO
