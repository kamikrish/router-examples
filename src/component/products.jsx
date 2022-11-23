import { useState } from "react";
import {Link} from "react-router-dom"

function Products(){
    const [products,setProducts]=useState([
        {id:1,name:"Products 1"},
        {id:2,name:"Products 2"},
        {id:3,name:"Products 3"},
        
    ]);


    return (
        <div>
            <h1>Products</h1>
            <ul>
                {products.map((product)=>(
                    <li key={product.id}>
                        <Link to={'/products/${product.id}'}>{product.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Products;