import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Row } from "react-bootstrap";
import M from "materialize-css/dist/js/materialize.min";
import { updateLog } from "../../../../actions/log-actions";
import TechnicianSelectOption from "../../../technicians/technician-select-options/technician-select-options.component";

import "./edit-modal.styles.scss";

const EditLogModal = ({ updateLog, current }) => {
  const [message, setMessage] = useState("");
  const [attention, setAttention] = useState(false);
  const [technician, setTechnician] = useState("");

  // if current is true then setting each state to the current values, then pass current as a dependency
  useEffect(() => {
    if (current) {
      setMessage(current.message);
      setAttention(current.attention);
      setTechnician(current.technician);
    }
  }, [current]);

  const onSubmit = (e) => {
    if (message === "" || technician === "") {
      M.toast({
        html: "Please enter a message and add a Technician",
        classes: "rounded",
      });
    } else {
      const updatedLog = {
        id: current.id,
        message,
        attention,
        technician,
        date: new Date(),
      };

      updateLog(updatedLog);

      M.toast({ html: `Log updated by ${technician}` });

      //   clearing state fields
      setMessage("");
      setTechnician("");
      setAttention(false);
    }
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
            {/* <label htmlFor="message" className="active">
              Log Support Message
            </label> */}
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
              <TechnicianSelectOption />
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
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  current: state.log.current,
});

export default connect(mapStateToProps, { updateLog })(EditLogModal);
