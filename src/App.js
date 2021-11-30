import React from "react";
import "./styles.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import ViewProfile from "./components/viewProfile";

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ViewProfile />
      </div>
    </Provider>
  );
}
