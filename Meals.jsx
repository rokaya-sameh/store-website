import React, { useEffect, useState } from 'react'
import { useCart } from './Cart'
import { Link } from 'react-router-dom'

export default function Meals() {
    const [meals, setMeals] = useState([])
    const { addToCart } = useCart()

    const fetchMeals = async () => {
        try {
            const response = await fetch("https://themealdb.com/api/json/v1/1/search.php?f=s")
            if (!response.ok) {
                throw new Error("Couldn't fetch")
            }
            const data = await response.json()
            setMeals(data.meals || [])  // Ensure meals is an array
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchMeals()
    }, [])  // Dependency array added

    return (
        <div>
            <h1 className='font-bold text-2xl mb-4 justify-center items-center flex'>Meals</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {meals.map((meal) => (
                    <div key={meal.idMeal} className='border p-4 rounded-md shadow-md'>
                        <h2 className='font-bold text-2xl text-amber-300'>{meal.strMeal}</h2>
                        <p className='font-bold text-xl text-red-400'>{meal.strCategory}</p>
                        <p className='font-bold text-l text-green-950'>{meal.strArea}</p>
                        <img src={meal.strSource} alt={meal.strMeal} className="w-full h-40 object-contain mb-2" />
                        <p>{meal.strInstructions}</p>
                        {/* <Link to={`/meal/${meal.idMeal}`} className='block text-blue-400'>View Meal</Link> */}
                    </div>
                ))}
            </div>
        </div>
    )
}
