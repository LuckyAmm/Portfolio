import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar'
import Experience from './components/Experience';
import SocialLinks from './components/SocialLinks';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  return (
    <div className="">
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Contact />

      <SocialLinks />
    </div>
  );
}

export default App;
