import React from 'react'
import logo from "../assets/logo.png"
import { navItems } from "../constants/index"
import { X, Menu, MenuIcon } from 'lucide-react'
import { useState } from 'react'
 
const Navbar = () => {
    const [mobileDrawerOpen, setmobileDrawerOpen] = useState(false);

    const toggleNavbar = () => {
        setmobileDrawerOpen(!mobileDrawerOpen);
    }

  return (
    <nav className="sticky top-0 z-50 py-3 backdeop-blur-lg border-b border-neutral-700/80">
        <div className="container px-4 mx-auto relative text-sm">
            <div className="flex justify-between items-center">
                <div className="flex items-center flex-shrink-0">
                    <img className='w-10 h-10 mr-2' src={logo} alt="" />
                    <span className="text-xl tracking-tight">Jogar</span>
                </div>

                <ul className="hidden lg:flex ml-14 space-x-12">
                    {navItems.map((item, index) => (
                        <li key={index} className="flex items-center space-x-2">
                            <a href={item.href}>{item.label}</a>
                            {item.icon && <span className="icon">{item.icon}</span>}
                        </li>
                    ))}
                </ul>

                <div className="hidden lg:flex justify-center space-x-8 items-center">
                    <a href="#" className="py-2 px-3 border rounded-md">
                        Sign in
                    </a>
                    <a href="#" className="py-2 px-3 border rounded-md bg-gradient-to-r from-orange-500 to-orange-800">
                        Create an account
                    </a>
                </div>

                <div className="lg:hidden md:flex flex-column justify-end">
                    <button onClick={toggleNavbar}>
                        {mobileDrawerOpen ? <X /> : <MenuIcon/>}
                    </button>
                </div>
            </div>

            {mobileDrawerOpen && (
                <div className="fixed right-0 z-20 bg-neutral-900 w-full p-10 flex flex-col justify-center items-center lg:hidden">
                    <ul>
                        {navItems.map((item, index) => (
                            <li className='py-2' key={index}>
                                <a href={item.href}>{item.label}</a>
                            </li>
                        ))}
                    </ul>

                    <div className="flex space-x-6 mt-3">
                        <a href="#" className="py-2 px-3 border rounded-md">
                            Sign In
                        </a>
                        <a href="#" className="py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800">
                            Create an account
                        </a>
                        </div>
                </div>
            )}
        </div>
    </nav>
  )
}

export default Navbar
