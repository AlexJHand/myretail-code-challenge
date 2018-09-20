import React from 'react';
// import axios from 'axios';

export default class ProductCard extends React.Component {
    // constructor(props) {
    //     super(props);

    //     this.getProductInfo = this.getProductInfo.bind(this);
    // }
    
    // getProductInfo(e) {
    //     console.log(e);
        
    //     axios(`/products/`, {
    //         params: {
    //             id: e
    //         }
    //     })
    //         .then(response => console.log('response', response))
    //         .catch(error => console.log(error))
        
    // }
    
    render() {
        return (
            <div className="productCard">
                {this.props.name}
                {/* <button className="submitButton" onClick={this.getProductInfo.bind(this, this.props.productId)}>Click me</button> */}
                <button className="productButton" onClick={this.props.getProductInfo.bind(this, this.props.productId)}>Click me</button>
            </div>
        )
    }
}