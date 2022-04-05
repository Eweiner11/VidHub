import Axios from "axios";
import React, { useState } from "react";

const FavoritesListItem = ({
  idx,
  link,
  removeFavorite,
  addFavoriteToPlayer,
  numberOfVids,
}) => {
  const clickLink = (linkItem) => {
    if (numberOfVids !== 4) {
      addFavoriteToPlayer(linkItem);
    }
  };
  return (
    <div
      className="FavLinks"
      onClick={() => {
        clickLink(link.link);
      }}
    >
      <div className="favorite">{link.name}</div>
      <div
        className="removeFavorite"
        onClick={(e) => {
          e.stopPropagation();
          removeFavorite(idx);
          Axios.delete(`/deleteFavorites?link=${link.link}`)
            .catch((err) => {
              console.log(err);
            })
            .catch((err) => {
              console.log(err);
            });
        }}
      >
        ❌
      </div>
    </div>
  );
};

export default FavoritesListItem;
