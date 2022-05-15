import { createRoot } from "react-dom/client";
import "./styles.scss";
import { Provider } from "react-redux";
import store from "./redux/store";
import App from "./App";

const root = createRoot(document.querySelector("#root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
