import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";

const TechItem = ({ technician }) => {
  return (
    <li className="collection-item">
      <div>
        {technician.firstName} {technician.lastName}
        <a href="#!" className="secondary-content">
          <i className="grey-text">
            <DeleteIcon />
          </i>
        </a>
      </div>
    </li>
  );
};

export default TechItem;
