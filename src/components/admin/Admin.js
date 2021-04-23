import { useDispatch, useSelector } from "react-redux";
import { userView } from "../../redux/actions";
import { AdminTable } from "./AdminTable";
import { Filter } from "./Filter";
import { AlertError } from "../AlertError"

export const Admin = () => {
  const dispatch = useDispatch();
  const backToUser = () => {
    dispatch(userView());
  };
  const error = useSelector((state) => state.error);


  return (
    <>
      {error.showError && <AlertError text={error.text} />}
      <button type="button" className="btn btn-primary mt-3 mb-3" onClick={backToUser}>
        Назад
      </button>
      <Filter/>
      <AdminTable />
    </>
  );
};
