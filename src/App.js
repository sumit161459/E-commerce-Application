import React,{useState,useEffect} from 'react';
import {commerce} from './lib/commerce';
import {Products,Navbar} from './components';

function App() {
    const [products,setProducts]=useState([]);
    const [cart,setCart]=useState({});

    const fetchProducts=async()=>{
        const {data}=await commerce.products.list();
        console.log(data);
        setProducts(data); 
    }

    const fetchCart=async()=>{
        setCart(await commerce.cart.retrieve());
    }

    const handleAddToCart=async(productId,qunatity)=>{
        const item=await commerce.cart.add(productId,qunatity);
        setCart(item.cart);
    }

    useEffect(()=>{
        fetchProducts();
        fetchCart();
    },[])

    console.log(products);
    console.log(cart);
    
    return (
        <div>
            <Navbar totalItems={cart.total_items}></Navbar>
           <Products products={products} onAddToCart={handleAddToCart}></Products>
        </div>
    )
}

export default App
