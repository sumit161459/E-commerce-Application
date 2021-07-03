import React from 'react';
import { Grid } from '@material-ui/core';
import Product from './Product/Product';
import useStyle from './styles';

const products=[
    {id:1,name:'Shoes',description:'Running Shoes',price:'$5',image:'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2hvZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'},
    {id:2,name:'Macbook',description:'Apple Macbook',price:'$15',image:'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'}
];

const Products=()=>{
    const classes=useStyle();
    return(
        <main className={classes.content}>
            <div className={classes.toolbar}></div>
            <Grid container justify="center" spacing={4}>
                {products.map((product)=>(
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product}></Product>
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}

export default Products;
