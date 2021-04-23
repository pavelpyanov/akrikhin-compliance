import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "./App.css";

import { Provider } from "react-redux";
import { rootReduser } from "./redux/rootReduser";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { Container, Row } from "react-bootstrap";
import { Header } from "./components/Header";
import { Main } from "./components/Main";

function App() {
  const store = createStore(
    rootReduser,
    composeWithDevTools(applyMiddleware(thunk))
  );
  return (
    <Provider store={store}>
      <Container className="pb-2">
        <Row>
          <Header />
        </Row>
        <Main/>
      </Container>
    </Provider>
  );
}

export default App;
