import { BiCodeAlt } from "react-icons/bi";
import { HiOutlineCubeTransparent } from "react-icons/hi";

function Skills() {
  return (
    <div className="Skillspage h-[85vh] bg-slate-950 flex max-[750px]:h-[90vh]">

      {/* This is the parts of techanical skills  */}
      <div className="TechnicalSkills">

        {/* heading of this page */}
        <div className="heading ml-12 mt-5">
          <h1 className="text-white flex justify-center items-center gap-3 text-3xl"> <BiCodeAlt className="text-blue-500 text-3xl" /> Technical Skills</h1>

          {/* This is the lining below the About Me */}
          <div className="w-48 h-px rounded-full mt-1 ml-10 bg-[linear-gradient(to_right,#22d3ee,#3b82f6,transparent)]"></div>
        </div>

        {/* I work with this tools heading */}
        <div className="workwith">
          <p className="text-white text-sm pl-36 mt-2">Technologies and Tools I Work With</p>
        </div>

        
        {/* I Study these programing language */}
        <div className="ProgramingLanguage">

          {/* heading of the programing language */}
          <div className="headingofPL">
            <h2 className="text-white pl-14 pt-5 flex justify-center items-center gap-3 text-xl"> <HiOutlineCubeTransparent className="text-blue-500 text-xl" /> Programing Language</h2>
          </div>


        </div>



      </div>



    </div>
  );
}

export default Skills;