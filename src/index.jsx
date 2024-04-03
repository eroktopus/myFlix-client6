import { createRoot } from "react-dom/client";
import { MainView } from "./components/main-view/main-view";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";
import { store } from "./redux/store"; // Import the Redux store
import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={store}>
      {" "}
      {/* Provide the existing Redux store */}
      <Container>
        <MainView />
      </Container>
    </Provider>
  );
};

const container = document.querySelector("#root");
const root = createRoot(container);
root.render(<App />);

document.body.style.backgroundColor = "rgb(131, 139, 131)";
document.body.style.paddingTop = "20px";
