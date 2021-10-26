import React from "react";
import "../style/SearchTwitch.css";
import { Link } from "react-router-dom";

const SearchPageTwitch = ({ item }) => {
    let letter = item.box_art_url.split('-52x72.jpg')[0];
    let newURL = `${letter}-200x300.jpg`;

    return (
        <div className="col-xl-2 col-lg-3 col-sm-4 col-12 text-center card__link pt-3">
                <Link to={`/streamResults/${item.id}`} className="twitch__card">
                    <img className="card__image" src={newURL} />
                    <h5 className="category__title my-1">{item.name}</h5>
                </Link>
        </div>

    );
}

export default SearchPageTwitch;
