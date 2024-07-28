import React from 'react';

const getSinglePost = async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await res.json();
    return data;
}

export const generateMetadata = async ({params}) =>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    const postData = await res.json();
    return {
        title: {
            absolute: `${postData.title}`
        },
        description: postData.body,
        keywords: postData.body.split(' ')
    }
}

const page = async ({ params }) => {
    const singlePost = await getSinglePost(`${params.id}`)
    return (
        <div>
            <div className='border-2 p-10'>
                <h2 className='text-2xl'>{singlePost.title}</h2>
                <p>{singlePost.body}</p>
                
            </div>
        </div>
    );
};

export default page;