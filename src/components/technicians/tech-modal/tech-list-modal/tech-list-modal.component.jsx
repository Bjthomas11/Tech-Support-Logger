import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getTechnicians } from "../../../../actions/technician-actions";

import TechItem from "../tech-item/tech-item.component";

const TechListModal = ({
  getTechnicians,
  technician: { technicians, loading },
}) => {
  useEffect(() => {
    getTechnicians();
    // eslint-disable-next-line
  }, []);

  return (
    <div id="technician-list-modal" className="modal">
      <div className="modal-content">
        <h4>Technician List</h4>
        <ul className="collection">
          {!loading &&
            technicians !== null &&
            technicians.map((technician) => (
              <TechItem technician={technician} key={technician.id} />
            ))}
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  technician: state.technician,
});

export default connect(mapStateToProps, { getTechnicians })(TechListModal);
