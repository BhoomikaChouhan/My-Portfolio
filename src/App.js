import Navbar from "./Components/Navbar/Navbar";
import Intro  from "./Components/Intro/Intro";
import Services from "./Components/Services/Services";
import './App.css'
import Projects from "./Components/Projects/Projects";
import Testimonials from "./Components/Testimonials/Testimonials";
import Contact  from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Services/>
      <Projects/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
