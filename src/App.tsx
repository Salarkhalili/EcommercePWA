import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import ThemeProvider from "./store/AppConfig/index.context";
import LocalizedFontProvider from "./LocalizedFontProvider";
import ThemeWrapper from "./ThemeWrapper";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <LocalizedFontProvider>
          <ThemeWrapper />
        </LocalizedFontProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
