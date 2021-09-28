import './App.css';
import React from 'react';
import ReactPlayer from 'react-player';

function App() {
  return (
    <div>
      <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
      <ReactPlayer url='https://www.twitch.tv/shroud'
        playing={true} 
        muted={true} 
        
        />
    </div>
  );
}

export default App;
