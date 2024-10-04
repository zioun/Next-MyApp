'use client'
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

const Heading = () => {
    const pathName = usePathname();
    const router = useRouter();
    const links = [
        {
            title: "Home",
            path: "/"
        },
        {
            title: "About",
            path: "/about"
        },
        {
            title: "Service",
            path: "/services"
        },
        {
            title: "Contact",
            path: "/contact"
        },
        {
            title: "Blog",
            path: "/blogs"
        }

    ]
    const handler = () =>{
        router.push('/login');
    }
    return (
        <div className='container m-auto flex justify-between py-5 items-center border-b-2'>
            <div>
                <h1 className='text-2xl font-bold'>My App</h1>
            </div>
            <div>
                <ul className='flex gap-5'>
                    {
                        links?.map((link) => <Link className={`${pathName == link.path && "font-bold"}`} key={link.path} href={link.path}><li>{link.title}</li></Link>)
                    }
                </ul>
            </div>
            <div>
                <button onClick={handler} className='px-7 py-3 bg-slate-500 rounded-md text-white'>Login</button>
            </div>
        </div>
    );
};

export default Heading;