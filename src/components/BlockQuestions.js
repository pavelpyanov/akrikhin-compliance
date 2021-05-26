import { useSelector } from "react-redux"
import { Question } from "./Question"

export const BlockQuestions = () => {
  const questionsList = useSelector((state) => state.questions)

  if (!questionsList.length) {
    return (
      <div className="mt-3 mb-3">
        <h3>Вы пока не задали вопрос...</h3>
      </div>
    )
  }

  return (
    <div className="mt-3 mb-3">
      <h3>Заданные вопросы</h3>
      {questionsList.map((q) => {
        return <Question text={q.text} date={q.date} key={q.id} />
      })}
    </div>
  )
}
