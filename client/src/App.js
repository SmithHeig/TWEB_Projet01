import React, { Component } from 'react';
import './App.css';
import SearchField from './components/SearchField';

class App extends Component {

  constructor(props){
    super(props);
    this.ref = React.createRef();
  }

  render() {
    return (
      <div className="App">
        <header className="App-body">
          <h1>Github Friends</h1>
          <h2>Find out who works the most on your repositories</h2>
          <SearchField/>
        </header>
      </div>
    );
  }
}

export default App;
