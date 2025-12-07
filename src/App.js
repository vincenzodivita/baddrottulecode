import { useState } from 'react';
import './App.css';

import Home from './home/Home.js';
import Projects from './projects/Projects.js';

function App() {
  const [showProjects, setShowProjects] = useState(false);

  return (
    <div className="App">
      {!showProjects ? (
        <Home onShowProjects={() => setShowProjects(true)} />
      ) : (
        <Projects onBack={() => setShowProjects(false)} />
      )}
    </div>
  );
}

export default App;