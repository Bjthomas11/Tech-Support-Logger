import React from "react";
import { connect } from "react-redux";
import { deleteTechnician } from "../../../../actions/technician-actions";
import DeleteIcon from "@material-ui/icons/Delete";
import M from "materialize-css/dist/js/materialize.min";

const TechItem = ({
  technician: { firstName, lastName, id },
  deleteTechnician,
}) => {
  const onDeleteTechnicians = () => {
    deleteTechnician(id);
    M.toast({
      html: `${firstName} ${lastName} has been deleted`,
      classes: "rounded",
    });
  };
  return (
    <li className="collection-item">
      <div>
        {firstName} {lastName}
        <a
          href="#!"
          className="secondary-content"
          onClick={onDeleteTechnicians}
        >
          <i className="grey-text">
            <DeleteIcon />
          </i>
        </a>
      </div>
    </li>
  );
};

export default connect(null, { deleteTechnician })(TechItem);
