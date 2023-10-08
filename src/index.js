import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import { Provider } from "react-redux";
// import store from "./redux/store";
// import {  persistor } from "./redux/store";
// import { PersistGate } from "redux-persist/integration/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <Provider store={store}>
    //  {/* <PersistGate persistor={persistor}> */}
      <BrowserRouter basename="/car-rental">
        <App />
      </BrowserRouter>
    // {/* </PersistGate> */}
  // </Provider>
);
