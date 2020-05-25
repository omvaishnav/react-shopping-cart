import React from 'react';
import { Route } from 'react-router-dom';
import Header from './components/Header';
import ProductListing from './components/ProductListing';
import Footer from './components/Footer';
import Cart from './components/Cart';
import Toast from './components/Toast';

class App extends React.Component {
  render(){
    return (
      <React.Fragment>
        <div className="app">
          <Header />
          <Route exact path="/react-shopping-cart" component={ProductListing} />
          <Route exact path="/react-shopping-cart/cart" component={Cart} />
          <div className="push"></div>
        </div>
        <Toast position="bottom"/>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
