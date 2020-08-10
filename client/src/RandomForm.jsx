import React from 'react';
import 'antd/dist/antd.css';

const API_URL = process.env.REACT_APP_API_URL

class RandomForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      numberOfAdjectives: 3,
      numberOfPasswords: 5,
      maxLetters: 10
    }
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

handleSubmit = async (event) => {
  event.preventDefault();
  const { numberOfAdjectives, maxLetters, numberOfPasswords } = this.state;
  let myHeaders = new Headers()
  if(process.env.NODE_ENV === "development") { // only add key if not proxying
    myHeaders.append("Authorization", `Key ${process.env.REACT_APP_API_KEY}`)
  }
  const url = `${process.env.REACT_APP_API_URL}${process.env.REACT_APP_API_PATH}/random?numberOfAdjectives=${numberOfAdjectives}&numberOfPasswords=${numberOfPasswords}&maxLetters=${maxLetters}`;
  const requestOptions = { method: "GET", headers: myHeaders}
  const result = await fetch(url, requestOptions)
  const parsed = await result.json();
  this.props.onPayload(parsed);
}

render() {
  return (
    
    <form onSubmit = {this.handleSubmit} className="grid-container">
      
      <label>Number of Adjectives:</label>
      <input
        name="numberOfAdjectives"
        type="number"
        max={20}
        min={0}
        value={this.state.numberOfAdjectives}
        onChange={this.handleInputChange} 
      />
      
      <label>Number of Passwords:</label>
      <input
        name="numberOfPasswords"
        type="number"
        max={10}
        min={1}
        value={this.state.numberOfPasswords}
        onChange={this.handleInputChange} 
      />
      
      
       <label>Maximum word length:</label>
      <input
        name="maxLetters"
        type="number"
        min={3}
        max={20}
        value={this.state.maxLetters}
        onChange={this.handleInputChange} 
      />
      
      <div className="button-holder"><input type="submit" value="Submit"/></div>
      </form>
  );
}
}

export default RandomForm;
