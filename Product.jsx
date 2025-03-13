import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './Cart';

export default function Products() {
    const [products, setProducts] = useState([]);
    const { addToCart } = useCart();

    // Fetch products function
    const fetchProducts = async () => {
        try {
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            setProducts(data);
            
            console.log(data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    useEffect(() => {
        fetchProducts(); 
    }, []); 

    return (
        <div className=' p-4'>
            <h1 className="text-2xl font-bold mb-4">Products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {products.map((product) => (
                    <div key={product.id} className="border p-4 rounded-md shadow-md">
                        <img src={product.image} alt={product.title} className="w-full h-40 object-contain mb-2" />
                        <h2 className="text-lg font-semibold">{product.title}</h2>
                        <p className="text-gray-600">${product.price}</p>
                        <p className="text-red-500">{product.id}</p>
                        <Link to={`/product/${product.id}`} className="block mt-2 text-sm text-blue-600">View Product</Link>
                        <button 
                            className="bg-green-500 text-white px-4 py-2 rounded-md mt-2"
                            onClick={() => addToCart(product)}
                        >
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}