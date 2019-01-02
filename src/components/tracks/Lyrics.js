import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Lyrics(props) {
  const [track, setTrack] = useState({});
  const [lyrics, setLyrics] = useState({});

  useEffect(() => {
    fetch(
      `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${
        props.match.params.id
      }&apikey=${process.env.REACT_APP_MM_KEY}`
    )
      .then(res => res.json())
      .then(data => {
        setLyrics(data.message.body.lyrics);
        return fetch(
          `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.get?track_id=${
            props.match.params.id
          }&apikey=${process.env.REACT_APP_MM_KEY}`
        );
      })
      .then(res => res.json())
      .then(data => setTrack(data.message.body.track))
      .catch(e => console.log(e));
  }, []);

  return (
    <React.Fragment>
      <h3>{track.track_name}</h3>
      <h5>{track.artist_name}</h5>
      <p>{lyrics.lyrics_body}</p>

      <div className="mb-3">
        <Link to="/" className="btn btn-dark btn-sm mb-4">
          Go Back
        </Link>
      </div>
    </React.Fragment>
  );
}