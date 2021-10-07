import React from 'react'
import '../style/Sidebar.css'
import Channel from '../components/Channel'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <h5>YOUR CHANNELS</h5>
                
                <Channel avatar="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1478&q=80"
                    name="Name"/>

                <Channel avatar="https://images.unsplash.com/photo-1605647540924-852290f6b0d5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1737&q=80"
                    name="Name"/>
            
                <Channel avatar="https://images.unsplash.com/photo-1539716947714-3295e1074d33?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
                    name="Name"/>

                <Channel avatar="https://images.unsplash.com/photo-1534488972407-5a4aa1e47d83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1723&q=80"
                    name="Name"/>
                
                <div className="hL"></div>

                <h5>SAVED VIDEOS</h5>
                
                <div className="savedVideo__container">
                    <p className="savedVideo__title">Video Title</p>
                    <span className="savedVideo__trash">
                        <i className="fa fa-trash" id="savedVideo__trash" aria-hidden="true"></i>
                    </span>
                </div>

                <div className="savedVideo__container">
                    <p className="savedVideo__title">Video Title</p>
                    <span className="savedVideo__trash">
                        <i className="fa fa-trash" aria-hidden="true"></i>
                    </span>
                </div>

                <div className="hL"></div>
                
                <button className="donoBtn">DONATION</button>
            </div>
        </div>
    )
}

export default Sidebar
