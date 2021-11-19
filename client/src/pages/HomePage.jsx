import React from 'react';
import Sidebar_v2 from '../components/Sidebar_v2';
import Carousel from '../components/Carousel';
import Title from '../components/Title';
import RecommendedHome from '../components/RecommendedHome';


function Home() {
  return (
    <div className="app__main">
      <Sidebar_v2/>
      <div className="main__color">
        <Title />
        <Carousel />
        <RecommendedHome />
      </div>
    </div>
  );
}

export default Home;