import React from 'react';
import PropTypes from 'prop-types';

function Keg(props) {
  return (
    <React.Fragment>
      <div onClick = {() => props.whenKegClicked(props.id)}>
        <h4>{props.name} : {props.brand}</h4>
        <p>Kosten : €{props.price}</p>
        <p>Alkoholgehalt : {props.abv}%</p>
      </div>
    </React.Fragment>
  );
}
Keg.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.string,
  abv: PropTypes.string,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func
};
export default Keg;