import {
  HIDE_ERROR,
  HIDE_LOADING,
  SHOW_ERROR,
  SHOW_LOADING,
  SHOW_AUTH_ERROR,
  HIDE_AUTH_ERROR,
} from "./types";

const initialState = {
  showError: false,
  showLoading: false,
  authError: false,
};

export const errorReduser = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_ERROR:
      return {
        ...state,
        showError: true,
        text: action.payload,
      };
    case HIDE_ERROR:
      return { ...state, showError: false };
    case SHOW_LOADING:
      return { ...state, showLoading: true };
    case HIDE_LOADING:
      return { ...state, showLoading: false };
    case SHOW_AUTH_ERROR:
      return { ...state, authError: true, text: action.payload };
    case HIDE_AUTH_ERROR:
      return { ...state, authError: false };

    default:
      return state;
  }
};
