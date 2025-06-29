import React, { useContext } from "react";
import { BsFacebook } from "react-icons/bs";
import { FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { RiTwitterXFill } from "react-icons/ri";
import { AuthContext } from "../context/AuthProvider";
import { Link } from "react-router";

const Footer = () => {
  const { user } = useContext(AuthContext);

  return (
    <>
      <footer className=" text-neutral py-16 px-5 md:px-0">
        <div className="container mx-auto flex flex-col lg:flex-row justify-between gap-10">
          {/* Left: Branding and Social */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center">
              {" "}
              <img
                src="/images/logo.png"
                alt="GardenLink Logo"
                className="w-12"
              />
              <h1 className="text-3xl font-bold">GardenLink</h1>
            </div>

            <p className="max-w-md text-sm">
              GardenLink is your green haven. Share gardening wisdom, connect
              with local growers, join events, and grow together — from balcony
              herbs to hydroponic wonders.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-2">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={24} className="hover:text-green-700" />
              </a>
              <a
                href="https://x.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiTwitterXFill size={24} className="hover:text-green-700" />
              </a>
              <a
                href="https://www.linkedin.com/in/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin
                  size={24}
                  className="text-blue-600 hover:text-green-700"
                />
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsFacebook
                  size={24}
                  className="text-blue-600 hover:text-green-700"
                />
              </a>
            </div>
          </div>

          {/* Center: Contact Info */}
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold mb-2">Get in Touch</h2>
            <div className="flex items-center gap-3">
              <FaPhoneAlt />
              <p>+88 01533 333 333</p>
            </div>
            <div className="flex items-center gap-3">
              <IoMail />
              <p>info@gardenlink.com</p>
            </div>
            <div className="flex items-center gap-3">
              <FaLocationDot />
              <p>72, Wall Street, King Road, Dhaka</p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold mb-2">Quick Links</h2>

            {/* Common links for all users */}
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <Link to="/allgardeners" className="hover:underline">
              Explore Gardeners
            </Link>
            <Link to="/alltips" className="hover:underline">
              Browse Tips
            </Link>

            {/* Conditional links based on user authentication */}
            {!user ? (
              <>
                <Link to="/signup" className="hover:underline">
                  Signup
                </Link>
                <Link to="/login" className="hover:underline">
                  Login
                </Link>
              </>
            ) : (
              <>
                <Link to="/mytips" className="hover:underline">
                  My Tips
                </Link>
                <Link to="/tip" className="hover:underline">
                  Share a Garden Tip
                </Link>
              </>
            )}
          </div>
        </div>

        <div className="text-center mt-10 text-sm text-gray-500">
          © {new Date().getFullYear()} GardenLink. Cultivating community one
          plant at a time.
        </div>
      </footer>
    </>
  );
};

export default Footer;
