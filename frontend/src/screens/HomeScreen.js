import React, { useState, useEffect  } from 'react'
import axios from 'axios';
import Product from '../components/Product';

export default function HomeScreen() {
    //react hook 
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fecthData = async () => {
            const {data} = await axios.get('api/products');
            setProducts(data);
        };
        fecthData();
    }, []);
    return (
        <div className="row center rowcenter">
            {products.products.map((product) => (
                <Product key={product._id} product = {product}></Product>
            ))}                
        </div>
    )
}

