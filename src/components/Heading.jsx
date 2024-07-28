"use client"
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

const Heading = () => {
    const pathName = usePathname();
    const router = useRouter();
    const links = [
        {
            title: 'About',
            path: '/about'
        },
        {
            title: 'Services',
            path: '/services'
        },
        {
            title: 'Contact',
            path: '/contact'
        },
        {
            title: 'Blogs',
            path: '/blogs'
        },
        {
            title: 'Categories',
            path: '/categories'
        },
        {
            title: 'Posts',
            path: '/posts'
        },
        {
            title: 'Dashboard',
            path: '/dashboard'
        },
        {
            title: 'Meals',
            path: '/meals'
        },
        {
            title: 'Gallery',
            path: '/gallery'
        },
    ]

    const handleSubmit = () => {
        router.push('/login')
    }

    if (pathName.includes('dashboard')) {
        return (
            <div className='bg-sky-500 p-4 flex gap-6 justify-center text-center text-white'>
                <Link href={"/"}>Home</Link>
                <Link href={"/dashboard/createUser"}>Create User</Link>
            </div>
        )
    }

    return (
        <div className='bg-orange-500 py-3'>
            <nav className="flex items-center overflow-x-auto container mx-auto justify-between">
                <Link href={"/"}><h2 className='text-3xl font-bold'>Next <span className='text-gray-100'>Hero</span></h2></Link>
                <ul className="flex justify-between items-center space-x-4">

                    {
                        links?.map(link => <Link key={link.path} className={`${pathName === link.path && 'text-white border-b-2'}`} href={link.path}>{link.title}</Link>)
                    }
                </ul>
                <button onClick={handleSubmit} className='btn btn-outline'>Login</button>
            </nav>
        </div>
    );
};

export default Heading;