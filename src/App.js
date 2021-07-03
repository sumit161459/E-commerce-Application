import React,{useState,useEffect} from 'react';
import {commerce} from './lib/commerce';
import {Products,Navbar,Cart} from './components';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

function App() {
    const [products,setProducts]=useState([]);
    const [cart,setCart]=useState({});

    const fetchProducts=async()=>{
        const {data}=await commerce.products.list();
        // console.log(data);
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

    // console.log(products);
    // console.log(cart);
    
    return (
        <Router>
            <div>
                <Navbar totalItems={cart.total_items}></Navbar>
                <Switch>
                    <Route exact path="/">
                        <Products products={products} onAddToCart={handleAddToCart}></Products>
                    </Route>
                    <Route exact path="/cart">
                        <Cart cart={cart}></Cart>
                    </Route>
                </Switch>
            </div>
        </Router>
        
    )
}

export default App
