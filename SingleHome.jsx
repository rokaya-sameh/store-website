import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function HomesSinglePage() {
    const { id } = useParams();
    const [home, sethome] = useState(null);

    useEffect(() => {
        const fetchhome = async () => {
            try {
                const response = await fetch (`https://fakestoreapi.com/homes/${id}`);
                const data = await response.json();
                sethome(data);
            } catch (error) {
                console.error('Error fetching home:', error);
            }
        };
        fetchhome();
    }, [id]);

    if (!home) return <p className="text-center mt-10">Loading home...</p>;

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4">
            <div className="max-w-md border p-6 rounded-md shadow-md">
                <img src={home.image} alt={home.title} className="w-full h-60 object-contain mb-4" />
                <h1 className="text-2xl font-bold">{home.title}</h1>
                <p className="text-gray-600">${home.price}</p>
                <p className="mt-2 text-sm text-gray-700">{home.description}</p>
            </div>
        </div>
    );
}