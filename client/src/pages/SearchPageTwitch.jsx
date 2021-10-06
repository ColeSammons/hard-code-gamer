import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Auth from '../utils/auth';
import Sidebar from '../components/Sidebar';
import ReactPlayer from 'react-player';
import '../style/Search.css'
import { getYtSearch, getTwToken, getTwCategoriesByGame } from '../utils/API';
import SearchTwitch from '../components/SearchTwitch'

const SearchPageTwitch = () => {
    return (
        <div className="app__main">
            <Sidebar />
            <div className="main__container">
                <SearchTwitch />
            </div>         
        </div>
    )
}

export default SearchPageTwitch
