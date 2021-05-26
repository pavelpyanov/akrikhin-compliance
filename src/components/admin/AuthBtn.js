import { Auth } from "./Auth"

export const AuthBtn = () => {
  return (
    <>
      <Auth />
      <div className="d-grid gap-2 d-md-flex justify-content-md-end">
        <button
          data-bs-toggle="modal" 
          data-bs-target="#auth-modal"
          type="button"
          className="btn btn-primary me-md-2"
        >
          Администратор
        </button>
      </div>
    </>
  )
}
