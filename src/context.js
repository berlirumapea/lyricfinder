import React, { useEffect } from "react";
import { produce } from "immer";
import { reducer } from "./reducer";

export const Context = React.createContext({});

const useImmerReducer = (reducer, initialState) =>
  React.useReducer(produce(reducer), initialState);

export function Provider(props) {
  const [state, dispatch] = useImmerReducer(reducer, {
    track_list: [],
    heading: "Top 10 Tracks"
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=it&f_has_lyrics=1&apikey=${
          process.env.REACT_APP_MM_KEY
        }`
      );
      const data = await response.json();
      dispatch({
        type: "FETCH_TRACKS",
        payload: data.message.body.track_list
      });
    };
    fetchData();
  }, []);

  return (
    <Context.Provider value={{ state, dispatch }}>
      {props.children}
    </Context.Provider>
  );
}

export const Consumer = Context.Consumer;
