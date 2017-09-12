import shortid from 'shortid';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

class ProductsList extends Component{

    renderProduct(product, index) {
        const id = shortid.generate();
        return (
            <tr key={id}>
                <td>{product.name}</td>
                <td>{product.price}</td>
            </tr>
        );
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price (R$)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.products.map(this.renderProduct)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({products}) {
    return {products};
}

export default connect(mapStateToProps)(ProductsList);