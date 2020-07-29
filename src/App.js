import React, { useEffect, Fragment } from "react";
import M from "materialize-css/dist/js/materialize.min";
import "materialize-css/dist/css/materialize.min.css";

import SearchBar from "./components/Layout/nav/search-bar.component";
import Logs from "./components/logs/logs.component";

import "./App.css";

const App = () => {
  useEffect(() => {
    // Init Materalize JS
    M.AutoInit();
  });

  return (
    <Fragment>
      <SearchBar />
      <div className="container">
        <Logs />
      </div>
    </Fragment>
  );
};

export default App;
