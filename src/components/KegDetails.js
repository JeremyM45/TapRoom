import React from "react";
import PropTypes from "prop-types";

function KegDetails(props) {
  const { keg, onClickingDelete, onClickingPourGlass } = props;
  return (
    <React.Fragment>
      <h3>Fass-Beiwerk</h3>
      <h4>{keg.name} : {keg.brand}</h4>
      <p>Kosten: €{keg.price}</p>
      <p>Alkoholgehalt: {keg.abv}%</p>
      <p>Gläser restlich: {keg.glassesLeft}</p>
      <button onClick={() => onClickingPourGlass(keg.id)}>gießen ein gläse</button>
      <button onClick={() => onClickingDelete(keg.id)}>Fass entfernen</button>
    </React.Fragment>
  );
}
KegDetails.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingPourGlass: PropTypes.func
};
export default KegDetails;