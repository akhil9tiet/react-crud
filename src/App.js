import React, { Component } from 'react';
import './App.css';

const products = [
  {name: 'iPad',
   price: 200
  },
  {name: 'iPhone',
   price: 650
  }
];

localStorage.setItem('products', JSON.stringify(products));

class App extends Component {

  //Component will mount is mostly for getting data before your component loads
  componentWillMount(){
    const products = JSON.parse(localStorage.getItem('products'));

    console.log(products);
  } 

  render() {
    return (
      <div className="App">
        <h1>My Products App</h1>
      </div>
    );
  }
}

export default App;
