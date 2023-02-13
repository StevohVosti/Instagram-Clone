import {
  ALL_POST_FAIL,
  ALL_POST_REQUEST,
  ALL_POST_SUCCESS,
  DELETE_POST_FAIL,
  DELETE_POST_REQUEST,
  DELETE_POST_SUCCESS,
  UPDATE_POST_FAIL,
  UPDATE_POST_REQUEST,
  UPDATE_POST_SUCCESS,
  USER_POST_FAIL,
  USER_POST_REQUEST,
  USER_POST_SUCCESS,
  USER_TIMELINE_FAIL,
  USER_TIMELINE_SUCCESS,
} from "../constants/postConstants";
import axios from "axios";
import { USERS_DETAILS_REQUEST } from "../constants/userConstants";

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

export const updatePost = (id, postData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_POST_REQUEST });
    const config = {
      headers: { "Content-Type": "application/json" },
    };
    const { data } = await axios.put(`/api/v1/${id}`, postData, config);

    dispatch({ type: UPDATE_POST_SUCCESS, payload: data.success });
  } catch (error) {
    dispatch({
      type: UPDATE_POST_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_POST_REQUEST });
    const { data } = await axios.delete(`/api/v1/${id}`);

    dispatch({ type: DELETE_POST_SUCCESS, payload: data.success });
  } catch (error) {
    dispatch({
      type: DELETE_POST_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const getUserPost = (userName) => async (dispatch) => {
  try {
    dispatch({ type: USER_POST_REQUEST });
    const { data } = await axios.get(`/api/v1/${userName}`);

    dispatch({ type: USER_POST_SUCCESS, payload: data.post });
  } catch (error) {
    dispatch({ type: USER_POST_FAIL, payload: error.response.data.message });
  }
};

export const getTimeline = (userId) => async (dispatch) => {
  try {
    dispatch({ type: USERS_DETAILS_REQUEST });

    const { data } = await axios.get(`api/v1/${userId}`);

    dispatch({ type: USER_TIMELINE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: USER_TIMELINE_FAIL,
      payload: error.response.data.message,
    });
  }
};
