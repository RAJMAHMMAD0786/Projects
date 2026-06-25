import { BiCodeAlt } from "react-icons/bi";
import { HiOutlineCubeTransparent } from "react-icons/hi";
import { TbBrandCpp } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io";
import { FaObjectGroup } from "react-icons/fa6";

import { FaGlobe } from "react-icons/fa";
import { IoLogoHtml5 } from "react-icons/io";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

import { FaServer } from "react-icons/fa6";
import { DiNodejs } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";

import { FaTools } from "react-icons/fa";
import { IoIosGitMerge } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { SiPostman } from "react-icons/si";


function Skills() {
  return (
    <div className="Skillspage h-[85vh] bg-slate-950 max-[750px]:h-[90vh]">

      {/* This is the parts of techanical skills  */}
      <div className="TechnicalSkills w-[80%] m-auto max-[750px]:w-full">

        {/* heading of this page */}
        <div className="heading pl-24 pt-5 max-[750px]:pl-1">
          <h1 className="text-white flex gap-3 text-3xl"> <BiCodeAlt className="text-blue-500 text-3xl" /> Technical Skills</h1>

          {/* This is the lining below the About Me */}
          <div className="w-48 h-px rounded-full mt-1 ml-10 bg-[linear-gradient(to_right,#22d3ee,#3b82f6,transparent)]"></div>
        </div>

        {/* I work with this tools and technology heading */}
        <div className="workwith">
          <p className="text-white text-sm pl-36 mt-2 max-[750px]:pl-10">Technologies and Tools I Work With</p>
        </div>





        {/* I Study these programing language */}
        <div className="ProgramingLanguage flex-wrap">

          {/* This is the heading of the programing language */}
          <div className="programinglanguageheading">
            {/* heading of the programing language */}
            <h2 className="text-white pl-24 pt-5 flex gap-3 text-xl max-[750px]:pl-1"> <HiOutlineCubeTransparent className="text-blue-500 text-xl" /> Programing Language</h2>
          </div>


          {/* This programing language Study and learn  */}
          <div className="programinglanguagecompleted flex-wrap ml-24 flex gap-5 max-[750px]:ml-1 max-[750px]:gap-2">

            {/* This is the cpp */}
            <div className="cpp text-white w-72 h-16 bg-[#06152B]  mt-3 rounded-xl flex gap-3 items-center hover:cursor-pointer hover:font-bold max-[750px]:w-32 max-[750px]:text-xs">

              {/* logo of the cpp */}
              <div className="cpplogo ml-5 max-[750px]:ml-1">
                <TbBrandCpp className="bg-blue-400 text-4xl rounded-xl" />
              </div>

              {/* Contant of the cpp */}
              <div className="content">
                <p className="text-white">C++</p>
                <span className="text-[#007ACC] bg-[#06152B] border border-[#042f5a] rounded-sm text-xs ml-1 mb-5 px-2 max-[750px]:text-[6px] max-[750px]:ml-0 max-[750px]:px-0">Advanced</span>
              </div>
            </div>



            {/* This is the OOPs */}
            <div className="cppwithOOPs text-white w-72 h-16 bg-[#06152B]  mt-3 rounded-xl flex gap-3 items-center hover:cursor-pointer hover:font-bold max-[750px]:w-32 max-[750px]:text-xs">

              {/* logo of the cpp */}
              <div className="CPPOOPslogo ml-5 max-[750px]:ml-1">
                <FaObjectGroup className="bg-[#2A174D] text-4xl rounded-xl text-[#C084FC]" />
              </div>

              {/* Contant of the OOPs */}
              <div className="content">
                <p className="text-white">OOPs</p>
                <span className="text-[#007ACC] bg-[#06152B] border border-[#042f5a] rounded-sm text-xs ml-1 mb-5 px-2 max-[750px]:text-[6px] max-[750px]:ml-0 max-[750px]:px-0">Intermediate</span>
              </div>
            </div>



            {/* This is the JavaScript */}
            <div className="JavaScript text-white w-72 h-16 bg-[#06152B]  mt-3 rounded-xl flex gap-3 items-center hover:cursor-pointer hover:font-bold max-[750px]:w-32 max-[750px]:text-xs">

              {/* logo of the cpp */}
              <div className="JavaScriptlogo ml-5 max-[750px]:ml-1 bg-amber-300">
                <IoLogoJavascript className="text-black text-4xl" />
              </div>

              {/* Contant of the cpp */}
              <div className="content">
                <p className="text-white">JavaScript</p>
                <span className="text-[#007ACC] bg-[#06152B] border border-[#042f5a] rounded-sm text-xs ml-1 mb-5 px-2 max-[750px]:text-[6px] max-[750px]:ml-0 max-[750px]:px-0">Intermediate</span>
              </div>
            </div>

          </div>
        </div>







        {/* Frontend Development */}

        {/* I Study these Frontend Development */}
        <div className="FrontendDevelopment">

          {/* This is the heading of the programing language */}
          <div className="FrontendDevelopmentheading">
            {/* heading of the programing language */}
            <h2 className="text-white pl-24 pt-5 flex gap-3 text-xl max-[750px]:pl-1"> <FaGlobe className="text-blue-500 text-xl" /> Frontend Development</h2>
          </div>


          {/* This Frontend Development Study and learn flex-wrap */}
          <div className="FrontendDevelopmentcompleted ml-24 flex gap-5 max-[750px]:ml-1 max-[750px]:gap-2 max-[750px]:flex-wrap">

            {/* This is the HTML5 */}
            <div className="HTML5 text-white w-53 h-16 bg-[#06152B]  mt-3 rounded-xl flex gap-3 items-center hover:cursor-pointer hover:font-bold max-[750px]:w-40 max-[750px]:text-xs">

              {/* logo of the HTML5 */}
              <div className="HTML5logo ml-5 max-[750px]:ml-1">
                <IoLogoHtml5 className=" text-orange-700 text-4xl rounded-xl" />
              </div>

              {/* Contant of the HTML5 */}
              <div className="content">
                <p className="text-white text-md">HTML5</p>
                <span className="text-[#007ACC] bg-[#06152B] border border-[#042f5a] rounded-sm text-xs ml-1 mb-5 px-2 max-[750px]:text-xs max-[750px]:ml-0 max-[750px]:px-0 max-[750px]:mr-2">Advance</span>
              </div>
            </div>



            {/* This is the CSS3 */}
            <div className="CSS3 text-white w-53 h-16 bg-[#06152B]  mt-3 rounded-xl flex gap-3 items-center hover:cursor-pointer hover:font-bold max-[750px]:w-40 max-[750px]:text-xs">

              {/* logo of the CSS3 */}
              <div className="CSS3logo ml-5 max-[750px]:ml-1">
                <FaCss3Alt className="text-4xl rounded-xl text-blue-500" />
              </div>

              {/* Contant of the CSS3 */}
              <div className="content">
                <p className="text-white text-md">CSS3</p>
                <span className="text-[#007ACC] bg-[#06152B] border border-[#042f5a] rounded-sm text-xs ml-1 mb-5 px-2 max-[750px]:text-xs max-[750px]:ml-0 max-[750px]:px-0">Advanced</span>
              </div>
            </div>



            {/* This is the React.js */}
            <div className="Reactjs text-white w-53 h-16 bg-[#06152B]  mt-3 rounded-xl flex gap-3 items-center hover:cursor-pointer hover:font-bold max-[750px]:w-40 max-[750px]:text-xs">

              {/* logo of the React.js */}
              <div className="Reactjslogo ml-5 max-[750px]:ml-1">
                <FaReact className=" text-4xl text-[#007ACC]" />
              </div>

              {/* Contant of the React.js */}
              <div className="content">
                <p className="text-white text-md">React.js</p>
                <span className="text-[#007ACC] bg-[#06152B] border border-[#042f5a] rounded-sm text-xs ml-1 mb-5 px-2 max-[750px]:text-xs max-[750px]:ml-0 max-[750px]:px-0">Intermediate</span>
              </div>
            </div>

            {/* This is the Tailwind CSS */}
            <div className="TailwindCSS text-white w-53 h-16 bg-[#06152B]  mt-3 rounded-xl flex gap-3 items-center hover:cursor-pointer hover:font-bold max-[750px]:w-40 max-[750px]:text-xs">

              {/* logo of the Tailwind CSS */}
              <div className="TailwindCSSlogo ml-5 max-[750px]:ml-1">
                <RiTailwindCssFill className="text-4xl text-[#086fb4]" />
              </div>

              {/* Contant of the Tailwind CSS */}
              <div className="content">
                <p className="text-white text-md">Tailwind CSS</p>
                <span className="text-[#007ACC] bg-[#06152B] border border-[#042f5a] rounded-sm text-xs ml-1 mb-5 px-2 max-[750px]:text-xs max-[750px]:ml-0 max-[750px]:px-0">Advanced</span>
              </div>
            </div>

          </div>
        </div>




        {/* Backend Development */}
        {/* I Study these Backend Development */}
        <div className="BackendDevelopment">

          {/* This is the heading of the Backend Development */}
          <div className="BackendDevelopmentheading">
            {/* heading of the Backend Development */}
            <h2 className="text-white pl-24 pt-5 flex gap-3 text-xl max-[750px]:pl-1"> <FaServer className="text-blue-500 text-xl" />Backend Development</h2>
          </div>


          {/* This Backend Development Study and learn  */}
          <div className="BackendDevelopmentcompleted flex-wrap ml-24 flex gap-5 max-[750px]:ml-1 max-[750px]:gap-2">

            {/* This is the Node.js */}
            <div className="Nodejs text-white w-72 h-16 bg-[#06152B]  mt-3 rounded-xl flex gap-3 items-center hover:cursor-pointer hover:font-bold max-[750px]:w-32 max-[750px]:text-xs">

              {/* logo of the Node.js */}
              <div className="Nodejslogo ml-5 max-[750px]:ml-1">
                <DiNodejs className="text-8xl rounded-xl text-green-500 max-[750px]:text-4xl" />
              </div>

              {/* Contant of the Node.js */}
              <div className="content">
                <p className="text-white">Node.js</p>
                <span className="text-[#007ACC] bg-[#06152B] border border-[#042f5a] rounded-sm text-xs ml-1 mb-5 px-2 max-[750px]:text-[6px] max-[750px]:ml-0 max-[750px]:px-0">Intermediate</span>
              </div>
            </div>



            {/* This is the Express.js */}
            <div className="Expressjs text-white w-72 h-16 bg-[#06152B]  mt-3 rounded-xl flex gap-3 items-center hover:cursor-pointer hover:font-bold max-[750px]:w-32 max-[750px]:text-xs">

              {/* logo of the Express.js */}
              <div className="Expressjslogo ml-5 max-[750px]:ml-1">
                <SiExpress className="bg-black text-4xl rounded-xl text-white" />
              </div>

              {/* Contant of the Express.js */}
              <div className="content">
                <p className="text-white">Express.js</p>
                <span className="text-[#007ACC] bg-[#06152B] border border-[#042f5a] rounded-sm text-xs ml-1 mb-5 px-2 max-[750px]:text-[6px] max-[750px]:ml-0 max-[750px]:px-0">Intermediate</span>
              </div>
            </div>



            {/* This is the MongoDB */}
            <div className="MongoDB text-white w-72 h-16 bg-[#06152B]  mt-3 rounded-xl flex gap-3 items-center hover:cursor-pointer hover:font-bold max-[750px]:w-32 max-[750px]:text-xs">

              {/* logo of the MongoDB */}
              <div className="JavaScriptlogo ml-5 max-[750px]:ml-1 ">
                <DiMongodb className="text-green-500 text-4xl" />
              </div>

              {/* Contant of the MongoDB */}
              <div className="content">
                <p className="text-white">MongoDB</p>
                <span className="text-[#007ACC] bg-[#06152B] border border-[#042f5a] rounded-sm text-xs ml-1 mb-5 px-2 max-[750px]:text-[6px] max-[750px]:ml-0 max-[750px]:px-0">Intermediate</span>
              </div>
            </div>

          </div>
        </div>





        {/* Tools & Platforms */}
        {/* I Study these Tools & Platforms */}
        <div className="ToolsandPlatforms">

          {/* This is the heading of the Tools & Platforms */}
          <div className="ToolsandPlatformsheading">
            {/* heading of the Tools & Platforms */}
            <h2 className="text-white pl-24 pt-5 flex gap-3 text-xl max-[750px]:pl-1"> <FaTools className="text-blue-500 text-xl" />Tools & Platforms</h2>
          </div>


          {/* This Tools & Platforms Study and learn */}
          <div className="ToolsandPlatformscompleted ml-24 flex gap-5 max-[750px]:ml-1 max-[750px]:gap-2 max-[750px]:flex-wrap">

            {/* This is the Git */}
            <div className="Git text-white w-53 h-16 bg-[#06152B]  mt-3 rounded-xl flex gap-3 items-center hover:cursor-pointer hover:font-bold max-[750px]:w-40 max-[750px]:text-xs">

              {/* logo of the Git */}
              <div className="Gitlogo ml-5 max-[750px]:ml-1">
                <IoIosGitMerge className=" bg-orange-700 text-black text-4xl rounded-xl" />
              </div>

              {/* Contant of the Git */}
              <div className="content">
                <p className="text-white text-md">Git</p>
              </div>
            </div>



            {/* This is the GitHub */}
            <div className="GitHub text-white w-53 h-16 bg-[#06152B]  mt-3 rounded-xl flex gap-3 items-center hover:cursor-pointer hover:font-bold max-[750px]:w-40 max-[750px]:text-xs">

              {/* logo of the GitHub */}
              <div className="GitHublogo ml-5 max-[750px]:ml-1">
                <FaGithub className="text-4xl rounded-xl text-white" />
              </div>

              {/* Contant of the GitHub */}
              <div className="content">
                <p className="text-white text-md">GitHub</p>
              </div>
            </div>



            {/* This is the VS Code */}
            <div className="VSCode text-white w-53 h-16 bg-[#06152B]  mt-3 rounded-xl flex gap-3 items-center hover:cursor-pointer hover:font-bold max-[750px]:w-40 max-[750px]:text-xs">

              {/* logo of the VS Code */}
              <div className="VSCodelogo ml-5 max-[750px]:ml-1">
                <VscVscode className=" text-4xl text-[#007ACC]" />
              </div>

              {/* Contant of the VS Code */}
              <div className="content">
                <p className="text-white text-md">VS Code</p>
              </div>
            </div>

            {/* This is the Postman */}
            <div className="Postman text-white w-53 h-16 bg-[#06152B]  mt-3 rounded-xl flex gap-3 items-center hover:cursor-pointer hover:font-bold max-[750px]:w-40 max-[750px]:text-xs">

              {/* logo of the Postman */}
              <div className="Postmanlogo ml-5 max-[750px]:ml-1">
                <SiPostman className="text-4xl text-orange-700" />
              </div>

              {/* Contant of the Postman */}
              <div className="content">
                <p className="text-white text-md">Postman</p>
              </div>
            </div>

          </div>
        </div>


      </div>


    </div>
  );
}

export default Skills;