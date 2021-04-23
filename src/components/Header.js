import { Navbar } from "react-bootstrap";
import logo from "./akrikhin-logo.png";

export const Header = () => {
  return (
    <Navbar bg="light d-flex justify-content-between">
      <Navbar.Brand href="#home">
        <div className="logo-box">
          <img
            src={logo}
            className="d-inline-block align-top logo"
            alt="React Bootstrap logo"
          />
        </div>
      </Navbar.Brand>
      <h1 className="header-title">Вопросы по тематике комплаенс</h1>
    </Navbar>
  );
};
