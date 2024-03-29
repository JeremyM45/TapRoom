import React from 'react';
import PropTypes from 'prop-types';

function Keg(props) {
  return (
    <React.Fragment>
      <div onClick = {() => props.whenKegClicked(props.id)}>
        <h4>{props.name} : {props.brand}</h4>
        <p>Kosten : €{props.price}</p>
        <p>Alkoholgehalt : {props.abv}%</p>
        <p>Gläser restlich: {props.glassesLeft}</p>
      </div>
    </React.Fragment>
  );
}
Keg.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.string,
  abv: PropTypes.string,
  glassLeft: PropTypes.number,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func
};
export default Keg;