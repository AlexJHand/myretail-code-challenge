import React from 'react';

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
            </div>
        )
    }
}