import './App.css';
import Faq from './components/Faq';
import Figure from './components/Figure';
import Footer from './components/Footer';
import Forecasting from './components/Forecasting';
import Hero from './components/Hero';
import Platform from './components/Platform';
import Rating from './components/Rating';

function App() {
  return (
    <>
      <Hero />
      <Platform />
      <Forecasting />
      <Rating />
      <Faq />
      <Figure />
      <Footer />
    </>
  );
}

export default App;
