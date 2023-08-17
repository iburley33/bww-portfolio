import Navbar from './components/navbar/Navbar';
import Intro from './components/intro/Intro';
import Skills from './components/skills/Skills';
import Portfolio from './components/portfolio/Portfolio';

import './App.css';
import Resume from './components/resume/Resume';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills />
      <Portfolio />
      <Resume />

    </div>
  );
}

export default App;
