import logo from './logo.svg';
import './App.css';
import ButtonValidation from './components/ButtonValidation';
import CardClub from './components/CardClub';
import Newsletter from './components/Newsletter';
import Presentation from './components/Presentation';
import Events from './components/Events';
import Mapinfos from './components/Mapinfos';
import YoutubeEmbed from './components/YoutubeEmbed';



function App() {
  return (
    

    <div className="App">
      
      <CardClub />
      <Newsletter />
      <Presentation />
      <Events />
      
      <Mapinfos />
      <ButtonValidation />
      <YoutubeEmbed />
      
    </div>
  );
}

export default App;
