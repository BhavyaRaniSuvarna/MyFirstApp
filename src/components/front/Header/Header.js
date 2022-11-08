import React from 'react' 
import {Link} from "react-router-dom"
import "./Header.css"

export default function Header(props) {

    
  return (
    <header className='header'>
        <div>
            <h1>
                <Link to="/" className='logo'>
                   Premier Electronic Mart
                </Link>
            </h1>
        </div>
        <div className="header-links">
            <ul>
                <li>
                     <Link to="/">Home</Link>
                </li>
            </ul>
            {/* <ul>
                <li>
                     <Link to="/signup">SignUp</Link>
                </li>
            </ul> */}
            <ul>
                <li>
                     <Link to="/cart">
                        <i className='fas fa-shopping-cart' />
                        <span className='cart-length'>
                            {props.cartItems.length === 0 ? "" : props.cartItems.length}
                        </span>
                     </Link>
                </li>
            </ul>
            <ul>
                {/* <a onClick={fun1} href='http://localhost:3002/cart' >
                    <span onClick={fun2}>Click me</span>
                </a> */}
            </ul>
        </div>
    </header>
  )
}
