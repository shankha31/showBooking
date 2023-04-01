import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AppProvider } from "./context";
// import { BrowserRouter } from "react-router-dom";


ReactDOM.render(
    <AppProvider>
        <App />
    </AppProvider>, 
    document.querySelector("#root")
);

