import React from 'react';
import PropTypes from 'prop-types';

function Keg(props) {
  return (
    <React.Fragment>
      <div onClick = {() => props.whenKegClosed(props.id)}>
        <h6>{props.name} : {props.brand}</h6>
        <p>kosten :{props.price}</p>
        <p>Alkoholgehalt :{props.abv}%</p>
      </div>
    </React.Fragment>
  );
}
Keg.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
  abv: PropTypes.number,
  id: PropTypes.string,
  whenKegClosed: PropTypes.func
};
export default Keg;