import { CssBaseline } from "@mui/material";
import { Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material/styles";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import App from "./App.jsx";
import "./index.scss";
import { persistor, store } from "./redux/configureStore.jsx";
import theme from "./theme/theme.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate loading={null} persistor={persistor}>
        <CssVarsProvider theme={theme}>
          <App />
          <CssBaseline></CssBaseline>
        </CssVarsProvider>
      </PersistGate>
    </BrowserRouter>
  </Provider>
);
