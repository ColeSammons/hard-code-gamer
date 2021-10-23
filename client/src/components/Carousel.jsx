import React, { useState, useEffect } from 'react';
import '../style/Carousel.css';
import arrLeft from '../assets/arrow-l.svg';
import arrRight from '../assets/arrow-r.svg';
import ReactPlayer from 'react-player';
import { getTwToken, getTwTopChannels } from '../utils/API';


const Carousel = () => {
    const [current, setCurrent] = useState(0);
    let [slides, setCarouselData] = useState('');
    const length = slides.length;

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

    useEffect(() => {
        async function handle() {
            let carousel = await getCarousel();
            setCarouselData(carousel);
        };
        handle();
    }, []);

    const nextImg = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    };

    const prevImg = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    };

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    };

    return (
        <section className="carousel__container">
            <div className="carousel">
                <img className="arrowLeft" src={arrLeft} alt="" onClick={prevImg} />
                <img className="arrowRight" src={arrRight} alt="" onClick={nextImg} />
                {slides.map((slide, index) => {
                    return (
                        <div className={index === current ? 'slide active' : 'slide'} key={index}>
                            {index === current && (<ReactPlayer url={`https://www.twitch.tv/${slide.user_login}`} playing={true} muted={true} />)}
                        </div>
                    )
                })}
            </div>
        </section>
    );
};

export default Carousel
