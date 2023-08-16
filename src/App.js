import Navbar from './components/navbar/Navbar';
import Intro from './components/intro/Intro';
import Skills from './components/skills/Skills';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills />
    </div>
  );
}

export default App;
