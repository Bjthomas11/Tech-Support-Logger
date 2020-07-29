import React, { useEffect } from "react";
// connects redux to a component
import { connect } from "react-redux";
import LogItem from "./log-item/log-item.component";
import PreLoader from "../Layout/pre-loader/pre-loader.component";
// bringing in getLogs action
import { getLogs } from "../../actions/log-actions";

const Logs = ({ log: { logs, loading }, getLogs }) => {
  useEffect(() => {
    getLogs();
    // eslint-disable-next-line
  }, []);

  if (loading || logs === null) {
    return <PreLoader />;
  }

  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h3 className="center">Support Logs</h3>
      </li>
      {!loading && logs.length === 0 ? (
        <p className="center">No Logs to show</p>
      ) : (
        logs.map((log) => <LogItem log={log} key={log.id} />)
      )}
    </ul>
  );
};

// get anything from state to component
const mapStateToProps = (state) => ({
  // prop: refers to rootReducer naming
  log: state.log,
});

// add object as second parameter to connect to apply the action to the component

export default connect(mapStateToProps, { getLogs })(Logs);
