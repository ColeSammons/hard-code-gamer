import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import '../style/Recommended.css';
import { useParams } from 'react-router';
import { getYtRec } from '../utils/API';
import { Link } from 'react-router-dom';


const Recommended = () => {
    let { id } = useParams();
    let [display, setDisplay] = useState('');

    const handleDisplay = async () => {
        try {
            const response = await getYtRec(id);
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
    useEffect(() => {
        async function handle() {
            let temp = await handleDisplay();
            let videos = temp.filter((video) => {
                if(video.snippet) {
                    return true;
                }
                else {
                    return false;
                }
            })
            console.log(videos)
            setDisplay(videos);
        }
        handle();
    }, [id])

    return (
        <div>
            {display ? (
                <section className="recommended" key="rec">
                    <div className="recVideo__container">
                        <h2>
                            <span className="tag__video">VIDEOS</span> WE THINK YOU'LL LIKE
                        </h2>
                        <div className="recVideo__videoContainer">
                            {display.map((item) => (
                                <Link to={`/watchScreen/${item.id.videoId}`} className="video_overlay">
                                   <img src={item.snippet.thumbnails.high.url} alt="youtube-thumnail" />
                                   <h2>{item.snippet.title}</h2>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            ) : (<h1>loading</h1>)}
        </div>
    )
}

export default Recommended

{/* <ReactPlayer url={`https://www.youtube.com/watch?v=${item.id.videoId}`} />
<h2>Link to Video</h2> */}