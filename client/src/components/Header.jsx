import React from 'react'
import { Button, Navbar } from 'flowbite-react'
import { Link, useLocation } from 'react-router-dom'

export default function Header() {
    const path = useLocation().pathname;
    return (
        <Navbar className='border-b-2'>
            <Link to="/" className='image-logo px-2'>
                <img src="name" alt="Logo" className='h-8 w-8' />
            </Link>
            <div className='flex gap-2 md:order-2'>
                <Link to="/signin">
                    <Button className='w-20 h-10' color='blue'>SignIn</Button>
                </Link>
            </div>
            <div className='flex gap-10 ml-[-300px] font-bold'>
            
                <Navbar.Link>
                    <Link to="/" >Home</Link>
                </Navbar.Link>
                <Navbar.Link active={path === '/about'} as={'div'}>
                    <Link to="/about">AboutUs</Link>
                </Navbar.Link>
                <Navbar.Link active={path === '/projects'} as={'div'}>
                    <Link to="/projects">Projects</Link>
                </Navbar.Link>
                <Navbar.Link active={path === '/blogs'} as={'div'}>
                    <Link to="/blogs">Blogs</Link>
                </Navbar.Link>
                <Navbar.Link active={path === '/blogs'} as={'div'}>
                    <Link to="/blogs">Records</Link>
                </Navbar.Link>
               
            </div>
        </Navbar>
    )
}
