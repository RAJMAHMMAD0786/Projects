import { IoIosContact } from "react-icons/io";


function About() {
  return (
    <div className="Aboutpage bg-slate-950 h-[85vh] px-7 py-3">

      <div className="leftpart">

        {/* This is the Heading of the left part */}
        <div className="heading">
          <h1 className="text-white text-3xl font-bold mb-4 flex items-center gap-3"> <IoIosContact className="text-[#00A8FF] text-5xl" /> About <span className="text-blue-500">Me</span></h1>

         <div className="w-52 h-[0.5px] bg-blue-500 mt-0 ml-1"></div>
        </div>


      </div>

      <div className="rightpart">

      </div>
    </div>
  );
}

export default About;