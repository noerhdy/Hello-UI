import { Provider } from "react-redux";
import { RoutesCon, store } from "../config";
import React from "react";

function App() {
  return (
    <>
      <Provider store={store}>
        <RoutesCon />
      </Provider>
    </>
  );
}

export default App;
