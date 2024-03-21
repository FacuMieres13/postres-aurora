
import './App.css';
import { Banner } from './components/Banner';
import { Header } from './components/Header';
import { Nosotros } from './components/Nosotros';
import { Trabajos } from './components/Trabajos';


function App() {
  return (
    <div>
        <Header />
        <Banner />
        <Nosotros />
        <Trabajos />
    </div>

  );
}

export default App;
