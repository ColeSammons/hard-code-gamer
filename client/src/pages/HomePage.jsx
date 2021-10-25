import React from 'react';
import Sidebar from '../components/Sidebar';
import Sidebar_v2 from './Sidebar_v2';
import Carousel from '../components/Carousel';
import Title from '../components/Title';
import RecommendedHome from '../components/RecommendedHome';


function Home() {
  return (
    <div className="app__main">
      <Sidebar />
      {/* <Sidebar_v2/> */}
      <div className="main__container">
        <Title />
        <Carousel />
        <RecommendedHome />
      </div>
    </div>
  );
}

export default Home;