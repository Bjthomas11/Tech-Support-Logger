import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getTechnicians } from "../../../actions/technician-actions";

const TechnicianSelectOption = ({
  getTechnicians,
  technician: { technicians, loading },
}) => {
  useEffect(() => {
    getTechnicians();
    // eslint-disable-next-line
  }, []);
  return (
    !loading &&
    technicians !== null &&
    technicians.map((t) => (
      <option key={t.id} value={`${t.firstName} ${t.lastName}`}>
        {t.firstName} {t.lastName}
      </option>
    ))
  );
};

const mapStateToProps = (state) => ({
  technician: state.technician,
});

export default connect(mapStateToProps, { getTechnicians })(
  TechnicianSelectOption
);
