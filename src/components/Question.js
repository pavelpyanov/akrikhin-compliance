
export const Question = (props) => {
  const date = new Date(props.date)
  const time = date.toLocaleTimeString()
  const mounth = date.toLocaleDateString()
  
  return (
    <div className="card mb-1">
      <p className="card-header">Отправлено {mounth} в {time}</p>
      <div className="card-body">
        <p className="card-text">
          {props.text}
        </p>
      </div>
    </div>
  )
}
