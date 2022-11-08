import React from "react";
import {Route,Routes} from "react-router-dom" ;
import Products from "../Products/Products" ;
import SignUp from "../SignUp/SignUp";
import Cart from "../Cart/Cart";

const SitePath = ({productItems,cartItems,handleAddProduct,handleRemoveProduct,handleCartClearance}) => {

return (
<>
<Routes>
    <Route path="/" exact  element={<Products  productItems={productItems} handleAddProduct={handleAddProduct}/>}/>
    <Route path="/signup"  exact element={<SignUp/>} />
    <Route path="/cart" exact element={<Cart cartItems={cartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} handleCartClearance={handleCartClearance}/>} />
</Routes>

</>
)
}

export default SitePath