import React from 'react';

export default class ProductForm extends React.Component {
    render() {
        return (
            <form>
                <label htmlFor="price">Price:</label>
                <input
                    onChange={this.props.handleInputChange}
                    name="price"
                    type="text"
                    // className="form-control"
                    placeholder={this.props.price}
                />
                <button className="productButton" onClick={this.props.handleFormSubmit.bind(this)}>Submit</button>
            </form>
        )
    }
}