import React, { useRef } from "react";
import { connect } from "react-redux";
import { searchLogs } from "../../../actions/log-actions";

import "./search-bar.styles.scss";

const SearchBar = ({ searchLogs }) => {
  const text = useRef("");

  const onChangeSearch = (e) => {
    // getting current text value
    searchLogs(text.current.value);
  };
  return (
    <nav className="blue search-bar">
      <div className="nav-wrapper">
        <form>
          <div className="input-field">
            <input
              id="search"
              type="search"
              placeholder="Search Logs.."
              ref={text}
              onChange={onChangeSearch}
            />
            <label className="label-icon" htmlFor="search">
              <i className="material-icons">search</i>
            </label>
            <i className="material-icons">close</i>
          </div>
        </form>
      </div>
    </nav>
  );
};

export default connect(null, { searchLogs })(SearchBar);
