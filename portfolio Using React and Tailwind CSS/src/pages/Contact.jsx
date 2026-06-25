import { TfiEmail } from "react-icons/tfi";
import { FaPhoneAlt } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import { FiUser } from "react-icons/fi";
import { MdOutlineSubject } from "react-icons/md";
import { MdMessage } from "react-icons/md";
import { IoIosSend } from "react-icons/io";

function Contact() {
  return (
    <div className="Contactpage h-[85vh] bg-slate-950 max-[750px]:h-[90vh] flex">

      {/* Left parts of the page  */}
      <div className="leftparts w-1/2 pl-20 pt-5 max-[750px]:pl-10">

        {/* heding of the left parts */}
        <div className="GetInTouch">
          <h1 className="text-white text-4xl flex items-center gap-3 max-[750px]:text-sm"> <TfiEmail className="text-blue-500 bg-[#06152B] rounded-md border border-blue-500 px-2 py-2 text-4xl " /> Get <span className="text-blue-500">In Touch</span></h1>
        </div>

        {/* This is the lining below the Get In Touch */}
        <div className="w-36 h-px rounded-full mt-1 ml-1 bg-[linear-gradient(to_right,#22d3ee,#3b82f6,transparent)] max-[750px]:ml-7"></div>

        {/* paragraph yani About  */}
        <div className="paragraph">
          <p className="text-white pt-3 text-md max-[750px]:text-sm">I'm a Frontend Developer passionate about creating responsive and user-friendly web applications. I'm currently looking for internship and entry-level opportunities. Whether you have a project, collaboration, or job opportunity, feel free to send me a message. I'll get back to you as soon as possible.</p>
        </div>

        {/* email  */}
        <div className="Email flex gap-3 items-center pt-3">
          {/* logo of the Email */}
          <div className="Emaillogo">
            <TfiEmail className="text-blue-500 bg-[#06152B] rounded-md border border-blue-500 px-2 py-2 text-4xl" />
          </div>

          {/* Contant of the Email */}
          <div className="content">
            <p className="text-white">Email</p>
            <span className="text-gray-500 bg-[#06152B] text-xs ml-1 mb-5 px-2 max-[750px]:text-[6px] max-[750px]:ml-0 max-[750px]:px-0">rajalam05588@gmail.com</span>
          </div>

        </div>

        {/* This is the lining below the Email */}
        <div className="w-[99%] border-t border-gray-900 mx-auto mt-2 max-[750px]:mt-3"></div>

        {/* Phone  */}
        <div className="Phone flex gap-3 items-center pt-3">
          {/* logo of the Phone */}
          <div className="Phonelogo">
            <FaPhoneAlt className="text-blue-500 bg-[#06152B] rounded-md border border-blue-500 px-2 py-2 text-4xl" />
          </div>

          {/* Contant of the Phone */}
          <div className="content">
            <p className="text-white">Phone</p>
            <span className="text-gray-500 bg-[#06152B] text-xs ml-1 mb-5 px-2 max-[750px]:text-[6px] max-[750px]:ml-0 max-[750px]:px-0">8676841368</span>
          </div>

        </div>

        {/* This is the lining below the phone */}
        <div className="w-[99%] border-t border-gray-900 mx-auto mt-2 max-[750px]:mt-3"></div>


        {/* Location  */}
        <div className="Location flex gap-3 items-center pt-3">
          {/* logo of the Location */}
          <div className="Locationlogo">
            <CiLocationOn className="text-blue-500 bg-[#06152B] rounded-md border border-blue-500 px-2 py-2 text-4xl" />
          </div>

          {/* Contant of the Location */}
          <div className="content">
            <p className="text-white">Location</p>
            <span className="text-gray-500 bg-[#06152B] text-xs ml-1 mb-5 px-2 max-[750px]:text-[6px] max-[750px]:ml-0 max-[750px]:px-0">Jaipur ,Rajasthan, India</span>
          </div>

        </div>

        {/* This is the lining below the Location */}
        <div className="w-[99%] border-t border-gray-900 mx-auto mt-2 max-[750px]:mt-3"></div>


        {/* LinkedIn  */}
        <div className="LinkedIn flex gap-3 items-center pt-3">
          {/* logo of the LinkedIn */}
          <div className="LinkedInlogo">
            <FaLinkedin className="text-blue-500 bg-[#06152B] rounded-md border border-blue-500 px-2 py-2 text-4xl" />
          </div>

          {/* Contant of the LinkedIn */}
          <div className="content">
            <p className="text-white">LinkedIn</p>
            <span onClick={() =>
              window.open("https://www.linkedin.com/in/rajmahmmad0786/", "_blank")} className="text-gray-500 bg-[#06152B] text-xs ml-1 mb-5 px-2 hover:cursor-pointer hover:bg-[#010e1f] max-[750px]:text-[6px] max-[750px]:ml-0 max-[750px]:px-0">https://www.linkedin.com/in/rajmahmmad0786/</span>
          </div>

        </div>

        {/* This is the lining below the LinkedIn */}
        <div className="w-[99%] border-t border-gray-900 mx-auto mt-2 max-[750px]:mt-3"></div>


        {/* GitHub  */}
        <div className="GitHub flex gap-3 items-center pt-3">
          {/* logo of the GitHub */}
          <div className="GitHublogo">
            <FaGithub className="text-blue-500 bg-[#06152B] rounded-md border border-blue-500 px-2 py-2 text-4xl" />
          </div>

          {/* Contant of the GitHub */}
          <div className="content">
            <p className="text-white">GitHub</p>
            <span onClick={() =>
              window.open("https://github.com/RAJMAHMMAD0786", "_blank")} className="text-gray-500 bg-[#06152B] text-xs ml-1 mb-5 px-2 hover:cursor-pointer hover:bg-[#010e1f] max-[750px]:text-[6px] max-[750px]:ml-0 max-[750px]:px-0">https://www.linkedin.com/in/rajmahmmad0786/</span>
          </div>

        </div>

        {/* This is the lining below the GitHub */}
        <div className="w-[99%] border-t border-gray-900 mx-auto mt-2 max-[750px]:mt-3"></div>

        {/* somecontant */}
        <div className="somecontant bg-[#071325] px-6 py-4 rounded-sm max-[750px]:py-1">
          <p className="text-gray-300 text-[15px] flex items-center gap-2 max-[750px]:text-[5px]">
            <span className="text-blue-500 text-lg max-[750px]:text-xs">★</span>
            Always open to exciting<span className="text-yellow-400">opportunities</span> and
            new challenges.
          </p>
        </div>

      </div>



      {/* right parts of the page  */}
      <div className="rightparts h-[75vh] w-1/2 bg-[#06152B] mx-28 my-11 rounded-xl max-[750px]:w-1/2 max-[750px]:mx-0 max-[750px]:my-5 max-[750px]:h-[80vh] ">

        {/* Student Name */}
        <div className="EnterName relative mb-3 flex items-center justify-center mt-5">

          {/* logo of the Students */}
          <FiUser className="Studentlogo absolute ml-24 left-5 top-1/2 -translate-y-1/2 text-[#2f7df6] text-xl max-[750px]:pr-5" />
          <input type="text" placeholder="Your Name"
            className="w-[70%] h-[7vh] bg-transparent border border-[#24324b] rounded-md pl-12 pr-4 text-white placeholder:text-gray-400 outline-none focus:border-[#3b82f6] transition max-[750px]:pl-1"
          />
        </div>


        {/* Student Email */}
        <div className="StudentEmail relative mb-3 flex items-center justify-center mt-5">

          {/* logo of the Student Email */}
          <TfiEmail className="StudentEmaillogo absolute ml-24 left-5 top-1/2 -translate-y-1/2 text-[#2f7df6] text-xl max-[750px]:pr-5" />
          <input type="text" placeholder="Your Email"
            className="w-[70%] h-[7vh] bg-transparent border border-[#24324b] rounded-md pl-12 pr-4 text-white placeholder:text-gray-400 outline-none focus:border-[#3b82f6] transition max-[750px]:pl-1"
          />
        </div>


        {/* Student Subject */}
        <div className="Subject relative mb-3 flex items-center justify-center mt-5">

          {/* logo of the Subject */}
          <MdOutlineSubject className="Subjectlogo absolute ml-24 left-5 top-1/2 -translate-y-1/2 text-[#2f7df6] text-xl max-[750px]:pr-5" />
          <input type="text" placeholder="Subject"
            className="w-[70%] h-[7vh] bg-transparent border border-[#24324b] rounded-md pl-12 pr-4 text-white placeholder:text-gray-400 outline-none focus:border-[#3b82f6] transition max-[750px]:pl-1"
          />
        </div>

        
        {/* Students Message */}
        <div className="Message relative flex justify-center mt-5">
          <MdMessage className="absolute left-[17%] top-5 text-[#2f7df6] text-xl" />

          {/* This is the text area where you write the message  */}
          <textarea placeholder="Your Message" rows={8}
            className="w-[70%] bg-transparent border border-[#24324b] rounded-md pl-12 pt-4 pr-4 text-white placeholder:text-gray-400 outline-none resize-none focus:border-[#3b82f6] transition max-[750px]:pl-7"
          ></textarea>
        </div>

        <div className="sendbutton mt-3 flex items-center justify-center">
          <button className="text-white bg-blue-500 px-40 py-2 rounded-md flex items-center gap-3 hover:cursor-pointer hover:bg-blue-600 max-[750px]:px-8"> <IoIosSend /> Send Message</button>
        </div>


      </div>



    </div>
  );
}

export default Contact;