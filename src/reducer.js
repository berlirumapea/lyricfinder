export const reducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_TRACKS":
      state.track_list = action.payload;
      return;
    case "FETCH_TRACKS":
      state.track_list = action.payload;
      return;
    default:
      return state;
  }
};
