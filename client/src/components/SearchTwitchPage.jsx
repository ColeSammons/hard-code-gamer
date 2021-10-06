import React from "react";
import "../style/SearchTwitch.css";
// import { Link } from "react-router-dom";

const SearchPageTwitch = ({ item }) => {
  let letter = item.box_art_url.split('-52x72.jpg')[0];
  let newURL = `${letter}-200x300.jpg`;
  return (
    <>
      <img className="card__image" src={newURL} />
      <div className="category__details">
        <h5 className="category__title">{item.name}</h5>
      </div>
    </>
  );
}

export default SearchPageTwitch;
