import React from 'react';
import '../style/WatchScreen.css';

const WatchScreen = () => {
    return (
        <div className="watchScreen__container">
            <iframe className="watchScreen__player"
                src="https://www.youtube.com/embed/tgbNymZ7vqY"
                frameBorder="0"
                title="placeholder"
                allowFullScreen
                width="100%"
                height="100%"
            ></iframe>
        </div>
    )
}

export default WatchScreen
