import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import Counter from "./Components/Counter";

const App = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};

export default App;
