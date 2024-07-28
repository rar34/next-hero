"use client"
import React, { useEffect, useState } from 'react';

const Meals = () => {
    const [search, setSearch] = useState('')
    const [meals, setMeals] = useState([])
    const [error, setError] = useState('')
    // console.log(search)

    const loadData = async () => {
        try {
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`)
            const data = await res.json()
            setMeals(data.meals)
            setError('')
        } catch (error) {
            setError('No data found')

        }
    }

    useEffect(() => {
        loadData()
    }, [search])

    console.log(meals)

    return (
        <div className=' my-10'>
            <input onChange={(e) => setSearch(e.target.value)} className='py-3 px-4 border-2 border-orange-600 rounded-l-3xl' type="text" placeholder='Search meals' />
            <button onClick={() => loadData()} className='p-3 bg-orange-600 text-white font-bold text-lg rounded-r-3xl -ml-2'>Search</button>
            <div className='grid grid-cols-2 gap-6 my-14'>
                {
                   meals.length > 0 && !error && meals?.map(meal =>
                        <div className='border'>
                            <img src={meal.strMealThumb} alt={meal.strMeal} height={500} width={500}/>
                            <h2>{meal.strMeal}</h2>
                            <p>{meal.strInstructions}</p>
                        </div>
                    )
                }
                {
                    error && <p className='text-red-600'>{error}</p>
                }
            </div>
        </div>
    );
};

export default Meals;