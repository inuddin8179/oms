import React from 'react';

function LoginComp() {
  const listCss = 'list-none lis text- black p-8 bg-white rounded-xl m-5';
  return (
    <div className="bg-black flex">
      <div className=" flex flex-row bg-white mx-[131px] my-[96px] rounded-[20px] h-[935px] w-[1657px]">
        <div className="h-[499px] w-[506px] bg-[#FFFFFF] my-[215px] ml-[120px] drop-shadow-[0_0_45px_rgba(0,0,0,0.15)] rounded-[11px]">
          <div className=" mx-[54px] mt-[48.13px] mb-[71.48] h-[386.38px] w-[390px]">
            <img className="ml-[53.18px] mt-[3.4px]" src="/icons/TechoutsLogoLoginPage.svg" alt="Logo" />
            <p>Enter Your Phone Number</p>
          </div>
        </div>
        <div className="h-[935px] w-[915px] content-between">
          <img
            className="drop-shadow-[0_0_45px_rgba(0,0,0,0.25)]"
            src="/icons/login_oms_image.svg"
            alt="image description"
          />
        </div>
      </div>
    </div>
  );
}

export default LoginComp;
