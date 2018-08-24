import React, { Component } from 'react';
import ProductItem from './ProductItem';
import AddProduct from './AddProduct';
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
      products: JSON.parse(localStorage.getItem('products'))  //products is being assigned from the data directly in the constructor
    };
    this.onAdd = this.onAdd.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }

  //Component will mount is mostly for getting data before your component loads
  componentWillMount(){
    const products = this.getProducts();

    this.setState({products});
  }

  getProducts(){
    return (this.state.products);
  }

  onDelete(name){ //this is where the product will actually be deleted
    const products = this.getProducts();
    const filteredProducts = products.filter(product => {
      return product.name !== name;
    });
    this.setState({products: filteredProducts});
  }

  onAdd(name, price){ // function adds new products to the list
    const products = this.getProducts();
    products.push({name, price});
    this.setState({products});
  }

  
  render() {
    return (
      <div className="App">
        <h1>My Products App</h1>

        <AddProduct onAdd = {this.onAdd} />
        
        {
          this.state.products.map (product => {
            return (
              <ProductItem 
                key= {product.name}
                {...product} //spread operator, passes all at once
                onDelete={this.onDelete} // Pass the onDelete into our productItem component
                />
            );
          })
        }
      </div>
    );
  }
}

export default App;
