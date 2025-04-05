import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Portfolio";
import Skill from "./components/Skill";
import Contact from './components/Contact.jsx'


function App() {
  return (
    <div  className="text-4xl font-bold ">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Skill />
      <Contact  />
    </div>
  );
}

export default App;
