import React from 'react'
import PropTypes from 'prop-types';

const ProductItem = ({product,handleClick}) => {
          return (
                   
                              <tr>
                                        <td><button className="primary" onClick={() =>handleClick(product.name)}>ClickMe</button></td>
                                        <td>{product.name}</td>
                                        <td><img src={product.imgSrc} alt="" width="200px" /></td>
                                        <td>{product.price}</td>

                              </tr>
                  
          )
}
ProductItem.propTypes = {
          product:PropTypes.object,
          handleClick:PropTypes.func
        }
export default ProductItem


