import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Feature";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Features />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
