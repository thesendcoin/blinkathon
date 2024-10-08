/* eslint-disable react/jsx-no-comment-textnodes */
import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <div className="flex flex-row relative justify-between items-center bg-[#1C71FF]">
      <div>
        <HeroBackgroundSVG />
      </div>

      <div className="items-center z-10 absolute gap-[24px] w-full lg:gap-14 justify-center flex flex-col">
        <BlinkathonSVG />
        <p className="text-[32px] lg:text-[46px] max-w-[300px] lg:max-w-[460px] leading-[100%] text-center">
          // Online Global Blinks Hackathon starting from Aug 26 - Aug 31
        </p>
        <div className="flex flex-row items-center gap-4 lg:gap-10">
          <div className="relative inline-block cursor-pointer">
            <a
              href="#tracks"
              className=" text-[24px] lg:text-[42px] bg-white text-[#1C71FF] border-[6px] lg:border-[12px] border-[#699EFF] px-4 lg:px-6 py-4"
            >
              View Tracks
            </a>
            <span className="absolute top-0 left-0 h-[6px] lg:h-[12px] w-[6px] lg:w-[12px] bg-[#699EFF]" />
            <span className="absolute top-0 right-0 h-[6px] lg:h-[12px] w-[6px] lg:w-[12px] bg-[#699EFF]" />
            <span className="absolute bottom-0 left-0 h-[6px] lg:h-[12px] w-[6px] lg:w-[12px] bg-[#699EFF]" />
            <span className="absolute bottom-0 right-0 h-[6px] lg:h-[12px] w-[6px] lg:w-[12px] bg-[#699EFF]" />
            <span className="absolute top-0 left-0 h-[6px] lg:h-[12px] w-[6px] lg:w-[12px] bg-[#1C71FF]" />
            <span className="absolute top-0 right-0 h-[6px] lg:h-[12px] w-[6px] lg:w-[12px] bg-[#1C71FF]" />
            <span className="absolute bottom-0 left-0 h-[6px] lg:h-[12px] w-[6px] lg:w-[12px] bg-[#1C71FF]" />
            <span className="absolute bottom-0 right-0 h-[6px] lg:h-[12px] w-[6px] lg:w-[12px] bg-[#1C71FF]" />
          </div>
          <div className="relative inline-block cursor-pointer">
            <Link href="/results">
              <div className=" text-[24px] lg:text-[42px] bg-white text-[#1C71FF] border-[6px] lg:border-[12px] border-[#699EFF] px-4 lg:px-6 py-2">
                View Results
              </div>
            </Link>
            <span className="absolute top-0 left-0 h-[6px] lg:h-[12px] w-[6px] lg:w-[12px] bg-[#699EFF]" />
            <span className="absolute top-0 right-0 h-[6px] lg:h-[12px] w-[6px] lg:w-[12px] bg-[#699EFF]" />
            <span className="absolute bottom-0 left-0 h-[6px] lg:h-[12px] w-[6px] lg:w-[12px] bg-[#699EFF]" />
            <span className="absolute bottom-0 right-0 h-[6px] lg:h-[12px] w-[6px] lg:w-[12px] bg-[#699EFF]" />
            <span className="absolute top-0 left-0 h-[6px] lg:h-[12px] w-[6px] lg:w-[12px] bg-[#1C71FF]" />
            <span className="absolute top-0 right-0 h-[6px] lg:h-[12px] w-[6px] lg:w-[12px] bg-[#1C71FF]" />
            <span className="absolute bottom-0 left-0 h-[6px] lg:h-[12px] w-[6px] lg:w-[12px] bg-[#1C71FF]" />
            <span className="absolute bottom-0 right-0 h-[6px] lg:h-[12px] w-[6px] lg:w-[12px] bg-[#1C71FF]" />
          </div>
          <div className="relative inline-block cursor-pointer">
            <a
              href="https://t.me/blinkathon"
              target="_blank"
              className="text-[24px] lg:text-[42px] bg-[#1D41B9] text-white border-[6px] lg:border-[12px] border-[#699EFF] px-4 lg:px-6 py-4"
            >
              Join Telegram
            </a>
            <span className="absolute top-0 left-0 h-[6px] lg:h-[12px] w-[6px] lg:w-[12px] bg-[#699EFF]" />
            <span className="absolute top-0 right-0 h-[6px] lg:h-[12px] w-[6px] lg:w-[12px] bg-[#699EFF]" />
            <span className="absolute bottom-0 left-0 h-[6px] lg:h-[12px] w-[6px] lg:w-[12px] bg-[#699EFF]" />
            <span className="absolute bottom-0 right-0 h-[6px] lg:h-[12px] w-[6px] lg:w-[12px] bg-[#699EFF]" />
            <span className="absolute top-0 left-0 h-[6px] lg:h-[12px] w-[6px] lg:w-[12px] bg-[#1C71FF]" />
            <span className="absolute top-0 right-0 h-[6px] lg:h-[12px] w-[6px] lg:w-[12px] bg-[#1C71FF]" />
            <span className="absolute bottom-0 left-0 h-[6px] lg:h-[12px] w-[6px] lg:w-[12px] bg-[#1C71FF]" />
            <span className="absolute bottom-0 right-0 h-[6px] lg:h-[12px] w-[6px] lg:w-[12px] bg-[#1C71FF]" />
          </div>
        </div>
      </div>
      <div className="absolute z-0 flex flex-row items-center gap-[200px] w-full justify-center">
        <SparklesSVG />
        <EyesSVG />
      </div>
      <div className="-scale-y-100 -rotate-180 transform">
        <HeroBackgroundSVG />
      </div>
    </div>
  );
};

const HeroBackgroundSVG = () => {
  return (
    <div className="flex flex-col justify-between items-start min-w-[180px] w-full h-[600px] md:w-[240px] md:h-[600px] lg:w-[469px] lg:h-[965px]">
      <div className="w-[36%] lg:w-[50%]">
        <svg
          viewBox="0 0 213 155"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M19.3636 154.909H0V135.545H19.3636V154.909ZM96.8182 19.3636V-3.05176e-05H77.4545H58.0909H38.7273H19.3636H0V19.3636V38.7272V58.0909V77.4545H19.3636V96.8181L0 96.8181V116.182L19.3636 116.182V135.545H38.7273V116.182H58.0909V135.545H77.4545V116.182L96.8182 116.182H116.182V96.8181H96.8182H77.4545V77.4545H96.8182H116.182V58.0909H135.545V77.4545H154.909V58.0909H174.273V38.7272V19.3636H193.636H213V-3.05176e-05H193.636H174.273H154.909V19.3636V38.7272V58.0909H135.545V38.7272V19.3636V-3.05176e-05H116.182V19.3636H96.8182ZM58.0909 96.8181L38.7273 96.8181V77.4545V58.0909H58.0909H77.4545V77.4545H58.0909V96.8181ZM58.0909 96.8181V116.182H77.4545V96.8181H58.0909ZM58.0909 19.3636H77.4545V38.7272L58.0909 38.7272V19.3636ZM213 58.0909H193.636V38.7272H213V58.0909Z"
            fill="#699EFF"
          />
        </svg>
      </div>

      <div className="w-full">
        <svg
          viewBox="0 0 469 195"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M19.3636 0.874023H0V20.2377H19.3636V0.874023ZM96.8182 136.419V155.783H77.4545H58.0909H38.7273H19.3636H0V136.419V117.056V97.6922V78.3286H19.3636V58.9649L0 58.9649V39.6013L19.3636 39.6013V20.2377H38.7273V39.6013H58.0909V20.2377H77.4545V39.6013L96.8182 39.6013H116.182V58.9649H96.8182H77.4545V78.3286H96.8182H116.182V97.6922H135.545V78.3286H154.909V97.6922H174.273V117.056V136.419H193.636H213V155.783H193.636H174.273H154.909V136.419V117.056V97.6922H135.545V117.056V136.419V155.783H116.182V136.419H96.8182ZM58.0909 58.9649L38.7273 58.9649V78.3286V97.6922H58.0909H77.4545V78.3286H58.0909V58.9649ZM58.0909 58.9649V39.6013H77.4545V58.9649H58.0909ZM58.0909 136.419H77.4545V117.056L58.0909 117.056V136.419ZM213 97.6922H193.636V117.056H213V97.6922Z"
            fill="#699EFF"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M19.3636 39.965H0V59.3286H19.3636V39.965ZM96.8182 175.51V194.874H77.4545H58.0909H38.7273H19.3636H0V175.51V156.147V136.783V117.42H19.3636V98.0559L0 98.0559V78.6922L19.3636 78.6922V59.3286H38.7273V78.6922H58.0909V59.3286H77.4545V78.6922L96.8182 78.6922H116.182V98.0559H96.8182H77.4545V117.42H96.8182H116.182V136.783H135.545V117.42H154.909V136.783H174.273V156.147V175.51H193.636H213V194.874H193.636H174.273H154.909V175.51V156.147V136.783H135.545V156.147V175.51V194.874H116.182V175.51H96.8182ZM58.0909 98.0559L38.7273 98.0559V117.42V136.783H58.0909H77.4545V117.42H58.0909V98.0559ZM58.0909 98.0559V78.6922H77.4545V98.0559H58.0909ZM58.0909 175.51H77.4545V156.147L58.0909 156.147V175.51ZM213 136.783H193.636V156.147H213V136.783Z"
            fill="white"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M409.667 115.874H390V135.541V155.207H409.667V135.541V115.874ZM331 135.541H350.667L350.667 115.874H370.333V135.541L350.667 135.541V155.207H331V135.541ZM429.333 174.874V155.207H409.667V174.874H429.333ZM331 155.207H311.333V174.874H331V155.207ZM213 155.207H232.667H252.333V174.874H232.667H213V155.207ZM272 174.874V155.207H291.667V174.874H272ZM390 155.207H370.333V174.874H390V155.207ZM409.667 135.541H429.333V155.207H409.667V135.541ZM311.333 135.541H291.667H272V155.207H291.667H311.333V135.541ZM252.333 135.541V115.874H272L272 135.541L252.333 135.541ZM252.333 135.541L232.667 135.541V155.207H252.333L252.333 135.541Z"
            fill="#699EFF"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M252.333 135.874H232.667V155.541V175.207H252.333V155.541V135.874ZM291.667 155.541H311.333V175.207H291.667V155.541ZM291.667 155.541L272 155.541V135.874H291.667L291.667 155.541ZM213 175.207V194.874H232.667V175.207H213ZM331 175.207H311.333V194.874H331V175.207ZM409.667 175.207H429.333V194.874H409.667H390V175.207H409.667ZM370.333 175.207V194.874H350.667V175.207H370.333ZM272 175.207H252.333V194.874H272V175.207ZM213 155.541H232.667V175.207H213V155.541ZM350.667 155.541H331V175.207H350.667H370.333V155.541L390 155.541L390 175.207H409.667V155.541L390 155.541V135.874H370.333L370.333 155.541H350.667ZM468.667 175.207H449V194.874H468.667V175.207Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
};

export const BlinkathonSVG = () => {
  return (
    <div className="w-[254px] h-[110px] lg:w-[666px] lg:h-[290px]">
      <svg
        className="w-full h-full"
        viewBox="0 0 666 290"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M41.4221 0.909058V14.4786H27.8526V41.6176H14.2831V82.3261H0.713562V150.174H14.2831V163.743H122.839V150.174H149.978V95.8957H136.409V82.3261H122.839V68.7566H136.409V28.0481H122.839V14.4786H95.7002V0.909058H41.4221ZM95.7002 41.6176V68.7566H68.5611V41.6176H95.7002ZM54.9916 123.035V95.8957H82.1306V123.035H54.9916Z"
          fill="#F9FBFF"
        />
        <path
          d="M204.256 0.909058V14.4786H190.687V41.6176H177.117V82.3261H163.548V150.174H177.117V163.743H244.965V150.174H258.534V123.035H244.965V109.465H217.826V82.3261H231.395V55.1871H244.965V14.4786H231.395V0.909058H204.256Z"
          fill="#F9FBFF"
        />
        <path
          d="M285.673 14.4786V0.909058H312.812V14.4786H326.382V95.8957H339.951V150.174H326.382V163.743H285.673V150.174H272.104V14.4786H285.673Z"
          fill="#F9FBFF"
        />
        <path
          d="M380.66 0.909058V14.4786H367.09V68.7566H353.521V150.174H355.632L355.773 150.127C370.131 145.387 383.781 149.852 394.229 155.769V150.174H407.468C407.577 150.065 407.688 149.957 407.799 149.85V82.3261H421.368V123.035H434.938V140.186C448.965 140.336 461.764 146.931 471.278 153.717C475.609 156.806 479.693 160.23 483.454 163.743H489.216V150.174H502.786V95.8957H516.355V14.4786H502.786V0.909058H475.647V14.4786H462.077V82.3261H448.508V41.6176H434.938V14.4786H421.368V0.909058H380.66Z"
          fill="#F9FBFF"
        />
        <path
          d="M315.648 181.312H328.645C326.123 195.623 329.908 213.196 340.139 234.58C343.637 241.892 347.437 248.552 351.455 254.596V279.781H342.503V288.733H324.6V279.781H315.648V252.926H288.793V279.781H279.841V288.733H261.938V279.781H252.986V190.264H261.938V181.312H279.841V190.264H288.793V217.119H306.696V190.264H315.648V181.312Z"
          fill="#F9FBFF"
        />
        <path
          d="M530.49 279.781H526.364C528.997 274.934 530.266 269.622 530.7 264.689C531.544 255.107 529.593 244.743 526.838 235.413C525.922 232.311 524.874 229.183 523.725 226.071H530.49V190.264H539.441V181.312H566.296V190.264H575.248V208.167H584.2V235.022H593.152V190.264H602.103V181.312H620.007V190.264H628.959V243.974H620.007V279.781H611.055V288.733H584.2V279.781H575.248V261.878H566.296V235.022H557.345V279.781H548.393V288.733H530.49V279.781Z"
          fill="#F9FBFF"
        />
        <path
          d="M543.494 14.4786V0.909058H570.633V14.4786H584.203V55.1871H597.772V28.0481H611.342V0.909058H652.05V14.4786H665.62V41.6176H652.05V68.7566H638.481V82.3261H652.05V109.465H665.62V150.174H652.05V163.743H624.911V150.174H611.342V123.035H597.772V150.174H584.203V163.743H557.064V150.174H543.494V82.3261H529.925V14.4786H543.494Z"
          fill="#F9FBFF"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M82.903 181.312V190.264H73.9513V199.215H64.9995V208.167H56.0478V226.071H47.0961V243.974H38.1443V270.829H47.0961V279.781H64.9995V270.829H73.9513V261.878H91.8547V270.829H100.806V279.781H109.758V288.733H127.662V279.781H136.613V208.167H127.662V190.264H118.71V181.312H82.903ZM109.758 217.119V243.974H100.806V235.022H82.903V217.119H109.758Z"
          fill="#F9FBFF"
        />
        <path
          d="M172.42 190.264V181.312H235.082V190.264H244.034V208.167H235.082V217.119H217.179V252.926H226.131V279.781H217.179V288.733H190.324V270.829H181.372V226.071H172.42V235.022H154.517V226.071H145.565V199.215H154.517V190.264H172.42Z"
          fill="#F9FBFF"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M451.103 252.842C450.079 251.589 447.678 253.002 448.167 254.544C451.814 266.059 451.877 279.526 437.414 287.172C423.82 294.359 380.35 283.011 354.005 227.945C332.928 183.893 347.091 169.178 360.591 164.722C381.489 157.824 405.116 182.384 415.244 194.558C415.749 195.165 417.429 194.175 417.165 193.431C413.328 182.623 409.005 163.435 423.82 157.584C449.639 147.386 478.659 178.571 490.105 194.377C504.875 214.771 528.411 267.001 506.808 278.422C487.074 290.131 464.951 269.794 451.103 252.842ZM448.485 178.727C438.468 182.685 444.535 196.573 455.045 212.689C468.312 233.029 477.848 245.439 489.322 241.244C498.543 237.872 484.488 212.498 478.125 203.712C477.797 203.259 477.41 202.715 476.97 202.096L476.966 202.09C471.465 194.35 457.759 175.064 448.485 178.727ZM380.144 187.829C370.127 191.787 376.194 205.675 386.705 221.791C399.971 242.131 409.507 254.541 420.981 250.346C430.202 246.974 416.148 221.6 409.785 212.814C409.456 212.36 409.067 211.814 408.626 211.193L408.625 211.191C403.124 203.451 389.418 184.166 380.144 187.829Z"
          fill="#F9FBFF"
        />
      </svg>
    </div>
  );
};

export const EyesSVG = () => {
  return (
    <div>
      <svg
        width="551"
        height="473"
        viewBox="0 0 551 473"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M446.048 0.428589V26.6667H419.81V52.9048H393.571V79.1429H419.81V210.333H314.857V184.095H288.619V341.524H314.857V394H341.095V420.238H367.333V446.476H314.857V420.238H288.619V367.762H262.381V105.381H288.619V52.9048H314.857V26.6667H393.571V0.428589H446.048Z"
          fill="white"
          fill-opacity="0.04"
        />
        <path
          d="M209.905 52.9048H262.381V105.381H236.143V79.1429H209.905V52.9048Z"
          fill="white"
          fill-opacity="0.04"
        />
        <path
          d="M183.667 26.6667H209.905V52.9048H183.667V26.6667Z"
          fill="white"
          fill-opacity="0.04"
        />
        <path
          d="M157.429 26.6667V0.428589H183.667V26.6667H157.429Z"
          fill="white"
          fill-opacity="0.04"
        />
        <path
          d="M26.2381 210.333V79.1429H52.4762V26.6667H157.429V52.9048H131.19V79.1429H157.429V210.333H26.2381Z"
          fill="white"
          fill-opacity="0.04"
        />
        <path
          d="M26.2381 315.286H0V210.333H26.2381V315.286Z"
          fill="white"
          fill-opacity="0.04"
        />
        <path
          d="M52.4762 394H26.2381V315.286H52.4762V394Z"
          fill="white"
          fill-opacity="0.04"
        />
        <path
          d="M78.7143 420.238H52.4762V394H78.7143V420.238Z"
          fill="white"
          fill-opacity="0.04"
        />
        <path
          d="M104.952 446.476H78.7143V420.238H104.952V446.476Z"
          fill="white"
          fill-opacity="0.04"
        />
        <path
          d="M236.143 420.238V472.714H104.952V446.476H209.905V420.238H236.143Z"
          fill="white"
          fill-opacity="0.04"
        />
        <path
          d="M236.143 420.238H262.381V367.762H236.143V420.238Z"
          fill="white"
          fill-opacity="0.04"
        />
        <path
          d="M472.286 446.476V472.714H367.333V446.476H472.286Z"
          fill="white"
          fill-opacity="0.04"
        />
        <path
          d="M498.524 420.238V446.476H472.286V420.238H498.524Z"
          fill="white"
          fill-opacity="0.04"
        />
        <path
          d="M524.762 341.524V420.238H498.524V341.524H524.762Z"
          fill="white"
          fill-opacity="0.04"
        />
        <path
          d="M498.524 79.1429H524.762V131.619H551V341.524H524.762V157.857H498.524V79.1429Z"
          fill="white"
          fill-opacity="0.04"
        />
        <path
          d="M472.286 52.9048H498.524V79.1429H472.286V52.9048Z"
          fill="white"
          fill-opacity="0.04"
        />
        <path
          d="M472.286 52.9048V26.6667H446.048V52.9048H472.286Z"
          fill="white"
          fill-opacity="0.04"
        />
      </svg>
    </div>
  );
};
const SparklesSVG = () => {
  return (
    <div>
      <svg
        width="605"
        height="579"
        viewBox="0 0 605 579"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M447.174 0H473.478V78.913H447.174L447.174 131.522H420.87V52.6087H447.174V0Z"
          fill="white"
          fill-opacity="0.04"
        />
        <path
          d="M394.565 184.13V131.522H420.87V184.13H394.565Z"
          fill="white"
          fill-opacity="0.04"
        />
        <path
          d="M341.957 236.739V210.435H368.261V184.13H394.565V236.739H341.957Z"
          fill="white"
          fill-opacity="0.04"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M368.261 315.652V263.043H341.957V236.739L315.652 236.739V210.435H263.043V184.13H236.739L236.739 105.217H210.435V26.3043H157.826V105.217H131.522V157.826H105.217V184.13H78.913V210.435H52.6087V236.739L0 236.739V263.043H52.6087V289.348H78.913L78.913 315.652H105.217V368.261H131.522V447.174H157.826V552.391H184.13V578.696H210.435V447.174H236.739V368.261H263.043V315.652H315.652V289.348H341.957V315.652H368.261ZM263.043 315.652H236.739L236.739 368.261H210.435V447.174H184.13V420.87H157.826V368.261H131.522V315.652H105.217V289.348H78.913V263.043H52.6087V236.739H78.913L78.913 210.435H105.217V184.13H131.522V157.826H157.826V105.217H210.435V184.13H236.739V210.435H263.043V236.739L289.348 236.739V289.348H263.043V315.652Z"
          fill="white"
          fill-opacity="0.04"
        />
        <path
          d="M394.565 368.261H368.261V315.652H394.565V368.261Z"
          fill="white"
          fill-opacity="0.04"
        />
        <path
          d="M420.87 447.174H394.565V368.261H420.87V447.174Z"
          fill="white"
          fill-opacity="0.04"
        />
        <path
          d="M473.478 447.174V578.696H420.87V447.174L473.478 447.174Z"
          fill="white"
          fill-opacity="0.04"
        />
        <path
          d="M499.783 368.261V447.174L473.478 447.174V368.261H499.783Z"
          fill="white"
          fill-opacity="0.04"
        />
        <path
          d="M552.391 289.348V341.957H526.087V368.261H499.783V315.652H526.087V289.348H552.391Z"
          fill="white"
          fill-opacity="0.04"
        />
        <path
          d="M526.087 210.435H552.391V236.739H578.696V263.043H605V289.348H552.391L552.391 263.043H526.087V210.435Z"
          fill="white"
          fill-opacity="0.04"
        />
        <path
          d="M499.783 184.13H526.087V210.435H499.783V184.13Z"
          fill="white"
          fill-opacity="0.04"
        />
        <path
          d="M499.783 184.13V78.913L473.478 78.913V184.13H499.783Z"
          fill="white"
          fill-opacity="0.04"
        />
      </svg>
    </div>
  );
};

export default HeroSection;
