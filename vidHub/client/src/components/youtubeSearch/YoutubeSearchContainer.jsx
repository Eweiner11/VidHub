import React, { useState } from "react";
import YoutubeSearchItem from "./YoutubeSearchItem";
import { InputGroup, Button, FormControl } from "react-bootstrap";
import Axios from "axios";

function YoutubeSearchContainer({ addToPlayer }) {
  const [searchQuery, changeSearchQuery] = useState("");
  const [searchResults, changeSearchResults] = useState([]);

  function youtubeSearch(e, query) {
    e.preventDefault();
    if (query.length === 0) changeSearchResults([]);

    Axios.get("/youtubeSearch", {
      params: {
        query: query,
      },
    })
      .then(({ data }) => {
        let results = data.items.map((youtubeObj) => {
          return {
            title: youtubeObj.snippet.title,
            thumbnail: youtubeObj.snippet.thumbnails.default.url,
            description: youtubeObj.snippet.description,
            id: youtubeObj.id.videoId,
          };
        });
        changeSearchResults(results);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  
  return (
    <div className="search-container ">
      <form
        onChange={(e) => changeSearchQuery(e.target.value)}
        onSubmit={(e) => {
          youtubeSearch(e, searchQuery);
        }}
      >
        <InputGroup type="submit">
          <FormControl
            placeholder="Youtube Search"
            aria-label="Search"
            aria-describedby="basic-addon2"
          />
          <InputGroup.Append>
            <Button
              id="youtube"
              variant="primary"
              size="sm"
              onClick={() => {}}
            >
              Youtube
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </form>

      {searchResults.map((videoObj) => {
        return (
          <YoutubeSearchItem
            addToPlayer={addToPlayer}
            title={videoObj.title}
            description={videoObj.description}
            thumbnail={videoObj.thumbnail}
            id={videoObj.id}
            key={videoObj.eTag}
          />
        );
      })}
    </div>
  );
}

export default YoutubeSearchContainer;
