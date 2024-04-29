import './Projects.css';
import LiveDemoIcon from '/src/assets/svg/live_demo.svg';
import GithubIcon from '/src/assets/svg/github_light.svg';
import ecommerceBackground from '/src/assets/photos/ecommerce.png';
import gymBackground from '/src/assets/photos/gym.png';
import manageBackground from '/src/assets/photos/manage.png';
import resumeBackground from '/src/assets/photos/resume.png';
import airmanagementBackground from '/src/assets/photos/airmanagement.png';

const projectsData = [
  {
    id: 1,
    name: 'Ecommerce Store',
    description: 'Vintage Furniture Store',
    languages: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MongoDb'],
    liveLink: '',
    githubLink: 'https://github.com/armandok0/VintageFurnitureStore',
    backgroundImage: `url(${ecommerceBackground})`
  },
  {
    id: 2,
    name: 'Gym Management System',
    description: 'Manage Gym Members and Services',
    languages: ['HTML', 'CSS', 'Flask', 'MongoDb'],
    liveLink: '',
    githubLink: 'https://github.com/armandok0/GymSystemManagement',
    backgroundImage: `url(${gymBackground})`
  },
  {
    id: 3,
    name: 'Simple Task',
    description: 'Manage Customers, Products, and Users',
    languages: ['Angular', 'CSS', 'Typescript'],
    liveLink: 'https://armandok0.github.io/FrontEndSimpleTaskAngular/',
    githubLink: 'https://github.com/armandok0/FrontEndSimpleTaskAngular',
    backgroundImage: `url(${manageBackground})`
  },
  {
    id: 4,
    name: 'Personal Portfolio',
    description: 'This Portfolio Project',
    languages: ['React', 'JavaScript', 'CSS'],
    liveLink: 'https://armandok0.com',
    githubLink: 'https://github.com/armandok0/ReactPortfolio',
    backgroundImage: `url(${resumeBackground})`
  },
  {
    id: 5,
    name: 'Airline Management System',
    description: 'Manage Users and their Bookings',
    languages: ['Flask', 'Postman', 'MongoDb', 'Docker'],
    liveLink: '',
    githubLink: 'https://github.com/armandok0/AirlineFlightManagement',
    backgroundImage: `url(${airmanagementBackground})`
  },
];


const Projects = () => {
  return (
    <div className="projects-section" id="projects">
      <div className="projects-container">
        <h2 className="projects-title">Projects</h2>
        <div className="projects-grid">
          {projectsData.map(project => (
            <div key={project.id} className="project-item" style={{ backgroundImage: project.backgroundImage }}>
                <h3>{project.name}</h3>
              <div className="project-info">
                <div className="project-details">
                  <p className="description">{project.description}</p>
                  <p className="languages-used">Languages: {project.languages.join(', ')}</p>
                </div>
                <div className="pr_buttons">
                  <a href={project.liveLink} className="live-demo" target="_blank" rel="noopener noreferrer">
                    <img src={LiveDemoIcon} alt="Live Demo" className="icon" />
                  </a>
                  <a href={project.githubLink} className="github-link" target="_blank" rel="noopener noreferrer">
                    <img src={GithubIcon} alt="GitHub" className="icon" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;