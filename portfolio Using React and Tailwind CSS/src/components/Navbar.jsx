import { NavLink } from "react-router-dom";

import { IoMdDownload } from "react-icons/io";

function Navbar() {
    return (
        <nav className="flex justify-around items-center gap-8 p-2 bg-[#000206] text-white hover:cursor-pointer max-[750px]:text-[5px] max-[750px]:gap-1 max-[750px]:items-center max-[750px]:p-1">

            {/* This is the Name Show on the left side of the portfolio */}
            <div className="Rajmahmmad flex items-center gap-2">
                <h1 className="text-3xl font-bold max-[750px]:text-xl">
                    <span className="text-white">R</span>
                    <span className="text-blue-500">M</span>
                </h1>

                <h2 className="text-white font-xl text-xl max-[750px]:text-sm">
                    Raj <span className="text-blue-500">Mahmmad</span>
                </h2>
            </div>

            {/* This is used for link the Home ,About etc on the nav bar, Isaka used isiliye bkiya jata hai because isako used karne se page realod nahi hota hai  */}
            <NavLink to="/" className={({ isActive }) =>
                `hover:underline hover:text-white ${isActive ? "bg-blue-500 text-white rounded-sm px-1" : ""}`}>Home</NavLink>

            <NavLink to="/about" className={({ isActive }) =>
                `hover:underline hover:text-white ${isActive ? "bg-blue-500 text-white rounded-sm px-1" : ""}`}>About</NavLink>

            <NavLink to="/skills" className={({ isActive }) =>
                `hover:underline hover:text-white ${isActive ? "bg-blue-500 text-white rounded-sm px-1" : ""}`}>Skills</NavLink>
            <NavLink to="/projects" className={({ isActive }) =>
                `hover:underline hover:text-white ${isActive ? "bg-blue-500 text-white rounded-sm px-1" : ""}`}>Projects</NavLink>
            <NavLink to="/contact" className={({ isActive }) =>
                `hover:underline hover:text-white ${isActive ? "bg-blue-500 text-white rounded-sm px-1" : ""}`}>Contact</NavLink>


            {/* This is the Resume */}
            <a href="/RajMahmmad_Frontend.pdf" download className="flex items-center gap-3 bg-[#000206] text-blue-700 px-4 py-2 border border-2px solid to-blue-700 rounded-xl  hover:cursor-pointer hover:bg-[#1242a26c] hover:underline max-[750px]:px-1 max-[450px]:py-1" > <IoMdDownload /> Download Resume </a>


        </nav>
    );
}

export default Navbar;