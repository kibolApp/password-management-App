import React from "react";

import { FaFacebook, FaGithub } from "react-icons/fa";
import background from "../../src/background.png";

const Footer = () => {
  return (
    <div
      id="Contact"
      className="w-full bg-slate-100 dark:text-gray-300 dark:bg-gray-900 text-custom-dark py-y px-2"
    >
      <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-5 border-b-2 border-gray-500 py-8">
        <div>
          <h6 className="font-bold uppercase pt-2">Our Solutions</h6>
          <ul>
            <li className="py-1">OS</li>
            <li className="py-1">Data</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase pt-2">Support</h6>
          <ul>
            <li className="py-1">Documentation</li>
            <li className="py-1">Support Contact</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase pt-2">Legal</h6>
          <ul>
            <li className="py-1">Privacy</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase pt-2">Terms</h6>
          <ul>
            <li className="py-1">Terms of Conduct</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase pt-2">PlaceHolder</h6>
          <ul>
            <li className="py-1">Link!</li>
          </ul>
        </div>
      </div>

      <div
        className="flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-custom-dark dark:text-white "
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <p className="py-4">
          @ AGATKA INDASTRIS ALL RIGHTS REZERWED I GUEAS!!!
        </p>
        <p className="py-4"></p>
        <div className="flex justify-between pt-4 text-2xl gap-6">
          <FaFacebook />
          <FaGithub />
        </div>
      </div>
    </div>
  );
};

export default Footer;
