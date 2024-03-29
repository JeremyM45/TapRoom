import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types';

function KegList(props) {
  return (
    <React.Fragment>
      {props.kegList.map((keg) => 
        <Keg
        whenKegClicked = {props.onKegSelection}
        name = {keg.name}
        brand = {keg.brand}
        price = {keg.price}
        abv = {keg.abv}
        glassesLeft = {keg.glassesLeft}
        id = {keg.id}
        key = {keg.id} />
      )}
    </React.Fragment>
  );
}
KegList.protoTypes = {
  kegList: PropTypes.array,
  onKegSelection: PropTypes.func
};
export default KegList;