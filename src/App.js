import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./App.css";
class Forms extends Component{
  constructor(props){
    super(props);
    this.state = {value:'', values:''}
    this.handleChangeNom = this.handleChangeNom.bind(this);
    this.handleChangeText = this.handleChangeText.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChangeNom(e){
    this.setState({value:e.target.value});
    localStorage.setItem("nom",this.state.value);
  }
  handleChangeText(e){
    this.setState({values:e.target.values});
    localStorage.setItem("sujet",this.state.values);
  }
  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }
  render(){
    return(
      <div className="App">
      <form onSubmit={this.handleSubmit}>
        <label>nom</label>
        <input type="text" value={this.state.value} onChange={this.handleChangeNom} />
        <label>
        Essay:</label>
          <textarea value={this.state.values} onChange={this.handleChangeText} />


        <label>choix</label>
        <input type="checkbox" value="ok" />
        <label>troc</label>
        <input type="radio" value="ok" />
        <input type="submit" value="Envoyer" />
      </form>
      <Showtext value={this.state.value}/>
      </div>
    );
  }


}
function Showtext(props) {

    return(<div>vous avez saisi {props.value}</div>);

}
const rootElement = document.getElementById("root");
ReactDOM.render(<Forms />, rootElement);
