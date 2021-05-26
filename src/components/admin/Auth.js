import { useDispatch, useSelector } from "react-redux"
import { getQuestionsFromDatabase } from "../../redux/actions"
import { AlertError } from "../AlertError"

export const Auth = () => {
  const dispatch = useDispatch()
  const error = useSelector((state) => state.error)

  const authFetch = async (event) => {
    event.preventDefault()
    const closeModal = document.querySelector(".btn-close")
    const email = event.target.email.value
    const password = event.target.password.value
    dispatch(getQuestionsFromDatabase(email, password, closeModal))
  }

  return (
    <div
      className="modal fade"
      id="auth-modal"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Авторизация
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            <form onSubmit={authFetch}>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Пароль
                </label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              {error.authError && <AlertError text={error.text} />}
              <button type="submit" className="btn btn-primary ">
                Войти
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
