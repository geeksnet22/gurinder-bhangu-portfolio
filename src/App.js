import About from './About';
import './App.css';
import Contact from './Contact';
import Education from './Education';
import Projects from './Projects';
import WorkExperience from './WorkExperience';

function App() {
  return (
    <div className="app">
      <About />
      <Education />
      <WorkExperience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
