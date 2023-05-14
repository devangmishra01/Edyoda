import React from "react";
import { useState } from "react";
import logo from "../Icons/EDYODA.png"
import dropdownIcon from "../Icons/Vector.png"


const Navbar = () => {
    const [isCoursesOpen, setIsCoursesOpen] = useState(false);
    const [isProgramsOpen, setIsProgramsOpen] = useState(false);

    const toggleCoursesDropdown = () => {
        setIsCoursesOpen(!isCoursesOpen);
    };

    const toggleProgramsDropdown = () => {
        setIsProgramsOpen(!isProgramsOpen);
    };

    return (
        <nav className="flex items-center justify-between px-6 py-3" style={{background: "#FFFFFF"}}>
            <div className="flex items-center">
                <div className="mr-20">
                    <img
                        src={logo}
                        alt="Logo"
                        className=" h-5"
                    />
                </div>
                <div className="relative w-28 mr-6 ">
                    <button
                        onClick={toggleCoursesDropdown}
                        className="flex font-medium focus:outline-none"
                    >
                        <span>Courses</span>
                        <img
                            src={dropdownIcon}
                            alt="Dropdown"
                            className="w-5 h-6 ml-2"
                        />
                    </button>
            
                    {isCoursesOpen && (
                        <div className="absolute z-10 mt-2 py-2 bg-gray-900 rounded-md">
                            {/* Courses Dropdown Content */}
                            <a
                                href="#"
                                className="block px-4 py-2 text-white hover:bg-gray-700"
                            >
                                Course 1
                            </a>
                            <a
                                href="#"
                                className="block px-4 py-2 text-white hover:bg-gray-700"
                            >
                                Course 2
                            </a>
                        </div>
                    )}
                </div>
                <div className="relative w-28 ml-3">
                    <button
                        onClick={toggleProgramsDropdown}
                        className=" flex font-medium focus:outline-none"
                    >
                       <span> Programs</span>
                        <img
                            src={dropdownIcon}
                            alt="Dropdown"
                            className="w-5 h-6 ml-2"
                        />
                    </button>
                    {isProgramsOpen && (
                        <div className="absolute z-10 mt-2 py-2 bg-gray-900 rounded-md">
                            {/* Programs Dropdown Content */}
                            <a
                                href="#"
                                className="block px-4 py-2 text-white hover:bg-gray-700"
                            >
                                Program 1
                            </a>
                            <a
                                href="#"
                                className="block px-4 py-2 text-white hover:bg-gray-700"
                            >
                                Program 2
                            </a>
                        </div>
                    )}
                </div>
            </div>
            <div className="flex items-center mr-20">
                <div className="relative mr-4">
                   
                    <div className="absolute inset-y-0 -left-5   flex items-center cursor-pointer">
                        <svg
                            className="w-4 h-4 text-gray-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M21 21l-5.2-5.2"
                            />
                            <circle
                                cx="11"
                                cy="11"
                                r="8"
                                stroke="currentColor"
                                strokeWidth="2"
                            />
                        </svg>
                    </div>
                </div>
                <button className=" px-4 py-2 rounded-full">
                    Log in
                </button>
                <button className="text-white font-semibold JoinBtn-bg-gradient   px-10 py-2 ml-4 rounded-full">
                    Join Now
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
