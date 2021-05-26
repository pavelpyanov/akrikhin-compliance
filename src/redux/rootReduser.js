import { combineReducers } from "redux"
import { errorReduser } from "./errorReduser"
import { questionsReduser } from "./questionsReduser"
import { adminReduser } from "./adminReduser"

export const rootReduser = combineReducers({
  questions: questionsReduser,
  error: errorReduser,
  admin: adminReduser,
})