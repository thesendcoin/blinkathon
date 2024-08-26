import React from "react";

const DetailsSection = () => {
  return (
    <div className="flex flex-row items-center justify-center w-full py-24 gap-[90px]">
      <div className="relative w-fit">
        <div className="absolute flex flex-col items-center justify-center pt-8 z-10 w-full h-full ">
          <p className="text-[94px] text-center text-[#1C71FF]">30K+</p>
          <p className="text-[36px] text-center text-[#1C71FF] pt-2">Prize</p>
        </div>
        <div className="mt-44">
          <BGWhiteSVG />
        </div>
      </div>
      <div className="relative w-fit">
        <div className="absolute flex flex-col items-center justify-center pt-8 z-10 w-full h-full ">
          <p className="text-[94px] text-center text-[#1C71FF]">10</p>
          <p className="text-[36px] text-center text-[#1C71FF] pt-2">Tracks</p>
        </div>
        <div className="mt-44">
          <BGWhiteSVG />
        </div>
      </div>
      <div className="relative w-fit">
        <div className="absolute flex flex-col items-center justify-center pt-8 z-10 w-full h-full ">
          <p className="text-[94px] text-center text-[#1C71FF]">14</p>
          <p className="text-[36px] text-center text-[#1C71FF]">Sponsors</p>
        </div>
        <div className="mt-44">
          <BGWhiteSVG />
        </div>
      </div>
    </div>
  );
};

const BGWhiteSVG = () => {
  return (
    <div className="z-0">
      <svg
        width="260"
        height="75"
        viewBox="0 0 260 75"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M37.007 0H24.676V12.3309H37.007V0ZM24.6689 12.338H12.338V24.6689H24.6689V12.338ZM0 24.676H12.3309V37.0069H0V24.676ZM12.3309 37.014H0V49.345H12.3309V37.014ZM12.338 49.352H24.6689V61.683H12.338V49.352ZM37.007 61.69H24.676V74.021H37.007V61.69Z"
          fill="#699EFF"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M37.0069 12.338H24.676V24.669H37.0069V12.338ZM37.0069 61.683H24.676V49.352H37.0069V61.683ZM12.338 24.676H24.669V37.0069H12.338V24.676ZM24.669 49.345H12.338V37.0141H24.669V49.345ZM24.676 24.676H37.0069V37.0069H24.676V24.676ZM37.0069 49.345H24.676V37.0141H37.0069V49.345Z"
          fill="white"
        />
        <mask
          id="path-3-outside-1_157_40"
          maskUnits="userSpaceOnUse"
          x="37.007"
          y="-0.665466"
          width="185"
          height="75"
          fill="black"
        >
          <rect fill="white" x="37.007" y="-0.665466" width="185" height="75" />
          <path d="M37.007 12.3345H222.007V61.6866H37.007V12.3345Z" />
        </mask>
        <path
          d="M37.007 12.3345H222.007V61.6866H37.007V12.3345Z"
          fill="white"
        />
        <path
          d="M37.007 24.6658H222.007V0.00324249H37.007V24.6658ZM222.007 49.3553H37.007V74.0179H222.007V49.3553Z"
          fill="#699EFF"
          mask="url(#path-3-outside-1_157_40)"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M222.007 0H234.338V12.3309H222.007V0ZM234.345 12.338H246.676V24.6689H234.345V12.338ZM259.014 24.676H246.683V37.0069H259.014V24.676ZM246.683 37.014H259.014V49.345H246.683V37.014ZM246.676 49.352H234.345V61.683H246.676V49.352ZM222.007 61.69H234.338V74.021H222.007V61.69Z"
          fill="#699EFF"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M222.007 12.338H234.338V24.669H222.007V12.338ZM222.007 61.683H234.338V49.352H222.007V61.683ZM246.676 24.676H234.345V37.0069H246.676V24.676ZM234.345 49.345H246.676V37.0141H234.345V49.345ZM234.338 24.676H222.007V37.0069H234.338V24.676ZM222.007 49.345H234.338V37.0141H222.007V49.345Z"
          fill="white"
        />
      </svg>
    </div>
  );
};
const BackgroundSVG = () => {
  return (
    <div className="z-0">
      <svg
        width="225"
        height="255"
        viewBox="0 0 225 255"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M165 0.363525V15.3635H180V30.3635H195V45.3635H210V60.3635H225V165.364H210V180.364H195V195.364H180V210.364H165V225.364H60V210.364H45V195.364H30V180.364H15V165.364H0V60.3635H15V45.3635H30V30.3635H45V15.3635H60V0.363525H165Z"
          fill="#1C71FF"
        />
        <path d="M165 0.363525V15.3635H60V0.363525H165Z" fill="#1D41B9" />
        <path d="M45 30.3635V15.3635H60V30.3635H45Z" fill="#1D41B9" />
        <path d="M30 45.3635V30.3635H45V45.3635H30Z" fill="#1D41B9" />
        <path d="M15 60.3635V45.3635H30V60.3635H15Z" fill="#1D41B9" />
        <path d="M15 165.364V60.3635H0V165.364H15Z" fill="#1D41B9" />
        <path d="M30 180.364H15V165.364H30V180.364Z" fill="#1D41B9" />
        <path d="M45 195.364H30V180.364H45V195.364Z" fill="#1D41B9" />
        <path d="M60 210.364H45V195.364H60V210.364Z" fill="#1D41B9" />
        <path d="M165 210.364V225.364H60V210.364H165Z" fill="#1D41B9" />
        <path d="M180 195.364V210.364H165V195.364H180Z" fill="#1D41B9" />
        <path d="M195 180.364V195.364H180V180.364H195Z" fill="#1D41B9" />
        <path d="M210 165.364V180.364H195V165.364H210Z" fill="#1D41B9" />
        <path d="M210 60.3635H225V165.364H210V60.3635Z" fill="#1D41B9" />
        <path d="M195 45.3635H210V60.3635H195V45.3635Z" fill="#1D41B9" />
        <path d="M180 30.3635H195V45.3635H180V30.3635Z" fill="#1D41B9" />
        <path d="M180 30.3635V15.3635H165V30.3635H180Z" fill="#1D41B9" />
        <rect y="60.3635" width="15" height="15" fill="#699EFF" />
        <rect y="75.3635" width="15" height="15" fill="#699EFF" />
        <rect x="150" y="0.363525" width="15" height="15" fill="#699EFF" />
        <rect x="135" y="0.363525" width="15" height="15" fill="#699EFF" />
        <rect x="60" y="210.364" width="15" height="15" fill="#699EFF" />
        <rect x="75" y="210.364" width="15" height="15" fill="#699EFF" />
        <rect x="105" y="210.364" width="15" height="15" fill="#699EFF" />
        <rect x="105" y="0.363525" width="15" height="15" fill="#699EFF" />
        <rect y="105.364" width="15" height="15" fill="#699EFF" />
        <rect x="210" y="150.364" width="15" height="15" fill="#699EFF" />
        <rect x="210" y="135.364" width="15" height="15" fill="#699EFF" />
        <rect x="210" y="105.364" width="15" height="15" fill="#699EFF" />

        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M42 180.364H29.6691V192.694H42V180.364ZM29.662 192.702H17.331V205.032H29.662V192.702ZM4.99304 205.04H17.324V217.37H4.99304V205.04ZM17.324 217.378H4.99304V229.709H17.324V217.378ZM17.331 229.716H29.662V242.047H17.331V229.716ZM42 242.054H29.6691V254.384H42V242.054Z"
          fill="#699EFF"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M42 192.702H29.6691V205.032H42V192.702ZM42 242.047H29.6691V229.716H42V242.047ZM17.3311 205.04H29.662V217.37H17.3311V205.04ZM29.662 229.709H17.3311V217.378H29.662V229.709ZM29.6691 205.04H42V217.37H29.6691V205.04ZM42 229.709H29.6691V217.378H42V229.709Z"
          fill="white"
        />
        <mask
          id="path-18-outside-1_96_401"
          maskUnits="userSpaceOnUse"
          x="42"
          y="179.698"
          width="141"
          height="75"
          fill="black"
        >
          <rect fill="white" x="42" y="179.698" width="141" height="75" />
          <path d="M42 192.698H183V242.05H42V192.698Z" />
        </mask>
        <path d="M42 192.698H183V242.05H42V192.698Z" fill="white" />
        <path
          d="M42 205.029H183V180.367H42V205.029ZM183 229.719H42V254.381H183V229.719Z"
          fill="#699EFF"
          mask="url(#path-18-outside-1_96_401)"
        />

        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M183 180.364H195.331V192.694H183V180.364ZM195.338 192.702H207.669V205.032H195.338V192.702ZM220.007 205.04H207.676V217.37H220.007V205.04ZM207.676 217.378H220.007V229.709H207.676V217.378ZM207.669 229.716H195.338V242.047H207.669V229.716ZM183 242.054H195.331V254.384H183V242.054Z"
          fill="#699EFF"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M183 192.702H195.331V205.032H183V192.702ZM183 242.047H195.331V229.716H183V242.047ZM207.669 205.04H195.338V217.37H207.669V205.04ZM195.338 229.709H207.669V217.378H195.338V229.709ZM195.331 205.04H183V217.37H195.331V205.04ZM183 229.709H195.331V217.378H183V229.709Z"
          fill="white"
        />
      </svg>
    </div>
  );
};

export default DetailsSection;
