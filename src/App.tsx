import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

function App() {
  return (
    <div className="grid grid-cols-10 ">
      <div className="col-span-3 bg-[#E6DACE] h-screen relative">
        <div className="bg-[#F4ECE6] flex flex-col justify-center items-center w-2/3 h-3/5 absolute -right-28 bottom-36 shadow-2xl">
          <img
            className="rounded-full w-1/2 pb-2"
            src="https://static.wixstatic.com/media/2e2a49_bd3a1599bc1b4265a01b2754b99b8536~mv2_d_5760_3840_s_4_2.jpeg/v1/crop/x_2703,y_43,w_2199,h_2205/fill/w_256,h_256,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/AdobeStock_230407429.jpeg"
            alt="avatar"
          />
          <div className="text-xl text-center font-extrabold py-2 after:block after:w-10 after:h-px after:bg-blue-500 after:m-4 ">
            Maya <br />
            Nelson
          </div>
          <p className="font-normal text-xs tracking-[0.4em]">
            PROJECT MANAGER
          </p>
          <div className="flex gap-4 bg-white h-10 w-full justify-center items-center absolute bottom-0">
            <FaFacebookF />
            <FaTwitter />
            <FaLinkedinIn />
            <FaInstagram />
          </div>
        </div>
      </div>

      <div className="col-span-7 h-screen flex flex-col justify-center pl-48">
        <h1 className="text-8xl font-bold py-4">Hello</h1>
        <h2 className="text-3xl font-semibold py-4">
          Here's who I am & what I do
        </h2>
        <div className="flex gap-4 py-4">
          <button className="font-semibold text-md uppercase px-10 rounded-3xl py-1 hover:bg-white hover:text-black hover:border hover:border-blue-500 text-white bg-blue-500 border border-blue-500">
            resume
          </button>
          <button className="font-semibold text-md uppercase px-10 rounded-3xl py-1 hover:border-blue-500 hover:bg-blue-500 hover:text-white border border-black">
            project
          </button>
        </div>
        <div className="w-1/3 text-justify text-sm py-4">
          <p>
            I'm a paragraph. Click here to add your own text and edit me. It's
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font. <br /> <br />
            I’m a great place for you to tell a story and let your users know a
            little more about you.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
