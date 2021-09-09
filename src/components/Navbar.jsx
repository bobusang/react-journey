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
                flex
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

                <div className="text-xl font-semibold text-white py-2 px-4 bg-blue-400 rounded-2xl"> Contact me!

                </div>
            </div>
        </div>
    )
}

export default Navbar
