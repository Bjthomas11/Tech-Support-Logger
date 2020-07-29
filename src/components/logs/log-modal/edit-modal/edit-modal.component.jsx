import React, { useState } from "react";
import { Row } from "react-bootstrap";
import M from "materialize-css/dist/js/materialize.min";

import "./edit-modal.styles.scss";

const EditLogModal = () => {
  const [message, setMessage] = useState("");
  const [attention, setAttention] = useState(false);
  const [technician, setTechnician] = useState("");

  const onSubmit = (e) => {
    if (message === "" || technician === "") {
      M.toast({
        html: "Please enter a message and add a Technician",
        classes: "rounded",
      });
    } else {
      console.log(message, technician, attention);

      //   clearing state fields
      setMessage("");
      setTechnician("");
      setAttention(false);
    }
  };

  const clearFields = () => {
    //   clearing state fields
    setMessage("");
    setTechnician("");
    setAttention(false);
  };

  return (
    <div id="edit-log-modal" className="modal">
      <div className="modal-content">
        <h4>Enter Support Log</h4>
        <Row>
          <div className="input-field">
            <input
              type="text"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <label htmlFor="message" className="active">
              Log Support Message
            </label>
          </div>
        </Row>
        <Row>
          <div className="input-field">
            <select
              name="technician"
              value={technician}
              className="browser-default"
              onChange={(e) => setTechnician(e.target.value)}
            >
              <option value="" disabled>
                Select Technician
              </option>
              <option value="Brian Thomas">Brian Thomas</option>
              <option value="Annie Thomas">Annie Thomas</option>
              <option value="Raider Thomas">Raider Thomas</option>
            </select>
          </div>
        </Row>
        <Row>
          <div className="input-field">
            <p>
              <label>
                {" "}
                <input
                  type="checkbox"
                  name="attention"
                  className="filled-in"
                  checked={attention}
                  value={attention}
                  onChange={(e) => setAttention(!attention)}
                />
                <span>Needs Attention</span>
              </label>
            </p>
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

export default EditLogModal;
