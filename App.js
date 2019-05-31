import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';

class App extends Component {
  render() {
    const user = {
      name: "Anna",
      hobbies:["Sports","Reading"]
    }
    return (
      <div>{this.props.children}
        <div className="container">
          <div className="row">
            <div className="col-xs-1 col-xs-offset-11">
              <Header />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xs-1 col-xs-offset-11">
              <Home name={"Max"} age={123} user={user} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default App;
