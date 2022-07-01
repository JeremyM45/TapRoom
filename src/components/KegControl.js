import React from 'react';
import NewKegForm from './NewKegForm';
import KegList from './KegList';
import KegDetails from './KegDetails';

class KegControl extends React.Component{
  constructor(props){
    this.state = {
      formVisibleOnPage: false,
      mainKegList: [],
      selectedKeg: null
    };
  }
  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.state.mainKegList.filter(k => k.id === id)[0];
    this.setState({selectedKeg: selectedKeg});
  }
  handleAddingNewKegToKegList = (newKeg) => {
    const newMainKegList = this.state.mainKegList.concat(newKeg);
    this.setState({mainKegList: newMainKegList, formVisibleOnPage: false});
  }
  handleClick = () => {
    if(this.state.selectedKeg != null) {
      this.setState({ formVisibleOnPage: false, selectedKeg: null });
    } else {
      this.setState(prevState => ({ formVisibleOnPage: !prevState.formVisibleOnPage }));
    }
  }
  handleDeletingKeg = (id) => {
    const newMainKegList = this.state.mainKegList.filter(k => k.id !== id);
    this.setState({mainKegList: newMainKegList, selectedKeg: null});
  }
  
  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if(this.state.selectedKeg != null) {
      currentlyVisibleState = <KegDetails keg = {this.state.selectedKeg} onClickingDelete = {this.handleDeletingKeg} />
      buttonText= "zurück zur Fassliste";
    } else if(this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewKegForm onNewKegCreation = {this.handleAddingNewKegToKegList} />
      buttonText= "zurück zur Fassliste";
    } else {
      currentlyVisibleState = <KegList kegList = {this.state.mainKegList} onKegSelection = {this.handleChangingSelectedKeg} />
      buttonText= "ein Fass hinzufügen";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState};
        <button onClick = {this.handleClick}>{buttonText}</button>;
      </React.Fragment>
    )
  }
}
export default KegControl;