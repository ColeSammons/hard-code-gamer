import React, { useEffect, useState } from 'react';
import '../style/RecommendedHome.css';
import { getYtSearch } from '../utils/API';

const RecommendedHome = () => {
    let [display, setDisplay] = useState('');


    const handleDisplay = async () => {
        try {
            const response = await getYtSearch('fortnite');
            if (!response.ok) {
                throw new Error;
            };
            let { items } = await response.json();
            console.log(items);
            return items;
        }
        catch (error) {
            console.error(error);
        };
    };

    useEffect(() => {
        async function handle() {
            const temp = await handleDisplay();
            setDisplay(temp);
        };
        handle();
    }, []);

    return (
        <section className="container" key="rec">
            <h2>
                <span className="tag__video">VIDEOS</span> WE THINK YOU'LL LIKE
            </h2>
            <div className="row justify-content-xl-around justify-content-lg-center">
                {/* {display ? (
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <img src={display[0].snippet.thumbnails.high.url} alt="rec-video" />
                        <img src="https://i.ytimg.com/vi/BjYVcz2FyjE/hqdefault.jpg" alt="rec-video" />
                        <h3 className="recHome__videoTitle text-center">Tons of New Content! Update on Risk of Rain 2 DLC Expansion</h3>
                    </div>
                 ) : (<h1>loading</h1>)} */}
                <div className="col-xl-4 col-lg-5 text-center">
                    <img src="https://i.ytimg.com/vi/BjYVcz2FyjE/mqdefault.jpg" alt="rec-video" />
                    <h4 className="recHome__videoTitle text-center mx-auto">Tons of New Content! Update on Risk of Rain 2 DLC Expansion</h4>
                </div>
                <div className="col-xl-4 col-lg-5 text-center">
                    <img src="https://i.ytimg.com/vi/BjYVcz2FyjE/mqdefault.jpg" alt="rec-video" />
                    <h4 className="recHome__videoTitle text-center mx-auto">Tons of New Content! Update on Risk of Rain 2 DLC Expansion</h4>
                </div>
                <div className="col-xl-4 col-lg-5 text-center">
                    <img src="https://i.ytimg.com/vi/BjYVcz2FyjE/mqdefault.jpg" alt="rec-video" />
                    <h4 className="recHome__videoTitle text-center mx-auto">Tons of New Content! Update on Risk of Rain 2 DLC Expansion</h4>
                </div>
                <div className="col-xl-4 col-lg-5 text-center">
                    <img src="https://i.ytimg.com/vi/BjYVcz2FyjE/mqdefault.jpg" alt="rec-video" />
                    <h4 className="recHome__videoTitle text-center mx-auto">Tons of New Content! Update on Risk of Rain 2 DLC Expansion</h4>
                </div>
                <div className="col-xl-4 col-lg-5 text-center">
                    <img src="https://i.ytimg.com/vi/BjYVcz2FyjE/mqdefault.jpg" alt="rec-video" />
                    <h4 className="recHome__videoTitle text-center mx-auto">Tons of New Content! Update on Risk of Rain 2 DLC Expansion</h4>
                </div>
            </div>
        </section>
    )
}

export default RecommendedHome;

// const RecommendedHome = () => {
//     return (
//         <section className="recHome__container" key="rec">
//             <h2>
//                 <span className="tag__video">VIDEOS</span> WE THINK YOU'LL LIKE
//             </h2>
//             <div className="recHome__videoContainer">

//                 <div className="recHome__content">
//                     <ReactPlayer className="video__component" url="https://www.youtube.com/watch?v=wjiI2GjH__A&ab_channel=AlphaNGaming"/>
//                     <h3 className="recHome__videoTitle">Tons of New Content! Update on Risk of Rain 2 DLC Expansion</h3>
//                 </div>

//                 <div className="recHome__content">
//                     <ReactPlayer className="video__component" url="https://www.youtube.com/watch?v=5kkGaF2vs8o&t=531s&ab_channel=fireb0rn"/>
//                     <h3 className="recHome__videoTitle">GOD GAMERS – How Hollow Knight Players Defeated The "Unbeatable" Modded Boss</h3>
//                 </div>

//                 <div className="recHome__content">
//                     <ReactPlayer className="video__component" url="https://www.youtube.com/watch?v=8nhJ6FNYOZ0&t=1s&ab_channel=Insym"/>
//                     <h3 className="recHome__videoTitle">This Bleasdale Attic Ghosts was Terrifying - Phasmophobia</h3>
//                 </div>

//                 <div className="recHome__content">
//                     <ReactPlayer className="video__component" url="https://www.youtube.com/watch?v=KKxohl0GFjk&ab_channel=Polygon"/>
//                     <h3 className="recHome__videoTitle">Bloodborne Boss Guide: How to beat Cleric Beast</h3>
//                 </div>

//                 <div className="recHome__content">
//                     <ReactPlayer className="video__component" url="https://www.youtube.com/watch?v=K6cKWrT3bsQ&ab_channel=Shirrako"/>
//                     <h3 className="recHome__videoTitle">DOOM ETERNAL - All Bosses / Boss Fights + Ending (4K 60FPS)</h3>
//                 </div>

//                 <div className="recHome__content">
//                     <ReactPlayer className="video__component" url="https://www.youtube.com/watch?v=S-V6Z-vWfgc&ab_channel=JustSomeMemes"/>
//                     <h3 className="recHome__videoTitle">Raging Brachydios is actually easy, guys.</h3>
//                 </div>


//             </div>
//         </section>
//     )
// }
