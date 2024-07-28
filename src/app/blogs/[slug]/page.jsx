import React from 'react';

const page = ({ params }) => {

    const singleBlog = blogs.find(blog => blog.slug === params.slug)
    return (
        <div className='min-h-screen'>
            <div className='p-14 border-2 space-y-3 mb-2'>
                <h3 className='text-2xl'>{singleBlog.title}</h3>
                <p>{singleBlog.description}</p>
            </div>
        </div>
    );
};

const blogs = [
    {
        "slug": "intro-to-frontend-development",
        "title": "Introduction to Frontend Development",
        "description": "A comprehensive guide to getting started with frontend development, covering the basics of HTML, CSS, and JavaScript."
    },
    {
        "slug": "responsive-web-design",
        "title": "Responsive Web Design: Best Practices",
        "description": "Learn the best practices for creating responsive web designs that work seamlessly on all devices."
    },
    {
        "slug": "advanced-javascript-tips",
        "title": "Advanced JavaScript Tips and Tricks",
        "description": "Enhance your JavaScript skills with these advanced tips and tricks for better performance and cleaner code."
    },
    {
        "slug": "css-grid-vs-flexbox",
        "title": "CSS Grid vs. Flexbox: A Comparison",
        "description": "Understand the differences between CSS Grid and Flexbox and when to use each layout technique in your web projects."
    },
    {
        "slug": "building-accessible-websites",
        "title": "Building Accessible Websites",
        "description": "Learn how to make your websites accessible to everyone, including people with disabilities, by following these guidelines."
    },
    {
        "slug": "react-vs-vue",
        "title": "React vs. Vue: Which Framework to Choose?",
        "description": "A comparison of React and Vue.js, two popular JavaScript frameworks, to help you decide which one is right for your next project."
    },
    {
        "slug": "web-performance-optimization",
        "title": "Web Performance Optimization Tips",
        "description": "Discover techniques to optimize your website's performance, including image optimization, lazy loading, and more."
    },
    {
        "slug": "getting-started-with-sass",
        "title": "Getting Started with Sass",
        "description": "An introduction to Sass, a powerful CSS preprocessor, and how it can improve your workflow and code organization."
    },
    {
        "slug": "progressive-web-apps",
        "title": "Progressive Web Apps: The Future of Web Development",
        "description": "Learn about Progressive Web Apps (PWAs), their benefits, and how to create a PWA from scratch."
    },
    {
        "slug": "javascript-es6-features",
        "title": "Top JavaScript ES6 Features You Should Know",
        "description": "An overview of the most important features introduced in ES6 and how they can improve your JavaScript code."
    }
]

export default page;