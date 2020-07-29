import React from "react";
import AddIcon from "@material-ui/icons/Add";
import Person from "@material-ui/icons/Person";
import PersonAddIcon from "@material-ui/icons/PersonAdd";

const AddButton = () => {
  return (
    <div className="fixed-action-btn">
      <a
        href="#add-log-modal"
        className="btn-floating btn-large blue darken-2 modal-trigger"
      >
        <i className="large">
          <AddIcon />
        </i>
      </a>
      <ul>
        <li>
          <a
            href="#technician-list-modal"
            className="btn-floating green modal-trigger"
          >
            <Person />
          </a>
        </li>
        <li>
          <a
            href="#technician-modal"
            className="btn-floating red modal-trigger"
          >
            <PersonAddIcon />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default AddButton;
