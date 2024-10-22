// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const Cart = () => {
  return (
    <Link to="/cart" className="link-item">
      <div className="cart-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-img.png"
          alt="cart"
          className="cart-img"
        />
      </div>
    </Link>
  )
}

export default Cart
