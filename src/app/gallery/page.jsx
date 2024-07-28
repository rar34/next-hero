import Image from 'next/image';
import React from 'react';

const page = () => {
    return (
        <div>
            <div className='grid grid-cols-2 gap-6'>
                {
                    [1, 2, 3, 4, 5].map((img, i) =>
                        <div key={i}>
                            <Image src={`/images/${img}.jpg`} height={500} width={500} />
                        </div>)
                }
            </div>
            {/* <Image src="/images/1.jpg" alt="" height={1024} width={1290} /> */}
        </div>
    );
};

export default page;