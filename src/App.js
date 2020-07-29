import React, { useEffect } from "react";
import M from "materialize-css/dist/js/materialize.min";
import "materialize-css/dist/css/materialize.min.css";

import "./App.css";

const App = () => {
  useEffect(() => {
    // Init Materalize JS
    M.AutoInit();
  });

  return <div>test</div>;
};

export default App;
