import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, CheckBox, Img, Input, PagerIndicator, Text } from "components";
import RegistrationOneColumnsearchone from "components/RegistrationOneColumnsearchone";

const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-anton items-center justify-end mx-auto p-28 md:px-10 sm:px-5 w-full">
        <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[1497px] mb-[87px] mt-[94px] mx-auto w-full">
          <div className="flex md:flex-1 flex-col gap-[26px] items-center justify-start md:mt-0 mt-[67px] w-[35%] md:w-full">
            <div className="flex relative w-[34%]">
              <Img
                className="h-[111px] my-auto object-cover w-[111px]"
                src="images/img_zonaamantanpa.png"
                alt="zonaamantanpa"
              />
              <Text
                className="ml-[-13px] mt-2.5 sm:text-[33px] md:text-[35px] text-[37px] text-lime-900 z-[1]"
                size="txtAntonRegular37"
              >
                ZONA
              </Text>
              <Text
                className="mb-3.5 ml-[-6px] mr-2.5 mt-auto sm:text-[21px] md:text-[23px] text-[25px] text-gray-500 z-[1]"
                size="txtAntonRegular25"
              >
                ALAM
              </Text>
            </div>
            <div className="h-[287px] relative w-full">
              <Img
                className="h-[287px] m-auto object-cover rounded-[29px] w-full"
                src="images/img_gambaruntuklogin.png"
                alt="gambaruntuklogi"
              />
              <PagerIndicator
                className="absolute bottom-[10%] flex h-[9px] inset-x-[0] justify-center mx-auto w-[60px]"
                count={4}
                activeCss="inline-block cursor-pointer rounded-[50%] h-[9px] bg-white-A700 w-[9px] relative"
                activeIndex={1}
                inactiveCss="inline-block cursor-pointer rounded-[50%] h-[9px] bg-gray-400 w-[9px] relative"
                selectedWrapperCss="inline-block mx-[4.00px]"
                unselectedWrapperCss="inline-block mx-[4.00px]"
              />
            </div>
          </div>
          <div className="flex md:flex-1 flex-col font-overlock gap-[34px] items-center justify-start w-[56%] md:w-full">
            <Text
              className="text-5xl sm:text-[38px] md:text-[44px] text-blue_gray-900"
              size="txtOverlockBold48"
            >
              Log in
            </Text>
            <div className="bg-white-A700 flex flex-col items-center justify-end p-[47px] md:px-10 sm:px-5 rounded-[20px] shadow-bs1 w-full">
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
                  onClick={() => navigate("/accountsetting")}
                  shape="round"
                  color="lime_900"
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
                <RegistrationOneColumnsearchone
                  className="flex flex-col font-poppins items-start justify-start md:ml-[0] ml-[267px] mt-[23px] w-[57%] md:w-full"
                  language="Log in with Google "
                />
                <Text
                  className="md:ml-[0] ml-[262px] mt-[25px] text-base text-gray-800"
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

export default LoginPage;
