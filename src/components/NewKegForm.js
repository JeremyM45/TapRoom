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
      glassesLeft: 124,
      id: v4()
    });
  }
  return (
    <React.Fragment>
      <form onSubmit = {handleNewKegFormSubmission}>
        Name <input type="text" name="name" placeholder="Vitus" />
        Brauerei <input type="text" name="brand" placeholder="Weihenstephaner" />
        Kosten <input type="text" name="price"/>
        Alkoholgehalt <input type="text" name="abv" />
        <button type="submit">Fass hinzufügen</button>
      </form>
    </React.Fragment>
  );
}
NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};
export default NewKegForm;