import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import Carousel from '../components/Carousel';
import Title from '../components/Title';
import RecommendedHome from '../components/RecommendedHome';


function Home() {
  return (
    <div className="app__main">
      <Sidebar />
      <div className="main__container">
        <Title />
        <Carousel />
        <RecommendedHome />
      </div>
    </div>
  );
}

export default Home;