import React, { useState, useContext } from "react";
import { Context } from "../../context";

export default function Search() {
  const [trackTitle, setTrackTitle] = useState("");
  const { dispatch } = useContext(Context);

  const onChange = e => {
    setTrackTitle(e.target.value);
  };

  const findTracks = async (e, dispatch) => {
    e.preventDefault();

    const response = await fetch(
      `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track=${trackTitle}&page_size=10&page=1&s_track_rating=desc&apikey=${
        process.env.REACT_APP_MM_KEY
      }`
    );

    const data = await response.json();

    dispatch({
      type: "SEARCH_TRACKS",
      payload: data.message.body.track_list
    });
    setTrackTitle("");
  };

  return (
    <div className="card card-body mb-4 p-4">
      <h1 className="display-4 text-center">
        <i className="fas fa-music" /> Seach for a Song
      </h1>
      <p className="lead text-center">Get the lyrics for any song</p>
      <form
        className="container mt-5"
        style={{ maxWidth: "70%" }}
        onSubmit={e => findTracks(e, dispatch)}
      >
        <div className="form-group">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Song title..."
            value={trackTitle}
            onChange={onChange}
          />
        </div>
        <button className="btn btn-primary btn-lg btn-block mb-5">
          Get Track Lyrics
        </button>
      </form>
    </div>
  );
}
