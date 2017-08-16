import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ProductImages from '../components/ProductImages'

export default class ProductDetail extends Component {
  static propTypes = {
    product: PropTypes.shape({
      images: PropTypes.array
    })
  }

  render() {
    const { product } = this.props

    return (
      <div>
        <ProductImages images={ product.images } />
      </div>
    )
  }
}
