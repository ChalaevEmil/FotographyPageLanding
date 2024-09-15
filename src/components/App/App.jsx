import './App.css';
import Header from '../Header/Header';
import Introduction from '../Introduction/Introduction';
import Services from '../Services/Services';
import Preset from '../Preset/Preset';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

function App() {
  return (
    <div className="app">
      <Header/>
      <Introduction/>
      <Services/>
      <Preset/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;