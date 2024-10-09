import { Provider } from "react-redux";
import App from "../pages/index";
import { setupStore } from "../store/store";
import "../styles/globals.css";

const store = setupStore();

export default function MyApp() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
