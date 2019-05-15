import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPost = async () => async dispatch => {
  const response = await jsonPlaceholder.get("/post");
  dispatch({ type: "FETCH_POST", payload: response });
};
