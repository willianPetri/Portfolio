import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';


function App() {

  
  return (
    <div className="App">
      {/* Header */}
      <Header />

      {/* perfil */}
      <Hero />

      {/* projetos */}
      <Portfolio />

      {/* footer */}
      <Footer />

    </div>
  );
}

export default App;
