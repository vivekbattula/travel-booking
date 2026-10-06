import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Destinations from "./components/Destinations";
import Packages from "./components/Packages";
import WhyChooseUs from "./components/WhyChooseUs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Destinations />
        <Packages />
        <WhyChooseUs />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;