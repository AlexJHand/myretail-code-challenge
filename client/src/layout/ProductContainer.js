import React from 'react';
import axios from 'axios';

import ProductCard from '../components/ProductCard';
import SelectedProductCard from '../components/SelectedProductCard';

export default class ProductContainer extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            products: null,
            selectedProduct: null,
            formDisplay: false,
            updatedId: "",
            updatedPrice: ""
        }

        this.buildProducts = this.buildProducts.bind(this);
        this.closeWindow = this.closeWindow.bind(this);
        this.displayForm = this.displayForm.bind(this);
        this.getProductInfo = this.getProductInfo.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.setProducts = this.setProducts.bind(this);
        this.setSpecificProduct = this.setSpecificProduct.bind(this);
    }

    buildProducts() {
        console.log('In buildProducts');
        let productsArray = [];
        this.state.products.products.data.forEach(element => {
            
            productsArray.push(
                <ProductCard
                    key={element._id}
                    productId={element._id}
                    name={element.name}
                    getProductInfo={this.getProductInfo}
                />
            )
        });
        return productsArray
    }

    closeWindow() {
        console.log('In closeWindow');
        this.setState({selectedProduct: null, formDisplay: false})
        console.log('this.state', this.state);
    }

    componentDidMount() {
        console.log('In componentDidMount');
        axios(`/products/allproducts`)
            .then(products => this.setProducts(products))
            .catch(error => error);
    }

    displayForm() {
        console.log('In displayForm');
        this.setState({formDisplay: true});
    }

    getProductInfo(e) {
        console.log(e);
        axios(`/products/`, {
            params: {
                id: e
            }
        })
            .then(selectedProduct => this.setSpecificProduct(selectedProduct))
            .catch(error => console.log(error))
    }

    handleFormSubmit(e) {
        console.log('In handleFormSubmit');
        e.preventDefault();
        console.log('New price', this.state.updatedPrice);
        axios(`/products/updateprice/`, {
            params: {
                id: this.state.updatedId,
                price: this.state.updatedPrice
            }
        })
            .catch(error => console.log(error))
    }

    handleInputChange(e) {
        const value = e.target.value;
        this.setState({ updatedPrice: {value}});
    }

    setSpecificProduct(selectedProduct) {
        console.log('In setSpecificProduct');
        this.setState({ selectedProduct: { selectedProduct } })
        console.log('this.state', this.state);
        
    }

    setProducts(products){
        console.log('In setProducts');
        this.setState({ products: { products } })
        console.log('this.state', this.state);
        
    }

    render() {
        const productsList = this.state.products;
        if (productsList) {
            return (
                <div>
                    <div>{this.buildProducts()}</div>
                    {this.state.selectedProduct 
                        ? <SelectedProductCard 
                            key={this.state.selectedProduct.selectedProduct.data.id}
                            id={this.state.selectedProduct.selectedProduct.data.id}
                            currency={this.state.selectedProduct.selectedProduct.data.currency}
                            genre={this.state.selectedProduct.selectedProduct.data.genre}
                            name={this.state.selectedProduct.selectedProduct.data.name}
                            price={this.state.selectedProduct.selectedProduct.data.price}
                            url={this.state.selectedProduct.selectedProduct.data.url}
                            formDisplay={this.state.formDisplay}
                            updatedPrice={this.state.updatedPrice}
                            closeWindow={this.closeWindow}
                            displayForm={this.displayForm}
                            handleFormSubmit={this.handleFormSubmit}
                            handleInputChange={this.handleInputChange}
                          />

                        :   <div></div>
                    }
                </div>
            )
        } else {
            return (
                <div></div>
            )
        }
        
    }
}