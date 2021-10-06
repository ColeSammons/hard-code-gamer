import React from 'react'
import ReactPlayer from 'react-player';
import '../style/Recommended.css'

const Recommended = () => {
    return (
        <section className="recommended">
            <div className="recVideo__container">
                <h2>
                    <span className="tag__video">VIDEOS</span> WE THINK YOU'LL LIKE
                </h2>
                <div className="recVideo__videoContainer">
                    <ReactPlayer
                        url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
                    />
                    <ReactPlayer 
                        url='https://www.youtube.com/watch?v=o_l4Ab5FRwM&list=RDo_l4Ab5FRwM&start_radio=1&ab_channel=5FDPVEVO'
                    />
                    <ReactPlayer 
                        url='https://www.youtube.com/watch?v=Xu7jY3OkvVY&t=5128s&ab_channel=GamesDoneQuick'
                    />
                    <ReactPlayer
                        url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
                    />
                    <ReactPlayer 
                        url='https://www.youtube.com/watch?v=o_l4Ab5FRwM&list=RDo_l4Ab5FRwM&start_radio=1&ab_channel=5FDPVEVO'
                    />
                    <ReactPlayer 
                        url='https://www.youtube.com/watch?v=Xu7jY3OkvVY&t=5128s&ab_channel=GamesDoneQuick'
                    />
                </div>
            </div>
        </section>
    )
}

export default Recommended
