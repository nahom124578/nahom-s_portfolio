import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="margin">
               
               <ul className="flex space-x-10">
                   
              <Link  className="margin" to="/"
                        >
                            Home
                        </Link>
                        
                   
                        <Link
                            to="/resume"
                            className="margin"
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
                  
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
