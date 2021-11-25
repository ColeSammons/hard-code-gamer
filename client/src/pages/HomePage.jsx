import React from 'react';
import Carousel from '../components/Carousel';
import RecommendedHome from '../components/RecommendedHome';


function Home() {
  return (
    <div className="app__main">
        <Carousel />
        <RecommendedHome />
    </div>
  );
}

export default Home;