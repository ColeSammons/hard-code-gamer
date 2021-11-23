import React from 'react';
import Carousel from '../components/Carousel';
import Title from '../components/Title';
import RecommendedHome from '../components/RecommendedHome';


function Home() {
  return (
    <div className="app__main">
      <div className="main__color">
        <Title />
        <Carousel />
        <RecommendedHome />
      </div>
    </div>
  );
}

export default Home;