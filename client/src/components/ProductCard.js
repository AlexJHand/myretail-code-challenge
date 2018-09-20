import React from 'react';

export default class ProductCard extends React.Component {
    render() {
        return (
            <div className="productCard">
                {this.props.name}
                <button 
                    className="productButton" 
                    onClick={this.props.getProductInfo.bind(this, this.props.productId)}>Click me</button>
            </div>
        )
    }
}