import { useDispatch } from "react-redux";
import { changeFilter, clearFilter } from "../../redux/actions";

export const Filter = () => {
  const dispatch = useDispatch()
  const filterHandler = (event) => {
    const name = event.target.name;
    const value = (name === 'done')
      ? event.target.checked
      : event.target.value;
    dispatch(changeFilter(name, value))
  }
  return (
    <div className="accordion" id="accordionFilter">
      <div className="accordion-item">
        <h2 className="accordion-header bg-red" id="headingOne">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="false"
            aria-controls="collapseOne"
          >
            Фильтровать
          </button>
        </h2>
        <div
          id="collapseOne"
          className="accordion-collapse collapse"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionFilter"
        >
          <div className="accordion-body">
            <form>
              <div className="row">
                <div className="col">
                  <label htmlFor="name">По имени</label>
                  <input name="name" type="text" className="form-control" onInput={filterHandler}/>
                </div>
                <div className="col">
                  <label htmlFor="email">По email</label>
                  <input name="email" type="text" className="form-control" onInput={filterHandler}/>
                </div>
                <div className="col">
                  <label htmlFor="date">По дате</label>
                  <input name="date" type="date" className="form-control" onInput={filterHandler}/>
                </div>
              </div>
              <div className="row d-flex align-items-center">
                <div className="col">
                  <label htmlFor="text">По вопросу</label>
                  <input name="text" type="text" className="form-control" onInput={filterHandler}/>
                </div>
                <div className="col">
                  <label htmlFor="done">Ответ готов</label>
                  <input name="done" type="checkbox" className="ml-4" onInput={filterHandler}/>
                </div>
                <div className="col">
                  <input id="clear" type="reset" className="ml-4 btn btn-primary" onClick={ () => dispatch(clearFilter()) }/>
                </div>

              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
