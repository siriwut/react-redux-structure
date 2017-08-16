import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ProductDetail from '../app/product/containers/ProductDetail'

export default class IndexPage extends Component {
  static propTypes = {
    product: PropTypes.object
  }
  
  static async getInitialProps() {
    const product = {
      images: []
    }

    return { product }
  }

  render() {
    const { product } = this.props

    return (
      <ProductDetail product={ product } />
    )
  }
}
