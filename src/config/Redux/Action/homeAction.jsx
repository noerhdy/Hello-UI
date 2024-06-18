import axios from "axios";

export const setDataBlog = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:4000/v1/blog/posts")
      .then((result) => {
        const responseApi = result.data;
        dispatch({ type: "UPDATE_DATA_BLOG", payload: responseApi.data });
      })
      .catch((err) => {
        console.log("Error", err);
        dispatch({ type: "FETCH_DATA_FAILURE", payload: err.message });
      });
  };
};
