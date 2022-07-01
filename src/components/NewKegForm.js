import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';

function NewKegForm(props) {
  function handleNewKegFormSubmission(e) {
    e.preventDefault();
    props.onNewKegCreation({
      name: e.target.name.value,
      brand: e.target.brand.value,
      price: e.target.price.value,
      abv: e.target.abv.value,
      id: v4()
    });
  }
  return (
    <React.Fragment>
      <form onSubmit = {handleNewKegFormSubmission}>
        <input type="text" name="name" placeholder="Vitus" />
        <input type="text" name="brand" placeholder="Weihenstephaner" />
        <input type="number" name="price"/>
        <input type="number" name="abv" />
        <button type="submit">Fass hinzufügen</button>
      </form>
    </React.Fragment>
  );
}
NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};
export default NewKegForm;