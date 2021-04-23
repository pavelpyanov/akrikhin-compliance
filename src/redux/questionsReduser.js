import { ADD_NEW_OUESTION } from './types'

const initialState = JSON.parse(localStorage.getItem('questions')) || []

export const questionsReduser = ( state = initialState, action ) => {
  switch (action.type) {
    case ADD_NEW_OUESTION:
      return state.concat(action.payload)
        
    default:
      return state
  }
  
}