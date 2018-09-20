import React from 'react';
import ProductForm from './ProductForm';

export default class SelectedProductCard extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.name}</p>
                <p>{this.props.genre}</p>
                <p>{this.props.price}</p>
                <p>{this.props.currency}</p>
                <p>{this.props.url}</p>
                <button className="productButton" onClick={this.props.closeWindow.bind(this)}>Close Window</button>
                <button className="productButton" onClick={this.props.displayForm.bind(this)}>Change Price</button>
                {this.props.formDisplay
                    ? <ProductForm 
                        price={this.props.price} 
                        handleFormSubmit={this.props.handleFormSubmit} 
                        handleInputChange={this.props.handleInputChange}
                        updatedPrice={this.props.updatedPrice} />
                    : <div></div>
                }
            </div>
        )
    }
}