import logo from './logo.svg';
import Sidebar from './components.js/Sidebar';
import Reviews from './components.js/Reviews';
import Rating from './components.js/Rating';
import Analysis from './components.js/Analysis';
import Website from './components.js/Website'
import './App.css';
import './style.css';

function App() {
  return (
    <div className= "App">
      <Sidebar/>
      <Reviews/>
      <Rating/>
      <Analysis/>
      <Website/>
    </div>
  );
}

export default App;
