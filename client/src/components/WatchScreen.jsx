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
            <div className="watchVideo__info__left">
                <h2 className="watchVideo__title">Title</h2>
                <div className="views__publish">
                    <p className="watchVideo__views">142,595,310 views</p>
                    <i>•</i>
                    <p className="publish">Nov 23, 2009</p>
                </div>
            </div>
            <div className="watchVideo__info__right">
                <div className="btnContainer">
                    <button className="saveButton">SAVE VIDEO</button>
                    <button className="saveButton">SAVE CHANNEL</button>
                </div>
            </div>
            <div className="divider__line"></div>
        </div>
    )
}

export default WatchScreen
