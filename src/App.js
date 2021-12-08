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
      {/* Header */}
      <Header />

      {/* perfil */}
      <Hero />

      {/* Skills e experiências */}
      <Skills />

      {/* Experiência */}
      <Experience />

      {/* projetos */}
      <Portfolio />

      {/* footer */}
      <Footer />

    </div>
  );
}

export default App;
