import React, { useEffect, useState } from 'react';
import '../style/RecommendedHome.css';
import { getYtSearch } from '../utils/API';
import { Link } from 'react-router-dom';

const RecommendedHome = () => {
    let [display, setDisplay] = useState('');
// change.........
    useEffect(async () => {
        const handleDisplay = async () => {
            try {
                const response = await getYtSearch('Dark Souls');
                if (!response.ok) {
                    throw new Error;
                };
                let { items } = await response.json();
                return items;
            }
            catch (error) {
                console.error(error);
            };
        };
        let tempItems = await handleDisplay();
        setDisplay(tempItems);
    }, []);

    return (
        <section className="container" key="rec">
            <h2 className="text-center">
                <span className="tag__video">VIDEOS</span> WE THINK YOU'LL LIKE
            </h2>
            <div className="row justify-content-xl-around justify-content-lg-center">
                {display ? (
                    <>
                        {display.map((data) => {
                            return (
                                <Link to={`/watchScreen/${data.id.videoId}`} className="col-xl-4 col-lg-5 text-center rec-link">
                                    <img src={data.snippet.thumbnails.medium.url} alt="rec-video" />
                                    <h4 className="recHome__videoTitle text-center mx-auto">{data.snippet.title}</h4>
                                </Link>
                            )
                        })}
                    </>
                ) : (<h1>loading</h1>)}
            </div>
        </section>
        
    )
}

export default RecommendedHome;