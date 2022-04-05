import React, { useState } from "react";

function LinkInput({ addToPlayer }) {
  const [searchQuery, changeSearchQuery] = useState("");

  const onChange = (e) => {
    let newQuery = e.target.value;
    changeSearchQuery(newQuery);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    addToPlayer(searchQuery);
    changeSearchQuery("");
  };
  return (
    LinkInputView(onChange, onSubmit, searchQuery)
  );
}

export default LinkInput;

function LinkInputView(onChange, onSubmit, searchQuery) {
    return <form
        onChange={(e) => onChange(e)}
        onSubmit={(e) => onSubmit(e)}
        class="input-group mb-3 "
        id="link-input"
    >
        <div class="input-group mb-3 " id="link-input">
            <input
                type="text"
                class="form-control"
                placeholder="Add Youtube or Twitch link"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                value={searchQuery} />
        </div>
    </form>;
}

