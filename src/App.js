import React,{useState} from 'react' ;
import Header from './components/front/Header/Header';
import {BrowserRouter} from "react-router-dom"
import SitePath from './components/front/Routing/SitePath';

const App = () => {


 const productItems=[
        {
            id:"1",
            name:"Beats Headphone",
            price:999,
            image:"./pics/beats.jpg"
        },
        {
            id:"2",
            name:"Sol Headphone",
            price:1999,
            image:"./pics/sol.jpg"

        },
        {
            id:"3",
            name:"Boat Headphone",
            price:799,
            image:"./pics/boat.jpg"
        },
        {
            id:"4",
            name:"Iphone X",
            price:959,
            image:"./pics/iphone.jpeg"
        },
        {
            id:"5",
            name:"Samsung",
            price:9299,
            image:"./pics/vivo.jpg"
        }
        ,
        {
            id:"6",
            name:"OnePlus",
            price:91299,
            image:"./pics/oneplus.jpg"
        }
        ,
        {
            id:"7",
            name:"Macbook Pro",
            price:120009,
            image:"./pics/macbook.jpeg"
        }
        ,
        {
            id:"8",
            name:"Acer Laptop",
            price:56299,
            image:"./pics/acer.jpeg"
        },
        {
            id:"9",
            name:"Asus Laptop",
            price:9299,
            image:"./pics/asus.jpg"
        },
        {
            id:"10",
            name:"Vivo V9",
            price:12000,
            image:"./pics/vivo.jpg"
        }
    ]

const [cartItems,setCartItems]=useState([]);
console.log({cartItems});

const handleAddProduct=(product) => 
{
       //checking if added item already exists in the cart
        const ProductExist=cartItems.find((item)=> item.id === product.id)
        //if exists then fetch that item and increase the quantity by 1
        if(ProductExist)
        {
            setCartItems(cartItems.map((item)=> item.id === product.id ?
            {...ProductExist,quantity: ProductExist.quantity+1} : item))

        }
        //if the cart is empty
        //if item is getting added for very first time then new product is added with the quantity=1
        else
        {
            setCartItems([...cartItems,{...product,quantity :1}])
        }

}

    //Remove Product from cart
    const handleRemoveProduct = (product) => {
     //checking if added item already exists in the cart
     const ProductExist=cartItems.find((item)=> item.id === product.id)   
     if(ProductExist.quantity===1)
     {
      setCartItems(cartItems.filter((item)=> item.id !== product.id))
     }
     else
     {
        setCartItems(
            cartItems.map((item) =>
            item.id=== product.id ? {...ProductExist,quantity:ProductExist.quantity -1}:item)
        )
     }

     }

    //clearing cart all at once
    const handleCartClearance=()=>{
        setCartItems([]);
    }
    

  return (
  
   <div>
      <BrowserRouter>
      <Header cartItems={cartItems}></Header>
      <SitePath productItems={productItems} cartItems={cartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} handleCartClearance={handleCartClearance}/>
      </BrowserRouter>
    </div>
   );
}

export default App