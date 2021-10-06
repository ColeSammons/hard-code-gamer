import React from 'react'
import '../style/Sidebar.css'
import Channel from '../components/Channel'
import Avatar from '@material-ui/core/Avatar'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <h5>YOUR CHANNELS</h5>
                
                <Channel avatar="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1478&q=80"
                    name="Name"
                    followers="240"/>

                <Channel avatar="https://images.unsplash.com/photo-1605647540924-852290f6b0d5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1737&q=80"
                    name="Name"
                    followers="100"/>
                <Channel avatar="https://images.unsplash.com/photo-1539716947714-3295e1074d33?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
                    name="Name"
                    followers="440"/>
                <Channel avatar="https://images.unsplash.com/photo-1534488972407-5a4aa1e47d83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1723&q=80"
                    name="Name"
                    followers="940"/>

                <div className="hL"></div>
                <button className="donoBtn">DONATION</button>
            </div>
        </div>
    )
}

export default Sidebar
