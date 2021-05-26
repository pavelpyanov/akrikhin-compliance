import {
  ADMIN_VIEW,
  CHANGE_DONE,
  CHANGE_FILTER,
  CLEAR_FILTER,
  QUESTIONS_FROM_DATABASE,
  USER_VIEW,
} from "./types"

const initialState = {
  serverQuestions: [],
  view: "user",
  filter: {
    name: "",
    email: "",
    date: "",
    done: false,
    text: "",
  },
}
export const adminReduser = (state = initialState, action) => {
  switch (action.type) {
    case QUESTIONS_FROM_DATABASE:
      return {
        ...state,
        serverQuestions: action.payload,
      }
    case USER_VIEW:
      return { ...state, view: "user" }
    case ADMIN_VIEW:
      return { ...state, view: "admin" }
    case CHANGE_DONE:
      const newServerQuestions = state.serverQuestions.map((q) => {
        if (q.key === action.payload) {
          return {
            ...q,
            done: !q.done,
          }
        }
        return q
      })
      return {
        ...state,
        serverQuestions: [...newServerQuestions],
      }
    case CHANGE_FILTER:
      return {
        ...state,
        filter: {
          ...state.filter,
          [action.payload.name]: action.payload.value,
        },
      }
    case CLEAR_FILTER:
      return {
        ...state,
        filter: {
          name: "",
          email: "",
          date: "",
          done: false,
          text: "",
        },
      }
    default:
      return state
  }
}
