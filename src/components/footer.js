import React from 'react';
import { FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';
const Footer =() => {
 return (
   <footer className=" bg-black text-white p-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <div className="bg-teal-500 rounded-full w-12 h-12 flex items-center justify-center mr-3">
            <span className="text-white text-2xl font-bold">m</span>
          </div>
          <span className="text-xl font-semibold">MyCourse.io</span>
        </div>
        <div className="flex flex-wrap justify-center md:justify-between w-full md:w-auto">
          <div className="flex flex-col items-center md:items-start mx-4 px-6">
            <button className="font-normal mb-2">Web Programming</button>
            <button className="font-normal mb-2">Mobile Programming</button>
            <button className="font-normal mb-2">Java Beginner</button>
            <button className="font-normal mb-2">PHP Beginner</button>
          </div>
          <div className="flex flex-col items-center md:items-start mx-4 px-6">
            <button className="font-normal mb-2">Adobe Illustrator</button>
            <button className="font-normal mb-2">Adobe Photoshop</button>
            <button className="font-normal mb-2">Design Logo</button>
          </div>
          <div className="flex flex-col items-center md:items-start mx-4 px-6">
            <button className="font-normal mb-2">Writing Course</button>
            <button className="font-normal mb-2">Photography</button>
            <button className="font-normal mb-2">Video Making</button>
          </div>
        </div>
        <div className="flex mt-4 md:mt-0">
          <a href="#" className="mx-2 text-white">
            <FaTwitter size={24} />
          </a>
          <a href="#" className="mx-2 text-white">
            <FaInstagram size={24} />
          </a>
          <a href="#" className="mx-2 text-white">
            <FaFacebook size={24} />
          </a>
        </div>
      </div> 
      <div className="text-center mt-8 text-sm text-gray-500">
        Copyright © MyCourse.io 2024. All Rights Reserved
      </div>
    </footer>
  );
};
export default Footer;