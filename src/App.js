import { Navbar } from "./Components/Navbar/Navbar";
import './App.css'
import { Intro } from "./Components/Intro/Intro";
import Services from "./Components/Services/Services";
import { Projects } from "./Components/Projects/Projects";
import { Testimonials } from "./Components/Testimonials/Testimonials";
import Contact  from "./Components/Contact/Contact";

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Services/>
      <Projects/>
      <Testimonials/>
      <Contact/>
    </div>
  );
}

export default App;
