import React from 'react';

const Heading = () => {
    return (
        <div className='container m-auto flex justify-between py-5 items-center border-b-2'>
            <div>
                <h1 className='text-2xl font-bold'>My App</h1>
            </div>
            <div>
                <ul className='flex gap-5'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Service</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div>
                <button className='px-7 py-3 bg-slate-500 rounded-md text-white'>Login</button>
            </div>
        </div>
    );
};

export default Heading;