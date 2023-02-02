import React, { useState, useEffect } from 'react';
import '../style/Carousel.css';
import ReactPlayer from 'react-player';
import { getTwToken, getTwTopChannels } from '../utils/API';
import { Link } from 'react-router-dom';

const Carousel = () => {
    const [slides, setCarouselData] = useState('');
    const [stream, setStream] = useState('');

    useEffect(() => {
        const getCarousel = async () => {
            try {
                const response = await getTwToken();
                if (!response.ok) {
                    throw new Error("something went wrong!");
                };
                const { access_token } = await response.json();
                try {
                    const games = await getTwTopChannels(access_token);
                    const data = await games.json();
                    return data.data;
                }
                catch (error) {
                    console.error(error);
                };
            }
            catch (error) {
                console.error(error);
            };
        };

        async function handle() {
            let carousel = await getCarousel();
            setCarouselData(carousel);
            setStream(carousel[0].user_login);
        };
        handle();
    }, []);

    return (
        <>
            {slides ? (
                <>
                    <div className="car-wrapper">
                        <ReactPlayer url={`https://www.twitch.tv/${stream}`} playing={true} muted={true} width="100%" height="100%" className="carousel-player" />
                    </div>
                    <div className="car-nav">
                        <div className={`car-button ${stream === slides[0].user_login ? "car-button-active" : ""}`} onClick={() => setStream(slides[0].user_login)}></div>
                        <div className={`car-button ${stream === slides[1].user_login ? "car-button-active" : ""}`} onClick={() => setStream(slides[1].user_login)}></div>
                        <div className={`car-button ${stream === slides[2].user_login ? "car-button-active" : ""}`} onClick={() => setStream(slides[2].user_login)}></div>
                    </div>
                    <div className="car-stream">
                        <Link to={`/watchTwitch/${stream}`} className="car-stream-link">
                            Watch Streamer
                        </Link>
                    </div>
                </>
            ) : (null)}
        </>
    );
};

export default Carousel;
