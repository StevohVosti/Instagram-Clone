import {
  ALL_POST_FAIL,
  ALL_POST_REQUEST,
  ALL_POST_SUCCESS,
} from "../constants/postConstants";
import axios from "axios";


// create post

// export const newPost = () => async (dispatch) => {
//   try {
//     dispatch({type: NEW_POST_REQUEST });

//   } catch(error) {
//     dispatch({
//       type: ALL_POST_FAIL,
//       payload: error.response.data.message,
//     });
//   }
// }
// Get All Post
export const getPost = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_POST_REQUEST });

    const { data } = await axios.get("/api/v1/");

    dispatch({
      type: ALL_POST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ALL_POST_FAIL,
      payload: error.response.data.message,
    });
  }
};
