import React from "react";
import cv from "../assets/My-Resume.pdf";
import logo from "../../public/images/CodeWithAbuBokor.png";

const Navbar = () => {
  return (
    <div className="py-2 w-[94%] mx-auto">
      <div className="navbar rounded-xl bg-white shadow-sm my-3">
        <div className="flex-1">
          <div className="w-[15%] p-2">
            <img src={logo} alt="" />
          </div>
        </div>
        

        <div className="flex-none">

          <ul className="menu menu-horizontal px-1">
            <li className="mr-4">
              <a
                href={cv}
                download={true}
                className="bg-purple-400 font-bold px-4 py-2 hover:bg-purple-500 duration-200 text-white hover:text-neutral-800"
              >
                Download CV
              </a>
            </li>
            <li>
              <details>
                <summary className="mr-20 bg-purple-400 font-bold px-4 py-2 hover:bg-purple-500 duration-200 text-white hover:text-neutral-800">
                  Hire Me
                </summary>
                <ul className="bg-base-100 rounded-t-none p-2 w-[150px] text-center">
                  <li className="font-black text-white duration-200 bg-green-400 rounded-lg mb-2 ">
                    <a
                      className=""
                      href="https://www.fiverr.com/users/abir_ahmed340"
                      target="_blank"
                    >
                      Fiverr
                    </a>
                  </li>
                  <li className="font-black text-white duration-200 bg-blue-700 rounded-lg">
                    <a
                      className=""
                      href="https://www.facebook.com/abirahmed231"
                      target="_blank"
                    >
                      Facebook
                    </a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
