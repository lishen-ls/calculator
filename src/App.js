import React from 'react';
import Wrapper from "./components/Wrapper";
import Result from "./containers/Result";
import "./App.css";
import store from "./store";
import {Provider} from "react-redux";

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <div className="calculator">
      <Result></Result>
      <Wrapper></Wrapper>
      </div>
    </div>
    </Provider>
  );
}

export default App;
