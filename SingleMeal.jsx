import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function SingleMeal() {
    const { id } = useParams();
    const [meal, setMeal] = useState(null);

    useEffect(() => {
        const fetchMeal = async () => {
            try {
                const response = await fetch(`https://themealdb.com/api/json/v1/1/lookup.php?i=s/${id}`);
                const data = await response.json();
                if (data.meals) {
                    setMeal(data.meals[0]); // Get the first (and only) meal object
                }
            } catch (error) {
                console.error("Error fetching meal:", error);
            }
        };
        fetchMeal();
    }, [id]); // Use `id`, not `idMeal`

    if (!meal) return <p className="text-center mt-10">Loading meal...</p>;

    return (
        <div>
            <h1 className='font-bold text-2xl mb-4 justify-center items-center flex'>Meal Details</h1>
            <div className='border p-4 rounded-md shadow-md'>
                <h2 className='font-bold text-2xl text-amber-300'>{meal.strMeal}</h2>
                <p className='font-bold text-xl text-red-400'>{meal.strCategory}</p>
                <p className='font-bold text-l text-green-950'>{meal.strArea}</p>
                <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full h-40 object-contain mb-2" />
                <p>{meal.strInstructions}</p>
            </div>
        </div>
    );
}
