import React from 'react'
import PropTypes from 'prop-types'
import Slider from 'react-slick'
import { ImageWrapper } from './ProductImages.style'

const ProductImages = ({ images, defaultImage, onChangeImage }) => (
  <ImageWrapper>
    <Slider>
      { !!images.length && images.map(image => (
        <img src={ image } />
      ))}
      { !images.length && <img src={ defaultImage } /> }
    </Slider>
  </ImageWrapper>
)

ProductImages.propTypes = {
  images: PropTypes.array,
  defaultImage: PropTypes.string,
  onChangeImage: PropTypes.func
}

ProductImages.defaultProps = {
  defaultImage: '/static/default-product.jpg'
}

export default ProductImages
