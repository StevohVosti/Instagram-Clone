import {
  ALL_POST_FAIL,
  ALL_POST_REQUEST,
  ALL_POST_SUCCESS,
  CLEAR_ERRORS,
  DELETE_POST_FAIL,
  DELETE_POST_REQUEST,
  DELETE_POST_SUCCESS,
  NEW_POST_FAIL,
  NEW_POST_REQUEST,
  NEW_POST_SUCCESS,
  UPDATE_POST_FAIL,
  UPDATE_POST_REQUEST,
  UPDATE_POST_SUCCESS,
  USER_POST_FAIL,
  USER_POST_REQUEST,
  USER_POST_SUCCESS,
  USER_TIMELINE_FAIL,
  USER_TIMELINE_REQUEST,
  USER_TIMELINE_SUCCESS,
} from "../constants/postConstants";

// Get post
export const postReducer = (state = { posts: {} }, action) => {
  switch (action.type) {
    case ALL_POST_REQUEST:
      return {
        loading: true,
        posts: [],
      };

    case ALL_POST_SUCCESS:
      return {
        loading: false,
        posts: action.payload,
      };

    case ALL_POST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

// Create post rerducer

export const newPostReducer = (state = { post: {} }, action) => {
  switch (action.type) {
    case NEW_POST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case NEW_POST_SUCCESS:
      return {
        loading: false,
        success: action.payload.success,
        posts: action.payload.posts,
      };
    case NEW_POST_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

// Update Post

export const PostReducers = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_POST_REQUEST:
      case DELETE_POST_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case UPDATE_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        isUpdated: action.payload,
      };

      case DELETE_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: action.payload,
      };

    case UPDATE_POST_FAIL:
      case DELETE_POST_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

// User Post
export const userPostReducers = (state = {post: []}, action) => {
  switch(action.type) {
    case USER_POST_REQUEST:
      return {
        loading: true,
      }

      case USER_POST_SUCCESS: 
      return {
        loading: false,
        post: action.payload,
      }

      case USER_POST_FAIL: 
      return {
        loading: false,
        error: action.payload,
      }

      case CLEAR_ERRORS:
        return {
          ...state,
          error: null,
        };
      default:
        return state;
  }
}


// Get user Timeline

export const getTimeline = (state = {timeline: {}}, action) => {
  switch(action.type){
    case USER_TIMELINE_REQUEST: 
    return {
      ...state,
      loading: true
    }

    case USER_TIMELINE_SUCCESS: 
      return {
        ...state,
        loading: false,
        timeline: action.payload,
      }

    case USER_TIMELINE_FAIL:
      return {
        loading: false,
        error: action.payload,
      }

    case CLEAR_ERRORS: 
      return {
        ...state,
        error: null,
      };
      default: 
        return state;      
  }
}
