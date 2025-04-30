import Image from 'next/image'
import project1 from '../../assets/project1.png'
import project2 from '../../assets/project2.jpg'
import project4 from '../../assets/project4.png'
import project5 from '../../assets/littlelemon.png'
import project6 from '../../assets/weatherapp.png'
import project7 from '../../assets/project7.png'

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: 'Weather App',
      description: 'Weather App using built in JavaScript Date object',
      image: project7,
      link: 'https://br-117.github.io/digital-date-clock/',
    },
    {
      id: 2,
      title: 'Weather App',
      description: 'Weather App via weather API',
      image: project6,
      link: 'https://weatherappbybim.netlify.app/',
    },
    {
      id: 3,
      title: 'Little Lemon',
      description: 'Restaurant booking form focused',
      image: project5,
      link: 'https://littlelemonfood.netlify.app/',
    },
    {
        id: 4,
        title: 'MeYou',
        description: 'Dating app landing page for cats!',
        image: project2,
        link: 'https://bimrai.github.io/meyou_dating_cat_app_project/',
      },
    {
        id: 5,
        title: 'Homik Adventures',
        description: '2D Side Scroller Game',
        image: project1,
        link: 'https://br-117.github.io/game/',
      },
    {
      id: 6,
      title: 'NanoSip',
      description: 'Water tracking application',
      image: project4,
      link: 'https://nanosip.netlify.app/',
    },
  ]

  const sortedProjects = [...projects].sort((a, b) => b.id - a.id)

  return (
    <div className="projects-page">
      <h1>Recent Projects</h1>
      <div className="projects-grid">
        {sortedProjects.map((project) => (
          <a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
          >
            <div className="project-image">
              <Image src={project.image} alt={project.title} fill style={{ objectFit: 'cover' }} />
            </div>
            <div className="project-info">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
