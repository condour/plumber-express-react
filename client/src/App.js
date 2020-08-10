import React from 'react';
import RandomForm from './RandomForm';
import Results from './Results';

class App extends React.Component {
  onPayload = (results) => {
    this.setState({
      results
    })
  }
  constructor(props) {
    super(props)
    this.state = {
      results: {}
    }
  }
  render() {
    return(
      <div className="app">
      <h1>Choose a Random Password:</h1>
      
          <RandomForm onPayload={this.onPayload} />
          
          <Results passwords={this.state.results} />

          </div>
          
  );
  }
}


export default App;
