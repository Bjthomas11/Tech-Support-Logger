import React, { useState, useEffect } from "react";

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
    return <h4>loading...</h4>;
  }

  return (
    <ul className="collection-with-header">
      <li className="collection-header">
        <h3 className="center">Support Logs</h3>
      </li>
      {!loading && logs.length === 0 ? (
        <p className="center">No Logs to show</p>
      ) : (
        logs.map((log) => <li key={log.id}>{log.message}</li>)
      )}
    </ul>
  );
};

export default Logs;
