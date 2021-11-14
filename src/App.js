import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import { useState } from 'react';
import foto from './images/port.jpg';

function App() {
  const projeto1 = {
    tilte: 'Projeto 1',
    language: 'React',
    image: foto
  }
  const projeto2 = {
    tilte: 'Projeto 2',
    language: 'Typescript',
    image: foto
  }
  const projeto3 = {
    tilte: 'Projeto 3',
    language: 'Node',
    image: foto
  }
  
  const [projetos, setProjetos] = useState([projeto1, projeto2, projeto3]);
  return (
    <div className="App">
      {/* Header */}
      <Header />

      {/* perfil */}
      <Hero />

      {/* projetos */}
      <div className='flex'>
        {projetos.map(item => (
          <div className='mx-5 px-5'>
            <Portfolio title={item.tilte} language={item.language} image={item.image} />          
          </div>
        ))}
      </div>

      {/* footer */}
      <Footer />

    </div>
  );
}

export default App;
