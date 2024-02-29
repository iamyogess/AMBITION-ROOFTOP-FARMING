import React from "react";
// import { AiFillPhone, AiOutlineClockCircle } from "react-icons/ai";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import "./TopBar.scss";
// import logo from ".../logo.png";

const TopBar = () => {
  return (
    <div className="topbar bg-[#2AAA8A]">
      <div className="container">
        <div className=" flex justify-between items-center w-full py-3">
          <div className="flex items-center">
            <img
              src="src\components\TopBar\logo.png"
              className="mr-2 h-[80px] cursor-pointer w-full"
              alt=""
            />
          </div>

          <div className="call flex items-center px-5 ">
            <div className="call-icon  mr-2.5">
              <FontAwesomeIcon className="text-lg text-white" icon={faPhone} />
            </div>
            <div className="call-detail text-white">
              <h6 className="text-sm mb-[2px] text-white">Contact Anytime</h6>
              <h5 className="text-md font-semibold">0123 - 88 - 89 - 0999</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
