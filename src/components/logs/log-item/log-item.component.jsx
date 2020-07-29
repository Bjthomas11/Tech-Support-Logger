import React from "react";
import { connect } from "react-redux";
import Moment from "react-moment";
import DeleteIcon from "@material-ui/icons/Delete";
import { deleteLog } from "../../../actions/log-actions";

import M from "materialize-css/dist/js/materialize.min";

const LogItem = ({ log, deleteLog }) => {
  const onDeleteLog = () => {
    deleteLog(log.id);
    M.toast({ html: `Log: ${message} deleted` });
  };
  const { attention, technician, date, id, message } = log;
  return (
    <li className="collection-item">
      <div>
        <a
          href="#edit-log-modal"
          className={`modal-trigger ${attention ? "red-text" : "blue-text"}`}
        >
          {message}
        </a>
        <br />
        <span className="grey-text">
          <span className="black-text">ID #{id}</span> last updated by{" "}
          <span className="black-text">{technician}</span> on{" "}
          <Moment format="MMMM Do YYYY, h:mm:ss a">{date}</Moment>
        </span>
        <a href="#!" className="secondary-content" onClick={onDeleteLog}>
          <i className="grey-text">
            <DeleteIcon />
          </i>
        </a>
      </div>
    </li>
  );
};

export default connect(null, { deleteLog })(LogItem);
