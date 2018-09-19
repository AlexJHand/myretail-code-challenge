import React from 'react';

import ProductCard from '../components/ProductCard';

export default class ProductContainer extends React.Component {
    state = {
        search: "",
        results: []
    }

    render() {
        return (
            <ProductCard key='17252133' productId='17252133' />
        )
    }
}