import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, CheckBox, Input, Text } from "components";

const LoginOnePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-overlock items-center justify-end mx-auto p-[119px] md:px-10 sm:px-5 w-full">
        <div className="flex flex-col gap-[34px] justify-start max-w-[1476px] mb-20 mt-[87px] mx-auto w-full">
          <Text
            className="md:ml-[0] ml-[988px] text-5xl sm:text-[38px] md:text-[44px] text-blue_gray-900"
            size="txtOverlockBold48"
          >
            Log in
          </Text>
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
            <div className="flex h-[297px] justify-end md:mt-0 mt-24 relative w-[35%] md:w-full">
              <div className="flex flex-row gap-2 h-full items-center justify-center mb-[25px] ml-[201px] mt-auto w-[12%]">
                <div className="bg-white-A700 h-[9px] rounded w-[9px]"></div>
                <div className="bg-gray-400 h-[9px] rounded w-[9px]"></div>
                <div className="bg-gray-400 h-[9px] rounded w-[9px]"></div>
                <div className="bg-gray-400 h-[9px] rounded w-[9px]"></div>
              </div>
              <div className="absolute bg-blue_gray-100 h-[297px] inset-[0] justify-center m-auto rounded-[30px] w-full"></div>
            </div>
            <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-end p-[47px] md:px-10 sm:px-5 rounded-[20px] shadow-bs1 w-[57%] md:w-full">
              <div className="flex flex-col items-start justify-start mt-0.5 w-[98%] md:w-full">
                <Text
                  className="text-blue_gray-900 text-xl"
                  size="txtOverlockBold20"
                >
                  Email
                </Text>
                <Input
                  name="textarea"
                  placeholder="Search your waste bank here!"
                  className="font-poppins leading-[normal] p-0 placeholder:text-gray-400_01 text-base text-left w-full"
                  wrapClassName="border-2 border-gray-400_01 border-solid mt-2.5 w-full"
                ></Input>
                <Text
                  className="mt-[23px] text-blue_gray-900 text-xl"
                  size="txtOverlockBold20"
                >
                  Password
                </Text>
                <Input
                  name="textarea_One"
                  placeholder="Search your waste bank here!"
                  className="font-poppins leading-[normal] p-0 placeholder:text-gray-400_01 text-base text-left w-full"
                  wrapClassName="border-2 border-gray-400_01 border-solid mt-2.5 w-full"
                ></Input>
                <div className="flex flex-row font-poppins sm:gap-10 items-start justify-between ml-0.5 md:ml-[0] mt-6 w-full">
                  <CheckBox
                    className="leading-[normal] mb-0.5 text-base text-left"
                    inputClassName="h-6 mr-[5px] outline outline-[2px] outline-gray-400_03 w-6"
                    name="rememberme"
                    id="rememberme"
                    label="Remember me"
                  ></CheckBox>
                  <a
                    href="javascript:"
                    className="mt-0.5 text-base text-gray-800"
                  >
                    <Text size="txtPoppinsRegular16Gray800">
                      Forgot password?
                    </Text>
                  </a>
                </div>
                <Button
                  className="common-pointer cursor-pointer font-poppins font-semibold leading-[normal] min-w-[251px] md:ml-[0] ml-[235px] mt-[53px] text-center text-xl"
                  onClick={() => navigate("/accountsettingone")}
                  shape="round"
                  color="gray_400"
                  size="sm"
                  variant="fill"
                >
                  Log in
                </Button>
                <Text
                  className="md:ml-[0] ml-[348px] mt-6 text-base text-gray-800"
                  size="txtPoppinsRegular16Gray800"
                >
                  OR
                </Text>
                <Text
                  className="md:ml-[0] ml-[262px] mt-[94px] text-base text-gray-800"
                  size="txtPoppinsRegular16Gray800"
                >
                  <span className="text-gray-800 font-poppins text-left font-normal">
                    New user?{" "}
                  </span>
                  <span className="text-lime-900 font-poppins text-left font-semibold">
                    Registration
                  </span>
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginOnePage;
