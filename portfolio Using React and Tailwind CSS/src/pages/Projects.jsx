import SpotifyImg from "../assets/SpotifyImg.png";
import SwiggyImg from "../assets/SwiggyImg.png";

import { FaCheckCircle } from "react-icons/fa";

// button ke liye hai
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Projects() {
  return (
    <div className="projectpage h-[85vh] bg-slate-950 max-[750px]:h-[90vh]">

      {/* This is for spotify */}
      <div className="spotify h-[40vh] flex pt-3">

        {/* This is the left part and This is for Img  */}
        <div className="leftpartforImg w-full h-[40vh]">
          <img src={SpotifyImg} alt="Spotify Clone" className="w-full rounded-lg  h-[40vh] border border-green-500 max-[750px]:w-full" />
        </div>





        {/* This is the right part and This is for contant  */}
        <div className="rightpartforcontant  border border-gray-800 rounded-xl w-full h-[40vh] max-[750px]:w-full ">

          {/* This is for featured */}
          <div className="featured flex justify-between mt-3 ml-7">
            <span className="px-3 py-1 text-green-400 border border-green-500 rounded-md text-sm max-[750px]:text-xs">
              Featured Project
            </span>

            <span className="px-3 py-1 text-green-400 border border-green-500 rounded-md text-sm mr-5 max-[750px]:text-xs max-[750px]:ml-3">
              Featured
            </span>
          </div>


          {/* This is the heading of the project or name*/}
          <div className="headingogproject">
            <h1 className="text-green-500 font-bold text-2xl ml-7 mt-2 max-[750px]:text-md">Spotify <span className="text-white">Clone</span></h1>
          </div>

          {/* This is the paragrph of the Spotify  */}
          <div className="paragrapg">
            <p className="text-white ml-7 text-sm max-[750px]:text-[10px]">A responsive Spotify-inspired music streaming web application featuring playlist management, audio controls, and a modern user experience.
            </p>
          </div>


          {/* This is key feature heading */}
          <div className="keyfeatureheading">
            <h3 className="text-green-500 ml-7 text-xl mt-2 max-[750px]:text-md">Key Features</h3>
          </div>

          {/* featured Available  */}
          <div className="featureAvailable flex gap-11 ml-7">

            {/* left part available feature */}
            <div className="featureAvailableleftside">
              <ul className="mt-3 space-y-2 text-gray-300">
                <li className="flex gap-3 text-xs max-[750px]:text-[10px]">
                  <FaCheckCircle className="text-green-500" />
                  Seamless Audio Playback
                </li>

                <li className="flex gap-3 text-xs max-[750px]:text-[10px]">
                  <FaCheckCircle className="text-green-500" />
                  Playlist Management
                </li>

                <li className="flex gap-3 text-xs max-[750px]:text-[10px]">
                  <FaCheckCircle className="text-green-500" />
                  Music Library Navigation
                </li>
              </ul>

            </div>

            {/* right part available feature */}
            <div className="featureAvailablerightside">
              <ul className="mt-3 space-y-2 text-gray-300">

                <li className="flex gap-3 text-xs max-[750px]:text-[10px]">
                  <FaCheckCircle className="text-green-500" />
                  Dark Theme Experience
                </li>

                <li className="flex gap-3 text-xs max-[750px]:text-[10px]">
                  <FaCheckCircle className="text-green-500" />
                  Responsive Design
                </li>

                <li className="flex gap-3 text-xs max-[750px]:text-[10px]">
                  <FaCheckCircle className="text-green-500" />
                  Modern User Interface
                </li>
              </ul>

            </div>
          </div>


          {/* button for cheking live and source code */}
          <div className="buttons flex justify-around mt-5">

            {/* Live project button */}
            <div className="LiveDemo ">
              <button onClick={() =>
                window.open("https://rajclones.netlify.app/", "_blank")}
                className="text-white bg-green-500 rounded-md hover:cursor-pointer text-[17px] px-2 hover:bg-green-600 hover:font-bold hover:underline flex items-center gap-1 max-[750px]:text-[12px]"> <FaExternalLinkAlt /> Live Demo</button>
            </div>

            {/* Source Code button */}
            <div className="SourceCode">
              <button onClick={() =>
                window.open("https://github.com/RAJMAHMMAD0786/Spotify-Clone", "_blank")}
                className="text-white bg-black rounded-md hover:cursor-pointer text-[17px] px-2 border border-gray-500 hover:font-bold hover:underline flex items-center gap-1 max-[750px]:text-[12px]"> <FaGithub /> Source Code</button>
            </div>
          </div>


        </div>

      </div>








      {/* This is for swiggy */}
      <div className="swiggy h-[40vh] flex pt-5">
        {/* This is the left part and This is for Img  */}
        <div className="leftpartforImg w-full h-[40vh]">
          <img src={SwiggyImg} alt="Swiggy Clone" className="w-full rounded-lg  h-[40vh] border border-white max-[750px]:w-full" />
        </div>





        {/* This is the right part and This is for contant   Clone*/}
        <div className="rightpartforcontant  border border-gray-800 rounded-xl w-full h-[40vh] max-[750px]:w-full ">

          {/* This is for featured */}
          <div className="featured flex justify-between mt-3 ml-7">
            <span className="px-3 py-1 text-orange-500 border border-orange-500 rounded-md text-sm max-[750px]:text-xs">
              Featured Project
            </span>

            <span className="px-3 py-1 text-orange-500 border border-orange-500 rounded-md text-sm mr-5 max-[750px]:text-xs max-[750px]:ml-3">
              Featured
            </span>
          </div>


          {/* This is the heading of the project or name*/}
          <div className="headingogproject">
            <h1 className="text-orange-500 font-bold text-2xl ml-7 mt-2 max-[750px]:text-md">Swiggy <span className="text-white">Clone</span></h1>
          </div>

          {/* This is the paragrph of the Spotify  */}
          <div className="paragrapg">
            <p className="text-white ml-7 text-sm max-[750px]:text-[10px]">A responsive Swiggy-inspired food and grocery delivery web application featuring restaurant browsing, grocery shopping, category filters, and a modern user experience.
            </p>
          </div>


          {/* This is key feature heading */}
          <div className="keyfeatureheading">
            <h3 className="text-orange-500 ml-7 text-xl mt-2 max-[750px]:text-md">Key Features</h3>
          </div>

          {/* featured Available  */}
          <div className="featureAvailable flex gap-11 ml-7">

            {/* left part available feature */}
            <div className="featureAvailableleftside">
              <ul className="mt-3 space-y-2 text-gray-300">
                <li className="flex gap-3 text-xs max-[750px]:text-[10px]">
                  <FaCheckCircle className="text-orange-500" />
                  Food & Grocery
                </li>

                <li className="flex gap-3 text-xs max-[750px]:text-[10px]">
                  <FaCheckCircle className="text-orange-500" />
                  Veg/Non-Veg Filter
                </li>

                <li className="flex gap-3 text-xs max-[750px]:text-[10px]">
                  <FaCheckCircle className="text-orange-500" />
                  Restaurant & Grocery Listings
                </li>
              </ul>

            </div>

            {/* right part available feature */}
            <div className="featureAvailablerightside">
              <ul className="mt-3 space-y-2 text-gray-300">

                <li className="flex gap-3 text-xs max-[750px]:text-[10px]">
                  <FaCheckCircle className="text-orange-500" />
                  Responsive Design
                </li>

                <li className="flex gap-3 text-xs max-[750px]:text-[10px]">
                  <FaCheckCircle className="text-orange-500" />
                  Add to Cart & Cart Management
                </li>

                <li className="flex gap-3 text-xs max-[750px]:text-[10px]">
                  <FaCheckCircle className="text-orange-500" />
                  Smooth UI/UX
                </li>
              </ul>

            </div>
          </div>


          {/* button for cheking live and source code */}
          <div className="buttons flex justify-around mt-5">

            {/* Live project button */}
            <div className="LiveDemo ">
              <button onClick={() =>
                window.open("https://buildrajswiggyclone.netlify.app/", "_blank")}
                className="text-white bg-orange-500 rounded-md hover:cursor-pointer text-[17px] px-2 hover:bg-orange-600 hover:font-bold hover:underline flex items-center gap-1 max-[750px]:text-[12px]"> <FaExternalLinkAlt /> Live Demo</button>
            </div>

            {/* Source Code button */}
            <div className="SourceCode">
              <button onClick={() =>
                window.open("https://github.com/RAJMAHMMAD0786/Swiggy-Clone", "_blank")}
                className="text-white bg-black rounded-md hover:cursor-pointer text-[17px] px-2 border border-gray-500 hover:font-bold hover:underline flex items-center gap-1 max-[750px]:text-[12px]"> <FaGithub /> Source Code</button>
            </div>
          </div>


        </div>
      </div>





    </div>
  );
}

export default Projects;