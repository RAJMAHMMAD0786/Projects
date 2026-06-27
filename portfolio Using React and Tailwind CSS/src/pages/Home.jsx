import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { SiCodechef } from "react-icons/si";

import profileImg from "../assets/profile.jpeg";

// This is used for link the projects and contact buttons 
import { Link } from "react-router-dom";

import { FaArrowRightLong } from "react-icons/fa6";
import { MdContactPhone } from "react-icons/md";

function Home() {
  return (
    <div className="homepage h-[85vh] bg-slate-950 flex max-[750px]:h-[90vh]">

      {/* This is the left part of the home page  */}
      <div className="leftpart w-[50%]  pt-19 pl-10 flex flex-col gap-2 max-[750px]:pt-10 max-[750px]:pl-5">

        {/* This is the paragraph  */}
        <p className="text-white max-[750px]:text-xl max-[750px]:pt-1">Hi, I'm</p>

        {/* This is the name of the students */}
        <div className="name">
          <h1 className="text-white font-bold text-3xl max-[750px]:text-2xl">Raj <span className="text-blue-700 font-bold text-3xl max-[750px]:text-2xl">Mahmmad</span></h1>
        </div>

        {/* This is the Aim of the Students */}
        <div className="Aim">
          <h2 className="text-white text-xl max-[750px]:text-sm max-[750px]:pt-3">B.Tech CSE Student | Aspiring <span className="text-blue-500 text-xl max-[750px]:text-xl">Full-Stack Developer</span></h2>
        </div>

        {/* This is the About of the Students  */}
        <div className="About">
          <p className="text-white text-md max-[750px]:text-md max-[750px]:pt-3">Computer Science student skilled in <span className="text-blue-500 text-md"> C++, Data Structures & Algorithms (DSA), HTML, CSS, JavaScript, and React</span>. Solved 90+ LeetCode problems and passionate about building responsive web applications and enhancing user experiences through modern frontend development. </p>
        </div>

        {/* This is the parts of the view project and contact me */}
        <div className="ProjectContact">

          {/* This is the buttons part */}
          <div className="buttons flex gap-11 mt-11 max-[750px]:mt-7 max-[750px]:gap-5">

            {/* This is the project view buttons  */}
            <div className="projectbutton">
              <Link to="/projects">
                <button className="text-white bg-blue-500 px-4 py-2 rounded-lg flex justify-center items-center gap-2 hover:cursor-pointer hover:bg-blue-700 max-[750px]:py-1  max-[750px]:px-1  max-[750px]:w-28 max-[750px]:text-xs">
                  View Projects <FaArrowRightLong />
                </button>
              </Link>
            </div>

            {/* This is the contact me buttons  */}
            <div className="contactme">
              <Link to="/contact">
                <button className="text-white bg-gray-950 border border-gray-700 px-4 py-2 rounded-lg flex justify-center items-center gap-2 hover:cursor-pointer hover:bg-gray-900 max-[750px]:py-1  max-[750px]:px-1  max-[750px]:w-28 max-[750px]:text-xs">
                  <MdContactPhone /> Contact Me 
                </button>
              </Link>
            </div>

          </div>

        </div>

        {/* This is way to connect the Students */}
        <div className="connect">
          <h3 className="text-white pt-11 font-bold max-[750px]:pt-7 max-[750px]:text-md">Connect With Me</h3>

          <div className="flex gap-7 mt-4 pl-10 max-[750px]:gap-5 max-[750px]:mt-5">
            {/* This is way to visit Students linkedin profile */}
            <a href="https://www.linkedin.com/in/rajmahmmad0786/" target="_blank" rel="noopener noreferrer" className="text-blue-500 text-3xl hover:cursor-pointer hover:scale-110 transition-all duration-300 max-[750px]:text-xl"> <FaLinkedin /> </a>

            {/* This is way to visit Students Github profile */}
            <a href="https://github.com/RAJMAHMMAD0786" target="_blank" rel="noopener noreferrer"
              className="text-blue-500 text-3xl hover:cursor-pointer hover:scale-110 transition-all duration-300 max-[750px]:text-xl" > <FaGithub /> </a>

            {/* This is way to visit Students LeetCode profile */}
            <a href="https://leetcode.com/u/RAJMAHMMAD0786/" target="_blank" rel="noopener noreferrer"
              className="text-blue-500 text-3xl hover:cursor-pointer hover:scale-110 transition-all duration-300 max-[750px]:text-xl" > <SiLeetcode /> </a>

            {/* This is way to visit Students CodeChef profile */}
            <a href="https://www.codechef.com/users/rajmahmmad0786" target="_blank" rel="noopener noreferrer"
              className="text-blue-500 text-3xl hover:cursor-pointer hover:scale-110 transition-all duration-300 max-[750px]:text-xl" > <SiCodechef /> </a>
          </div>

        </div>

      </div>

      {/* This is the right part of the home page */}
      <div className="rightpart pl-80 pt-15 max-[750px]:pl-5 max-[750px]:pr-0 max-[750px]:pt-10">

        <div className="relative inline-block">

          {/* This is the img of the Students */}
          <img src={profileImg} alt="Raj Mahmmad"
            className="w-80 h-80 rounded-full object-cover border-4 border-blue-500 max-[750px]:h-31 max-[750px]:w-32  "
          />

          {/* This is used for shadow around the img */}
          <div className="absolute inset-0 rounded-full border-4 border-blue-500 shadow-[0_0_40px_#00A8FF]"></div>
        </div>

        {/* CodeChef Information */}
        <div className="codechefinfo">

          <div className="headingofcodechef">
            <h3 className="text-white pt-11 font-bold max-[750px]:pt-3">CodeChef Stats</h3>
          </div>

          <div className="codechefbox flex justify-center items-center gap-3 w-auto h-16 bg-[#07111F] border border-[#16202f] rounded-xl mt-5 max-[750px]:text-11px max-[750px]:w-44 max-[750px]:mt-1">

            <div className="problemsolve text-gray-500 flex flex-col items-center">
              <p className="font-bold">750+</p>
              <p className="font-bold text-[11px] max-[750px]:text-[7px]">Problem Solve</p>
            </div>

            <div className="contests text-gray-500 flex flex-col items-center">
              <p className="font-bold">8+</p>
              <p className="font-bold text-[11px] max-[750px]:text-[7px]">Contests Participated</p>
            </div>

            <div className="consistency text-gray-500 flex flex-col items-center">
              <p className="font-bold">50+</p>
              <p className="font-bold text-[11px] max-[750px]:text-[7px]">Days of Consistency</p>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
}

export default Home;