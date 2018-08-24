import React, { Component } from 'react';
import ProductItem from './ProductItem';
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

  //this has a self contained state with single products name and price
  render() {
    return (
      <div className="App">
        <h1>My Products App</h1>
        {
          this.state.products.map (product => {
            return (
              <ProductItem 
                key= {product.name}
                {...product} //spread operator, passes all at once
                />
            );
          })
        }
      </div>
    );
  }
}

export default App;
