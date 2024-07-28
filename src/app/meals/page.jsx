
import Meals from '@/components/Meals';
import React from 'react';

export const metadata = {
    title: 'Meals',
    description: "Meals Page",
  };

const MealsPage = () => {
    


    return (
        <div className='space-y-4 text-center '>
            <h2 className='text-3xl  font-bold'>Choose your meals</h2>
            <p>Choose meals of your choice by searching.....</p>
            <Meals />
        </div>
    );
};

export default MealsPage;