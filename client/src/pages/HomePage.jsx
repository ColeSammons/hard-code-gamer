import React from 'react';
import Sidebar from '../components/Sidebar';
import Carousel from '../components/Carousel';
import { CarouselData } from '../components/CarouselData';
import Title from '../components/Title';
import Recommended from '../components/Recommended';

function Home() {
    return (
        <div class="app__main">
          <Sidebar />
          <div class="main__container">
            <Title />
            <Carousel slides={CarouselData} />
            <Recommended />
          </div>
        </div>
    );
  }
  
  export default Home;