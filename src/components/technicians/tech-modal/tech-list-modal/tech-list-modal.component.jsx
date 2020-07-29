import React, { useState, useEffect } from "react";

import TechItem from "../tech-item/tech-item.component";

const TechListModal = () => {
  const [technicians, setTechnicians] = useState([]);
  const [loading, setLoading] = useState(false);

  const getTechnicians = async () => {
    setLoading(true);

    // using fetch api
    const res = await fetch("/technicians");
    const data = await res.json();

    setTechnicians(data);
    setLoading(false);
  };

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
            technicians.map((technician) => (
              <TechItem technician={technician} key={technician.id} />
            ))}
        </ul>
      </div>
    </div>
  );
};

export default TechListModal;
