import React from "react";
import { BsFacebook } from "react-icons/bs";
import { FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { RiTwitterXFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div>
      <footer className="container mx-auto flex flex-col-reverse lg:flex-row justify-between md:px-0 px-5 py-20">
        <aside className="space-y-5 my-10 lg:my-0 flex justify-between container mx-auto md:flex-col">
            <aside>
          <aside className="space-y-5">
            <h1>
              <img src="/images/logo.png" alt="" className="h-15 w-auto" />
            </h1>
          </aside>
          <nav>
            <nav>
              <div className="flex gap-4">
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub size={30} />
                </a>
                <a href="https://x.com/" target="_blank">
                  <RiTwitterXFill size={30} />
                </a>
                <a href="https://www.linkedin.com/in/" target="_blank">
                  <FaLinkedin size={30} className="text-blue-500" />
                </a>
                <a href="https://www.facebook.com/" target="_blank">
                  <BsFacebook size={30} className="text-blue-500" />
                </a>
              </div>
            </nav>
          </nav>
        

          </aside>
          <aside>
         
          <h1 className=" text-6xl font-bold   text-shadow-black ">
            Get in Touch
          </h1>
          <aside className="flex gap-5">
            <FaPhoneAlt />

            <p>+88 01533 333 333</p>
          </aside>
          <aside className="flex gap-5">
            <IoMail />

            <p>info@gmail.com</p>
          </aside>
          <aside className="flex gap-5">
            <FaLocationDot />
            <p>72, Wall street, King Road, Dhaka</p>
          </aside>   
          </aside>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
