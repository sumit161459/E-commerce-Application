import React,{useState,useEffect} from 'react';
import {commerce} from './lib/commerce';
import {Products,Navbar} from './components';

function App() {
    const [products,setProducts]=useState([]);
    const fetchProducts=async()=>{
        const {data}=await commerce.products.list();
        console.log(data);
        setProducts(data); 
    }

    useEffect(()=>{
        fetchProducts();
    },[])

    console.log(products);
    
    return (
        <div>
            <Navbar></Navbar>
           <Products products={products}></Products>
        </div>
    )
}

export default App
