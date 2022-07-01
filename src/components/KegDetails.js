import React from "react";
import PropTypes from "prop-types";

function KegDetails(props) {
  const { keg, onClickingDelete } = props;
  return (
    <React.Fragment>
      <h3>Fass-Beiwerk</h3>
      <h6>{keg.name} : {keg.brand}</h6>
      <p>kosten :{keg.price}</p>
      <p>Alkoholgehalt :{keg.abv}%</p>
      <button onClick={() => onClickingDelete(keg.id)}>Fass entfernen</button>
    </React.Fragment>
  );
}
KegDetails.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func
};
export default KegDetails;