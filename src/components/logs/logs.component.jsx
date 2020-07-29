import React, { useState, useEffect } from "react";
import LogItem from "./log-item/log-item.component";
import PreLoader from "../Layout/pre-loader/pre-loader.component";

const Logs = () => {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(false);

  const getLogs = async () => {
    setLoading(true);

    // using fetch api
    const res = await fetch("/logs");
    const data = await res.json();

    setLogs(data);
    setLoading(false);
  };

  useEffect(() => {
    getLogs();
    // eslint-disable-next-line
  }, []);

  if (loading) {
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

export default Logs;
