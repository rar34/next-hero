import { getPosts } from '@/services/postApi';
import Link from 'next/link';
import React from 'react';
import { Montserrat } from 'next/font/google';

const mont = Montserrat({weight:['400','500','600','700', '800', '900'], subsets:['latin']})

export const metadata = {
    title: 'Posts',
    description: 'Posts Page'
}

const PostPage = async () => {

    const postData = await getPosts();
    // console.log(postData)

    return (
        <div className={mont.className}>
            <h2 className='text-2xl font-semibold'>Total Post: <span className='text-gray-400'>{postData.length}</span></h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-6'>
                {
                    postData.slice(0, 10).map(post =>
                        <div key={post.id} className='border-2 p-10'>
                            <h2 className='text-2xl'>{post.title}</h2>
                            <p>{post.body}</p>
                            <button className='btn btn-error my-4'>
                                <Link href={`/posts/${post.id}`}>View Details</Link>
                            </button>
                        </div>)
                }

            </div>
        </div>
    );
};

export default PostPage;