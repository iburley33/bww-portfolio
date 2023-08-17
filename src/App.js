import Navbar from './components/navbar/Navbar';
import Intro from './components/intro/Intro';
import Skills from './components/skills/Skills';
import Portfolio from './components/portfolio/Portfolio';
import Resume from './components/resume/Resume';
import Contact from './components/contact/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills />
      <Resume />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
