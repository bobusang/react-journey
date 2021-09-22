import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isExpand, setIsExpand] = useState("");
  const dropMenu = useRef(null);
  const expandMenu = () => {
    setIsExpand(!isExpand);
    console.log(isExpand);
    // const div = dropMenu.current;
    // div.className = ""
  };

  return (
    <>
      <div
        className="
        bg-green-200
        rounded-b-2xl
        shadow-xl
        "
      >
        <div
          className="
            flex
            items-center
            justify-between
            py-4
            px-4
            mx-auto
            container
            "
        >
          <Link to="/">
            <div
              className="
                    font-bold
                    text-2xl
                    text-black
                    "
            >
              Bobusang
            </div>
          </Link>

          <div
            className="
                hidden
                sm:flex
                items-center
                justify-center
                space-x-6
                
                "
          >
            <Link to="/API">
              <div className="text-xl font-semibold text-white py-2 px-4 duration-75 hover:bg-indigo-400 rounded-2xl">
                {" "}
                API
              </div>
            </Link>

            <Link to="/CMS">
              <div className="text-xl font-semibold text-white py-2 px-4 duration-75 hover:bg-indigo-400 rounded-2xl">
                {" "}
                project 2
              </div>
            </Link>
            <div className="text-xl font-semibold text-white py-2 px-4 duration-75 hover:bg-indigo-400 rounded-2xl">
              {" "}
              project 3
            </div>
            <div className="text-xl font-semibold text-white py-2 px-4 duration-75 hover:bg-indigo-400 rounded-2xl">
              {" "}
              Project 4
            </div>
          </div>

          <div className="hidden sm:block text-xl font-semibold text-white py-2 px-4 bg-blue-400 rounded-2xl">
            {" "}
            Contact me!
          </div>

          <div
            onClick={expandMenu}
            className="group sm:hidden text-xl font-semibold text-white py-2 px-4 border-2 border-green-600 hover:bg-green-600 hover:border-white rounded-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 group-hover:text-white text-green-600"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="absolute bottom-10 sm:hidden text-xl font-semibold text-white py-2 px-4 bg-blue-400 rounded-full shadow-lg">
            Contact me!
          </div>
        </div>
      </div>

      {/* Mobile action */}
      <div
        className={`
            ${isExpand ? "absolute" : "hidden"}
            
            top-0
            w-screen
            h-screen
            backdrop-filter
            backdrop-blur-sm
            transition duration-200
            
            `}
        onClick={expandMenu}
      ></div>

      <div
        className={`
            m-4
            py-8
            rounded-2xl
            shadow-2xl
            fixed
            inset-x-0
            top-0
            
            transform

            ${isExpand ? "" : "-translate-y-full -my-10"}
            
                  
            bg-green-100
            md:h-40
            flex
            flex-col
            items-center
            justify-start
            transition duration-200 ease-in-out
            `}
        ref={dropMenu}
      >
        <Link to="/">
          <div
            className="
                    font-bold
                    text-2xl
                    text-black
                    border-b-2
                    mb-4
                    "
          >
            Bobusang
          </div>
        </Link>

        <div
          className="
                
                sm:flex
                items-center
                justify-center
                
                "
        >
          <Link to="/API">
            <div className="text-xl text-center font-semibold text-green-500 py-2 px-4 duration-75 hover:bg-indigo-400 rounded-2xl">
              API
            </div>
          </Link>
          <Link to="/CMS">
            <div className="text-xl text-center font-semibold text-green-500 py-2 px-4 duration-75 hover:bg-indigo-400 rounded-2xl">
              CMS
            </div>
          </Link>
          <div className="text-xl text-center font-semibold text-green-500 py-2 px-4 duration-75 hover:bg-indigo-400 rounded-2xl">
            project 3
          </div>
          <div className="text-xl text-center font-semibold text-green-500 py-2 px-4 duration-75 hover:bg-indigo-400 rounded-2xl">
            Project 4
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
