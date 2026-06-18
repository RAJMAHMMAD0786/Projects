import { Link } from "react-router-dom";
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

            {/* This is the parts of the link  */}
            <Link to="/" className="hover:text-blue-500 hover:underline">Home</Link>
            <Link to="/about" className="hover:text-blue-500 hover:underline">About</Link>
            <Link to="/skills" className="hover:text-blue-500 hover:underline">Skills</Link>
            <Link to="/projects" className="hover:text-blue-500 hover:underline">Projects</Link>
            <Link to="/contact" className="hover:text-blue-500 hover:underline">Contact</Link>

            {/* This is the Resume */}
            <a href="/RajMahmmad_Frontend.pdf" download className="flex items-center gap-3 bg-[#000206] text-blue-700 px-4 py-2 border border-2px solid to-blue-700 rounded-xl  hover:cursor-pointer hover:bg-[#1242a26c] hover:underline max-[750px]:px-1 max-[450px]:py-1" > <IoMdDownload /> Download Resume </a>


        </nav>
    );
}

export default Navbar;