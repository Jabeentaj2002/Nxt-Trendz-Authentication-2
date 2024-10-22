// Write your JS code here
// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const Products = () => {
  return (
    <Link to="/products" className="link-item">
      <div className="cart-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-img.png"
          alt="products"
          className="cart-img"
        />
      </div>
    </Link>
  )
}

export default Products
