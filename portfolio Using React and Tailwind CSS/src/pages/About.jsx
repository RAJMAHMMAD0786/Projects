import { IoIosContact } from "react-icons/io";

import { IoMdDownload } from "react-icons/io";


function About() {
  return (
    <div className="Aboutpage bg-slate-950 h-[85vh] px-7 py-3 max-[750px]:h-[90vh]">

      {/* This is the Heading of the left part */}
      <div className="heading">
        <h1 className="text-white text-3xl font-bold mb-4 flex items-center gap-3 max-[750px]:justify-center"> <IoIosContact className="text-[#00A8FF] text-5xl" /> About <span className="text-blue-500">Me</span></h1>

        <div className="w-52 h-[0.5px] bg-blue-500 mt-0 ml-1 max-[750px]:ml-24"></div>
      </div>

      {/* This is the left parts of the page */}
      <div className="leftpart w-[60%]">

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
              <div className="problemsolvebox w-36 h-16 bg-[#071B36] border border-[#0E2A52] text-gray-500 ml-7 rounded-md  max-[750px]:w-20  max-[750px]:h-16 max-[750px]:text-xs max-[750px]:pl-1 max-[750px]:ml-1">
                <p className="font-bold pl-14 text-blue-500 max-[750px]:pl-5">750+</p>
                <p className="font-bold text-[11px] pl-9 pt-1 max-[750px]:pl-2">Problem Solve</p>
              </div>

              {/* contests */}
              <div className="problemsolvebox w-36 h-16 bg-[#071B36] border border-[#0E2A52] text-gray-500 ml-7 rounded-md  max-[750px]:w-20  max-[750px]:h-16 max-[750px]:text-xs max-[750px]:pl-1 max-[750px]:ml-1">
                <p className="font-bold pl-14 text-blue-500 max-[750px]:pl-5">8+</p>
                <p className="font-bold text-[11px] pl-9 pt-1 max-[750px]:pl-2">Contests</p>
              </div>

              {/* Maintaining streak */}
              <div className="problemsolvebox w-36 h-16 bg-[#071B36] border border-[#0E2A52] text-gray-500 ml-7 rounded-md max-[750px]:w-20  max-[750px]:h-16 max-[750px]:text-xs max-[750px]:pl-1 max-[750px]:ml-1 max-[750px]:mt-3">
                <p className="font-bold pl-14 text-blue-500 max-[750px]:pl-5">50+</p>
                <p className="font-bold text-[11px] pl-9 pt-1 max-[750px]:pl-2">Maintaining streak</p>
              </div>

              {/* CodeChef Rating */}
              <div className="problemsolvebox w-36 h-16 bg-[#071B36] border border-[#0E2A52] text-gray-500 ml-7 rounded-md max-[750px]:w-20  max-[750px]:h-16 max-[750px]:text-xs max-[750px]:pl-1 max-[750px]:ml-1 max-[750px]:mt-3">
                <p className="font-bold pl-14 text-blue-500 max-[750px]:pl-5">1136</p>
                <p className="font-bold text-[11px] pl-9 pt-1 max-[750px]:pl-2">CodeChef Rating</p>
              </div>

            </div>

          </div>

        </div>


      </div>

      {/* This is the right parts of the heading */}
      <div className="rightpart">

      </div>
    </div>
  );
}

export default About;