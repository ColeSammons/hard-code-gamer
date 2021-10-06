import React from "react";
import "../style/SearchTwitch.css";
import { Link } from "react-router-dom";

const SearchPageTwitch = ({ item }) => {
    let letter = item.box_art_url.split('-52x72.jpg')[0];
    let newURL = `${letter}-200x300.jpg`;

    return (
        <Link to={`/streamResults/${item.id}`}>
            <div className="twitch__results">
                <div className="twitch__card">
                    <img className="card__image" src={newURL} />
                    <h5 className="category__title">{item.name}</h5>
                </div>
            </div>
        </Link>

    );
}

export default SearchPageTwitch;
