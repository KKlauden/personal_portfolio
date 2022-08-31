// This is the root component in
// the React application.

import React from "react";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <Header title="My Application" />
      <main>
        <Widget />
      </main>
    </>
  );
};

export default App;
