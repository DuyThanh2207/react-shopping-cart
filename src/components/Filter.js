import React, { Component } from 'react';

export default class Filter extends Component {
    render() {
        return (
            <div className="filter">
                <div className="filter-result">
                    {this.props.count} Products
                </div>
                <div className="filter-sort">
                    Order {" "}
                    <select value={this.props.sort} onChange={this.props.sortProducts}>
                        <option>Latest</option>
                        <option value="lowest">Lowest</option>
                        <option value="highest">Highest</option>
                    </select>
                </div>
                <div className="filter-color">
                    Color {" "}
                    <select value={this.props.color} onChange={this.props.filterProducts}>
                        <option value="">All</option>
                        <option value="Grey">Grey</option>
                        <option value="Yellow">Yellow</option>
                        <option value="Red">Red</option>
                    </select>
                </div>
            </div>
        );
    }
}