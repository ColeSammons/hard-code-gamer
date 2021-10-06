import React from 'react'
import { Avatar } from '@material-ui/core'
import '../style/StreamerResults.css'

const StreamerResults = () => {
    return (
        <div className="stream__results__container">

            <div className="stream__results">
                <img src="https://static-cdn.jtvnw.net/previews-ttv/live_user_sajam-440x248.jpg" alt="stream-thumbnail" />
                <div className="stream__info__container">
                    <div className="stream__info__left">
                        <Avatar className="avatar"></Avatar>
                    </div>
                    <div className="stream__info__right">
                        <h2 className="stream__title">Sajam: !vote, I Missed Good Rollback (PC)</h2>
                        <p className="streamer__name">Sajam</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default StreamerResults
