import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Experience from './components/Experience';



function App() {
  return (
    <div className="App overflow-x-hidden">
      <Header />      
      <Hero />
      <Skills />
      <Experience />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
