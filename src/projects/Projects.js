import { useState } from 'react';
import './Projects.css';

const projects = [
  {
    id: 1,
    name: 'Andante Studio',
    description: 'Gestisci le tue setlist musicali in modo semplice e intuitivo. Crea, organizza e condividi le tue scalette per concerti e prove.',
    image: '🎸',
    status: 'live',
    url: '/andante-studio'
  },
  {
    id: 2,
    name: 'Watchlist',
    description: 'Tieni traccia dei film e delle serie TV che vuoi guardare. Organizza la tua lista personale e non perderti mai più un titolo.',
    image: '🎬',
    status: 'coming-soon',
    url: null
  }
];

function Projects({ onBack }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const project = projects[currentIndex];

  return (
    <div className="projects-container">
      <button className="back-button" onClick={onBack}>
        ← Torna indietro
      </button>
      
      <h1>I Miei Progetti</h1>
      
      <div className="carousel">
        <button className="carousel-btn prev" onClick={prevProject}>
          ‹
        </button>
        
        <div className="project-card">
          <div className="project-image">{project.image}</div>
          <h2>{project.name}</h2>
          <p>{project.description}</p>
          
          {project.status === 'live' ? (
            <a 
              href={project.url} 
              className="project-btn live"
            >
              Vai al progetto →
            </a>
          ) : (
            <span className="project-btn coming-soon">
              🚧 Coming Soon
            </span>
          )}
        </div>
        
        <button className="carousel-btn next" onClick={nextProject}>
          ›
        </button>
      </div>
      
      <div className="carousel-dots">
        {projects.map((_, index) => (
          <span 
            key={index} 
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;