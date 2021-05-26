import { useDispatch, useSelector } from "react-redux"

import { Button, Form } from "react-bootstrap"
import { AlertError } from './AlertError'
import { Loading } from './Loading'
import { sendQuestionToDataBase, showError } from "../redux/actions"

export const QuestionForm = () => {
  const dispatch = useDispatch()
  const error = useSelector( (state) => state.error )
  const submitHandler = (event) => {
    event.preventDefault()
    const question = {}
    for (let index = 0; index < event.target.length; index++) {
      const name = event.target[index].name
      const value = event.target[index].value.trim()
      if (name) {
        if (name === "checkWord" && !value) {
          dispatch(showError('Вы не заполнили проверочное слово. Оно указано в сопроводительном письме к проекту'))
          return false
        }
        if (name === "text" && value.length < 10) {
          dispatch(showError('Заполните поле с Вашим вопросом'))
          return false
        }
        question[name] = value || ''
      }
    }
    dispatch(sendQuestionToDataBase(question, event.target))
  }

  return (
    <Form onSubmit={submitHandler}>
      {error.showError && <AlertError text={error.text}/>}
      {error.showLoading && <Loading/>}
      <Form.Group className="mb-2" controlId="formBasicName">
        <Form.Label>Ваше имя</Form.Label>
        <Form.Control type="text" placeholder="Введите имя" name="name" />
        <Form.Text className="text-muted">
          Имя вводить необязательно, если хотите задать вопрос анонимно
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-2" controlId="formBasicEmail">
        <Form.Label>Ваш Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Введите ваш Email"
          name="email"
        />
        <Form.Text className="text-muted">
          Email вводить необязательно, если хотите задать вопрос анонимно
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-2" controlId="formBasicPassword">
        <Form.Label>Проверочное слово</Form.Label>
        <Form.Control
          type="text"
          placeholder="Введите проверочное слово"
          name="checkword"
          required
        />
        <Form.Text className="text-muted">
          Проверочное слово указанно в письме с информацией о проекте
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-2" controlId="formBasicQuestion">
        <Form.Label>Введите ваш вопрос</Form.Label>
        <Form.Control
          className="t-area"
          as="textarea"
          aria-label="Текст вопроса"
          minLength="10"
          name="text"
          required
        />
      </Form.Group>

      <Button className="mb-2" variant="primary" type="submit">
        Отправить вопрос
      </Button>
    </Form>
  )
}
