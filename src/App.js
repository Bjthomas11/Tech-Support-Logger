import React, { useEffect, Fragment } from "react";
import M from "materialize-css/dist/js/materialize.min";
import "materialize-css/dist/css/materialize.min.css";

import SearchBar from "./components/Layout/nav/search-bar.component";
import Logs from "./components/logs/logs.component";
import AddButton from "./components/Layout/add-button/add-button";
import LogModal from "./components/logs/log-modal/log-modal.component";
import EditLogModal from "./components/logs/log-modal/edit-modal/edit-modal.component";
import AddTechModal from "./components/technicians/tech-modal/tech-modal.component";
import TechListModal from "./components/technicians/tech-modal/tech-list-modal/tech-list-modal.component.jsx";

import { Provider } from "react-redux";
import store from "./store";

import "./App.css";

const App = () => {
  useEffect(() => {
    // Init Materalize JS
    M.AutoInit();
  });

  return (
    <Provider store={store}>
      <Fragment>
        <SearchBar />
        <div className="container">
          <AddButton />
          <LogModal />
          <EditLogModal />
          <AddTechModal />
          <TechListModal />
          <Logs />
        </div>
      </Fragment>
    </Provider>
  );
};

export default App;
