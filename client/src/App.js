import React, { Component } from 'react';
import './App.css';

import Footer from './layout/Footer';
import Header from './layout/Header';
import ProductContainer from './layout/ProductContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ProductContainer/>
        <Footer />
      </div>
    );
  }
}

export default App;
