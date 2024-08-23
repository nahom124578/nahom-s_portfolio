import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="p-4 bg-gray-400">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-2xl font-bold">
                    My Portfolio
                </div>
                <div className="flex space-x-500">
                    <Link
                        to="/"
                        className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
                    >
                        Home
                    </Link>
                    <Link
                        to="/resume"
                        className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
                    >
                        Resume
                    </Link>
                    <Link
                        to="/projects"
                        className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
                    >
                        Projects
                    </Link>
                    <Link
                        to="/contact"
                        className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
                    >
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
