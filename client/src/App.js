import './App.css';
import GetAPI from './pages/API';
import Navbar from './components/Navbar.jsx'
import Sidebar from './components/Sidebar';
import Carousel from './components/Carousel';
import { CarouselData } from './components/CarouselData';
import Title from './components/Title';
import Recommended from './components/Recommended';

function App() {
  return (
    <div className='app'>
      <Navbar />
      <div class="app__main">
        <Sidebar />
        <div class="main__container">
          <Title />
          <Carousel slides={CarouselData} />
          <Recommended />
        </div>
      </div>
    </div>
  );
}

export default App;
