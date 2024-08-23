import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-2xl font-bold">
                    My Portfolio
                </div>
                <ul className="flex space-x-4">
                    
                        <Link to="/" className="text-white hover:text-gray-400">
                            Home
                        </Link>
                    
                    
                        <Link to="/resume" className="text-white hover:text-gray-400">
                            Resume
                        </Link>
                    
                        <Link to="/projects" className="text-white hover:text-gray-400">
                            Projects
                        </Link>
                    
                        <Link to="/contact" className="text-white hover:text-gray-400">
                            Contact
                        </Link>
                   
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
