import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-blue-600 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-2xl font-bold">
                    My Portfolio
                </div>
                <ul className="flex space-x-4">
                    <li>
                        <Link to="/" className="text-white hover:text-blue-300">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/resume" className="text-white hover:text-blue-300">
                            Resume
                        </Link>
                    </li>
                    <li>
                        <Link to="/projects" className="text-white hover:text-blue-300">
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" className="text-white hover:text-blue-300">
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
