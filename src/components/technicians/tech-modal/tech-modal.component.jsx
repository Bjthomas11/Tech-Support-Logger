import React, { useState } from "react";
import { Row } from "react-bootstrap";
import M from "materialize-css/dist/js/materialize.min";

import "./tech-modal.styles.scss";

const TechModal = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const onSubmit = (e) => {
    if (firstName === "" && lastName === "") {
      M.toast({
        html: "Please enter a name",
        classes: "rounded",
      });
    } else {
      console.log(firstName, lastName);
      //   clearing state fields
      setFirstName("");
      setLastName("");
    }
  };

  const clearFields = () => {
    //   clearing state fields
    setFirstName("");
    setLastName("");
  };

  return (
    <div id="add-technician-modal" className="modal">
      <div className="modal-content">
        <h4>New Technician</h4>
        <Row>
          <div className="input-field">
            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label htmlFor="firstName" className="active">
              First Name
            </label>
          </div>
        </Row>
        <Row>
          <div className="input-field">
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <label htmlFor="firstName" className="active">
              Last Name
            </label>
          </div>
        </Row>
      </div>
      <div className="modal-footer">
        <a
          href="#!"
          onClick={onSubmit}
          className="modal-close waves-effect waves-light blue btn add"
        >
          Enter
        </a>
        <a
          href="#!"
          onClick={clearFields}
          className="waves-effect waves-light btn clear"
        >
          Clear
        </a>
      </div>
    </div>
  );
};

export default TechModal;
