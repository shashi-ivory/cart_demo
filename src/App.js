import React from "react";

import Header from "./components/Header";
import Main from "./components/Main";
const App = () => {
  return (
    <div>
      <Header />
      <Main />
      {/* <button onClick={() => dispatch(INCREMENT())}>Increment</button> */}
    </div>
  );
};

export default App;
