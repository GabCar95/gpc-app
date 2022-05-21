import About from './components/About';
import ImgCarousel from './components/carousel/ImgCarousel';
import Contact from './components/Contact';
import Home from './components/Home';
import MapRadius from './components/MapRadius';
import Navbar from './components/Navbar'
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <ImgCarousel />
      <MapRadius />
      <Contact />
    </div>
  );
}

export default App;
