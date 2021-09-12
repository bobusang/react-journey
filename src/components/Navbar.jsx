import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className="
        bg-green-200
        rounded-b-2xl
        shadow-xl
        " >
            <div className="
            flex
            items-center
            justify-between
            py-4
            px-4
            mx-auto
            container
            ">

                <Link to="/">
                    <div className="
                    font-bold
                    text-2xl
                    text-black
                    ">
                        Bobusang
                    </div>
                </Link>

                <div className="
                hidden
                sm:flex
                items-center
                justify-center
                space-x-6
                
                ">
                    <Link to="/API">
                        <div className="text-xl font-semibold text-white py-2 px-4 duration-75 hover:bg-indigo-400 rounded-2xl"> API</div>
                    </Link>
                    <div className="text-xl font-semibold text-white py-2 px-4 duration-75 hover:bg-indigo-400 rounded-2xl"> project 2</div>
                    <div className="text-xl font-semibold text-white py-2 px-4 duration-75 hover:bg-indigo-400 rounded-2xl"> project 3</div>
                    <div className="text-xl font-semibold text-white py-2 px-4 duration-75 hover:bg-indigo-400 rounded-2xl"> Project 4</div>
                </div>

                <div className="hidden sm:block text-xl font-semibold text-white py-2 px-4 bg-blue-400 rounded-2xl"> Contact me!</div>

                <div className="group sm:hidden text-xl font-semibold text-white py-2 px-4 border-2 border-green-600 hover:bg-green-600 hover:border-white rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:text-white text-green-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                    </svg>
                </div>

                
            </div>
            <div className="flex items-center justify-center">
                 <div className="absolute bottom-10 sm:hidden text-xl font-semibold text-white py-2 px-4 bg-blue-400 rounded-full shadow-lg">
                    Contact me!
                </div>
            </div>
        </div>
    )
}

export default Navbar
