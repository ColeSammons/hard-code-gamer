import React, {useState} from 'react';
import '../style/Carousel.css';
import { CarouselData } from './CarouselData';
import arrLeft from '../assets/arrow-l.svg';
import arrRight from '../assets/arrow-r.svg';
import ReactPlayer from 'react-player';

const Carousel = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextImg = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    };

    const prevImg = () => {
        setCurrent(current === 0 ? length -1 : current - 1)
    };
    
    if(!Array.isArray(slides) || slides.length <= 0) {
        return null;
    };
    
    return (
        <section className="carousel__container">
            <div className="carousel">
                <img className="arrowLeft" src={arrLeft} alt="" onClick={prevImg}/>
                <img className="arrowRight" src={arrRight} alt="" onClick={nextImg}/>
                    {CarouselData.map((slide, index) => {
                        return (
                            <div className={index === current ? 'slide active' : 'slide'} key={index}>
                                {index === current && (<ReactPlayer url={slide.video}  playing={true} muted={true}/>)}
                            </div>
                        )
                    })}
            </div>
        </section>
    );
};

export default Carousel
