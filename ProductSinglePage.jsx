import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function ProductsSinglePage() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch (`https://fakestoreapi.com/products/${id}`);
                const data = await response.json();
                setProduct(data);
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        };
        fetchProduct();
    }, [id]);

    if (!product) return <p className="text-center mt-10">Loading product...</p>;

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4">
            <div className="max-w-md border p-6 rounded-md shadow-md">
                <img src={product.image} alt={product.title} className="w-full h-60 object-contain mb-4" />
                <h1 className="text-2xl font-bold">{product.title}</h1>
                <p className="text-gray-600">${product.price}</p>
                <p className="mt-2 text-sm text-gray-700">{product.description}</p>
            </div>
        </div>
    );
}