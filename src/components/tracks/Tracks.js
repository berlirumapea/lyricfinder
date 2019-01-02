import React, { useContext } from "react";
import { Context } from "../../context";
import Track from "./Track";

const Tracks = () => {
	const { state } = useContext(Context);
	
  if (!state.track_list.length) {
    return <h4 className="text-center">Loading...</h4>;
  } else {
    return (
      <React.Fragment>
        <h4 className="text-center mb-4">{state.heading}</h4>
        <div className="row">
          {state.track_list.map(item => (
            <Track key={item.track.track_id} track={item.track} />
          ))}
        </div>
      </React.Fragment>
    );
	}
};

export default Tracks;
