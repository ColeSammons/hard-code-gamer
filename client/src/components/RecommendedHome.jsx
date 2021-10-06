import React from 'react';
import '../style/RecommendedHome.css';
import ReactPlayer from 'react-player';

const RecommendedHome = () => {
    return (
        <section className="recHome__container" key="rec">
            <h2>
                <span className="tag__video">VIDEOS</span> WE THINK YOU'LL LIKE
            </h2>
            <div className="recHome__videoContainer">
                
                <div className="recHome__content">
                    <ReactPlayer className="video__component" url="https://www.youtube.com/watch?v=wjiI2GjH__A&ab_channel=AlphaNGaming"/>
                    <h3 className="recHome__videoTitle">Tons of New Content! Update on Risk of Rain 2 DLC Expansion</h3>
                </div>

                <div className="recHome__content">
                    <ReactPlayer className="video__component" url="https://www.youtube.com/watch?v=5kkGaF2vs8o&t=531s&ab_channel=fireb0rn"/>
                    <h3 className="recHome__videoTitle">GOD GAMERS – How Hollow Knight Players Defeated The "Unbeatable" Modded Boss</h3>
                </div>

                <div className="recHome__content">
                    <ReactPlayer className="video__component" url="https://www.youtube.com/watch?v=8nhJ6FNYOZ0&t=1s&ab_channel=Insym"/>
                    <h3 className="recHome__videoTitle">This Bleasdale Attic Ghosts was Terrifying - Phasmophobia</h3>
                </div>

                <div className="recHome__content">
                    <ReactPlayer className="video__component" url="https://www.youtube.com/watch?v=KKxohl0GFjk&ab_channel=Polygon"/>
                    <h3 className="recHome__videoTitle">Bloodborne Boss Guide: How to beat Cleric Beast</h3>
                </div>

                <div className="recHome__content">
                    <ReactPlayer className="video__component" url="https://www.youtube.com/watch?v=K6cKWrT3bsQ&ab_channel=Shirrako"/>
                    <h3 className="recHome__videoTitle">DOOM ETERNAL - All Bosses / Boss Fights + Ending (4K 60FPS)</h3>
                </div>

                <div className="recHome__content">
                    <ReactPlayer className="video__component" url="https://www.youtube.com/watch?v=S-V6Z-vWfgc&ab_channel=JustSomeMemes"/>
                    <h3 className="recHome__videoTitle">Raging Brachydios is actually easy, guys.</h3>
                </div>


            </div>
        </section>
    )
}

export default RecommendedHome
