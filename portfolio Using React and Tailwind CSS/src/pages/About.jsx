import { IoIosContact } from "react-icons/io";
import { IoMdDownload } from "react-icons/io";

// cap
import { FaGraduationCap } from "react-icons/fa";
import { FaUniversity } from "react-icons/fa";
import { FaCalendarDays } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { BiSolidGraduation } from "react-icons/bi";
import { GoGoal } from "react-icons/go";


function About() {
  return (
    <div className="Aboutpage bg-slate-950 px-1 w-full h-[85vh] max-[750px]:h-[95vh] flex max-[750px]:px-3 max-[750px]:w-full">

      {/* This is the left parts of the page */}
      <div className="leftpart w-[60%] pl-7 max-[750px]:w-[60%] ">

        {/* This is the Heading of the left part */}
        <div className="heading">
          <h1 className="text-white text-3xl font-bold mb-4 flex items-center gap-3 max-[750px]:justify-center"> <IoIosContact className="text-[#00A8FF] text-5xl" /> About <span className="text-blue-500">Me</span></h1>

          {/* This is the lining below the About Me */}
          <div className="w-52 h-[0.5px] bg-blue-500 mt-0 ml-1 max-[750px]:ml-6"></div>
        </div>


        {/* This is the About section */}
        <div className="Aboutsection">
          {/* This is the heading of the Aabout sections */}
          <div className="headingofAbout">
            <h2 className="text-white pt-5 font-bold text-2xl">Hello! I'm <span className="text-blue-500">Raj Mahmmad</span></h2>
          </div>

          {/* Paragraph of the About sections  */}
          <div className="paragraphofAbout">
            <p className="text-white pt-3 text-md max-[750px]:text-xs">I am a B.Tech Computer Science and Engineering student at <span className="text-blue-500 max-[750px]:text-xs">NIMS University</span> with a strong interest in software development and problem-solving. I enjoy building responsive and user-friendly web applications while continuously improving my technical skills.</p>

            <p className="text-white pt-3 text-md max-[750px]:text-xs">I have experience with <span className="text-blue-500 max-[750px]:text-xs">C++, Data Structures & Algorithms, HTML, CSS, JavaScript, React, Node.js, Express.js, and MongoDB.</span> I have also solved 90+ LeetCode problems, which have strengthened my analytical and coding abilities.</p>

            <p className="text-white pt-3 text-md max-[750px]:text-xs">My goal is to become a <span className="text-blue-500 max-[750px]:text-xs">Full-Stack Developer</span> and contribute to innovative projects that create meaningful real-world impact. I am always eager to learn new technologies and take on new challenges that help me grow as a developer.</p>
          </div>

          {/* This is the Resume */}
          <a href="/RajMahmmad_Frontend.pdf" download className="text-blue-500 flex items-center gap-2 border border-blue-500 w-48 h-10 mt-7 pl-3 rounded-xl  hover:cursor-pointer hover:bg-[#1242a26c] hover:underline max-[750px]:px-1 max-[450px]:py-1" > <IoMdDownload /> Download Resume </a>

          {/* This is the coding stats */}
          <div className="codingStatsbox w-10/12 h-36 rounded-md bg-[#031224] mt-5 max-[750px]:h-52">

            {/* This is the heading */}
            <div className="headingofcodingStats">
              <h2 className="text-white pt-3 pl-2">Coding Stats</h2>
            </div>

            {/* codechef information diya ja raha hai */}
            <div className="codechefinfo mt-3 flex  max-[750px]:flex-wrap max-[750px]:gap-1">

              {/* Problem solve  */}
              <div className="problemsolvebox w-36 h-16 bg-[#071B36] border border-[#0E2A52] text-gray-500 ml-7 rounded-md  max-[750px]:w-18  max-[750px]:h-16 max-[750px]:text-xs max-[750px]:pl-1 max-[750px]:ml-1">
                <p className="font-bold pl-14 text-blue-500 hover:cursor-pointer max-[750px]:pl-5">750+</p>
                <p className="font-bold text-[11px] pl-9 pt-1 hover:cursor-pointer max-[750px]:pl-2">Problem Solve</p>
              </div>

              {/* contests */}
              <div className="problemsolvebox w-36 h-16 bg-[#071B36] border border-[#0E2A52] text-gray-500 ml-7 rounded-md  max-[750px]:w-18  max-[750px]:h-16 max-[750px]:text-xs max-[750px]:pl-1 max-[750px]:ml-1">
                <p className="font-bold pl-14 text-blue-500 hover:cursor-pointer max-[750px]:pl-5">8+</p>
                <p className="font-bold text-[11px] pl-9 pt-1 hover:cursor-pointer max-[750px]:pl-2">Contests</p>
              </div>

              {/* Maintaining streak */}
              <div className="problemsolvebox w-36 h-16 bg-[#071B36] border border-[#0E2A52] text-gray-500 ml-7 rounded-md max-[750px]:w-18  max-[750px]:h-16 max-[750px]:text-xs max-[750px]:pl-1 max-[750px]:ml-1 max-[750px]:mt-3">
                <p className="font-bold pl-14 text-blue-500 hover:cursor-pointer max-[750px]:pl-5">50+</p>
                <p className="font-bold text-[11px] pl-9 pt-1 hover:cursor-pointer max-[750px]:pl-2">Maintaining streak</p>
              </div>

              {/* CodeChef Rating */}
              <div className="problemsolvebox w-36 h-16 bg-[#071B36] border border-[#0E2A52] text-gray-500 ml-7 rounded-md max-[750px]:w-18  max-[750px]:h-16 max-[750px]:text-xs max-[750px]:pl-1 max-[750px]:ml-1 max-[750px]:mt-3">
                <p className="font-bold pl-14 text-blue-500 hover:cursor-pointer max-[750px]:pl-5">1136</p>
                <p className="font-bold text-[11px] pl-9 pt-1 hover:cursor-pointer max-[750px]:pl-2">CodeChef Rating</p>
              </div>

            </div>
          </div>
        </div>
      </div>


      {/* This is the right parts of the heading */}
      <div className="rightpart w-[40%] max-[750px]:w-[40%]">


        {/* personal Information this is the first card in right side */}
        <div className="personalInfobox w-[60%] bg-[#031224] h-65 ml-36 mt-5 rounded-xl border border-[#09203d] max-[750px]:w-full max-[750px]:ml-3 max-[750px]:mt-0">

          {/* heading of personal information */}
          <div className="heading pl-3 pt-2">
            <h3 className="text-white text-xl font-bold mb-1 flex items-center gap-1 max-[750px]:justify-center max-[750px]:text-xs "> <IoIosContact className="text-[#00A8FF] text-2xl" />Personal Info</h3>

            {/* This is the lining below the About Me */}
            <div className="w-36 h-px rounded-full mt-1 ml-1 bg-[linear-gradient(to_right,#22d3ee,#3b82f6,transparent)] max-[750px]:ml-7"></div>
          </div>

          {/* This is the Students information */}
          <div className="Studentinfo pl-3 pt-2 flex flex-col justify-center">

            {/* This is the name of the students */}
            <div className="name flex">
              <h5 className="text-blue-500 text-sm font-bold mb-1 flex items-center gap-1 max-[750px]:justify-center max-[750px]:text-xs"> <IoIosContact />Name:</h5>

              <p className="text-white pl-20 max-[750px]:pl-3 max-[750px]:text-[9px]">Raj Mahmmad</p>
            </div>

            {/* This is the lining below the Name */}
            <div className="w-[90%] border-t border-gray-800 mx-auto mt-2 max-[750px]:mt-3"></div>


            {/* This is the Degree of the students */}
            <div className="Degree flex">
              <h5 className="text-blue-500 text-sm font-bold mb-1 flex items-center gap-1 max-[750px]:justify-center max-[750px]:text-xs"> <FaGraduationCap/>Degree:</h5>

              <p className="text-white pl-18 max-[750px]:pl-3 max-[750px]:text-[9px]">B Tech (CSE)</p>
            </div>

            {/* This is the lining below the Name */}
            <div className="w-[90%] border-t border-gray-800 mx-auto mt-2 max-[750px]:mt-3"></div>

            {/* This is the University of the students */}
            <div className="University flex">
              <h5 className="text-blue-500 text-sm font-bold mb-1 flex items-center gap-1 max-[750px]:justify-center max-[750px]:text-xs"> <FaUniversity />University:</h5>

              <p className="text-white pl-16 max-[750px]:pl-3 max-[750px]:text-[9px]">Nims University</p>
            </div>

            {/* This is the lining below the Name */}
            <div className="w-[90%] border-t border-gray-800 mx-auto mt-2 max-[750px]:mt-3"></div>

            {/* This is the Batch of the students */}
            <div className="Batch flex">
              <h5 className="text-blue-500 text-sm font-bold mb-1 flex items-center gap-1 max-[750px]:justify-center max-[750px]:text-xs"><FaCalendarDays />Batch:</h5>

              <p className="text-white pl-20 max-[750px]:pl-7 max-[750px]:text-[9px]">2023 - 2027</p>
            </div>

            {/* This is the lining below the Name */}
            <div className="w-[90%] border-t border-gray-800 mx-auto mt-2  max-[750px]:mt-3"></div>

            {/* This is the Location of the students */}
            <div className="Location flex">
              <h5 className="text-blue-500 text-sm font-bold mb-1 flex items-center gap-1 max-[750px]:justify-cente  max-[750px]:text-xs"><IoLocationOutline />Location:</h5>

              <p className="text-white pl-16 max-[750px]:pl-3 max-[750px]:text-[9px]">Jaipur ,India</p>
            </div>

            {/* This is the lining below the Name */}
            <div className="w-[90%] border-t border-gray-800 mx-auto mt-2 max-[750px]:mt-3"></div>

            {/* This is the Email of the students */}
            <div className="Email flex">
              <h5 className="text-blue-500 text-sm font-bold mb-1 flex items-center gap-1 max-[750px]:justify-center max-[750px]:text-xs"><MdEmail />Email:</h5>

              <p className="text-white pl-16 max-[750px]:pl-3 max-[750px]:text-[6px]">rajalam05588@gmail.com</p>
            </div>

          </div>

        </div>





        {/* Education this is the Second card in right side*/}
        <div className="Education w-[60%] bg-[#031224] h-32 ml-36 mt-5 rounded-xl border border-[#09203d] max-[750px]:w-full max-[750px]:ml-3">

          {/* heading of Eduaction information */}
          <div className="heading pl-3 pt-2 max-[750px]:pl-1">
            <h5 className="text-white text-md font-bold mb-1 flex items-center gap-1 max-[750px]:justify-center "><BiSolidGraduation className="text-[#00A8FF] text-xl" />Education</h5>

            {/* This is the lining below the About Me */}
            <div className="w-24 h-px rounded-full mt-1 ml-1 bg-[linear-gradient(to_right,#22d3ee,#3b82f6,transparent)] max-[750px]:w-16 max-[750px]:ml-7"></div>

          </div>

          {/* B Tech (CSE) */}
          <div className="Engg">
            <h5 className="text-blue-500 pl-3 pt-2 max-[750px]:text-xs">B Tech Computer Science and Engineering</h5>
            <p className="text-white pl-3 pt-1 max-[750px]:text-sm">NIMS University</p>
            <p className="text-white pl-3 pt-1 max-[750px]:text-sm">2023 - 2027</p>
          </div>

        </div>




        {/* Career Goal this is the third card in right side */}
        <div className="CareerGoal w-[60%] bg-[#031224] h-32 ml-36 mt-5 rounded-xl border border-[#09203d] max-[750px]:w-full max-[750px]:ml-3 max-[750px]:h-60">

          {/* heading of Career Goal information */}
          <div className="heading pl-3 pt-2">
            <h5 className="text-white text-md font-bold mb-1 flex items-center gap-1 max-[750px]:justify-center "><GoGoal className="text-[#00A8FF] text-xl" />Career Goal</h5>

            {/* This is the lining below the About Me */}
            <div className="w-24 h-px rounded-full mt-1 ml-1 bg-[linear-gradient(to_right,#22d3ee,#3b82f6,transparent)] max-[750px]:w-16 max-[750px]:ml-7"></div>

          </div>

          <p className="text-white pl-3 pt-1 text-xs max-[750px]:text-sm ">To obtain a Software Developer role where I can utilize my technical skills, gain practical experience, and contribute to the success of the organization while growing professionally.</p>


        </div>


      </div>


    </div>
  );
}

export default About;