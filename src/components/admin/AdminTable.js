import { useDispatch, useSelector } from "react-redux"
import { changeDone } from "../../redux/actions"
import { Loading } from "../Loading"

export const AdminTable = () => {
  const error = useSelector((state) => state.error)
  const questions = useSelector((state) => state.admin.serverQuestions)
  const filter = useSelector((state) => state.admin.filter)
  const getDone = (qDone, fDone) => {
    if (fDone === false) {
      return true
    } else {
      return qDone === fDone
    }
  }
  const filteredQuestions = questions.filter((q) => {
    return (
      q.name.trim().toLowerCase().includes(filter.name.toLowerCase()) &&
      q.email.trim().toLowerCase().includes(filter.email.toLowerCase()) &&
      q.text.trim().toLowerCase().includes(filter.text.toLowerCase()) &&
      q.date.includes(filter.date) &&
      getDone(q.done, filter.done)
    )
  })
  const dispatch = useDispatch()
  const doneHandler = (event) => {
    event.preventDefault()
    const checked = event.target.checked
    dispatch(
      changeDone(event.target.id, checked)
    )
  }
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Имя</th>
          <th scope="col">Email</th>
          <th scope="col">Дата</th>
          <th scope="col">Вопрос</th>
          <th scope="col">Ответ готов</th>
        </tr>
      </thead>
      <tbody>
        {filteredQuestions.map((question, index) => {
          const classList = question.done ? "table-success" : ""
          return (
            <tr key={question.key} id="question-row" className={classList}>
              <th scope="row">{index}</th>
              <td>{question.name || "Не указано"}</td>
              <td>{question.email || "Не указано"}</td>
              <td>{new Date(question.date).toLocaleDateString()}</td>
              <td>{question.text}</td>
              <td>
                <div className="d-flex justify-content-center align-items-center">
                  <input
                    type="checkbox"
                    id={question.key}
                    checked={question.done}
                    onInput={doneHandler}
                    onChange={() => true} // Fix me
                  />
                  {error.showLoading && (
                    <Loading
                      size={{
                        width: "1rem",
                        height: "1rem",
                      }}
                    />
                  )}
                </div>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
