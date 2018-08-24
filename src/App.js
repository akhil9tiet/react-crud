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

  //cosnstuctor method
  constructor(props){
    super(props);

    this.state = {
      products: []  //we initialize our products as empty array
    }
  }

  //Component will mount is mostly for getting data before your component loads
  componentWillMount(){
    this.getProducts();
  }

  getProducts(){
    const products = JSON.parse(localStorage.getItem('products'));

    this.setState({products}); //we have set the products as our products
  }

  render() {
    return (
      <div className="App">
        <h1>My Products App</h1>
        {
          this.state.products.map (product => {
            return (
              <div key = {product.name}>
                <span>{product.name}</span> | $
                <span>{product.price}</span>
              </div>
            );
          })
        }
      </div>
    );
  }
}

export default App;
