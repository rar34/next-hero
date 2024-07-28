import Link from 'next/link';
import React from 'react';

export const metadata = {
    title: 'About',
    description: "About Page",
    keywords: ['about', 'About Page']
};

const getTime = async () => {
    const res = await fetch('http://localhost:3000/time', { next: { revalidate: 5 } })
    const data = await res.json()
    return data.currentTime;
}

const AboutPage = () => {
    const currentTime = getTime();
    return (
        <div>
            <h2>This is about page</h2>
            <p>Time: {currentTime}</p>
        </div>
    );
};

export default AboutPage;