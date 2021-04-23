import { useSelector } from "react-redux"
import { User } from "./User"
import { Admin } from "./admin/Admin"

export const Main = () => {
  const view = useSelector( state => state.admin.view )
  
  return (
    <>
      {view === 'admin' && <Admin/>}
      {view === 'user' && <User/>}
    </>
  )
}