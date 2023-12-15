import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, PagerIndicator, Text } from "components";
import RegistrationOneColumnsearchone from "components/RegistrationOneColumnsearchone";

const RegistrationPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-anton items-center justify-end mx-auto p-[83px] md:px-10 sm:px-5 w-full">
        <div className="flex flex-col items-center justify-start max-w-[1484px] mt-[7px] mx-auto w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
            <div className="flex md:flex-1 flex-col gap-[26px] items-center justify-start md:mt-0 mt-[183px] w-[35%] md:w-full">
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
            <div className="flex md:flex-1 flex-col font-overlock gap-[34px] items-center justify-start w-[57%] md:w-full">
              <Text
                className="text-5xl sm:text-[38px] md:text-[44px] text-blue_gray-900"
                size="txtOverlockBold48"
              >
                Registration
              </Text>
              <div className="bg-white-A700 md:h-[810px] sm:h-[821px] h-[850px] relative rounded-[20px] shadow-bs1 w-[834px] md:w-full">
                <div className="flex flex-col h-full items-start justify-start m-auto w-[87%]">
                  <div className="flex flex-row font-overlock items-center justify-between w-[65%] md:w-full">
                    <Text
                      className="text-blue_gray-900 text-xl w-auto"
                      size="txtOverlockBold20"
                    >
                      First Name
                    </Text>
                    <Text
                      className="text-blue_gray-900 text-xl w-auto"
                      size="txtOverlockBold20"
                    >
                      Last Name
                    </Text>
                  </div>
                  <div className="flex md:flex-col flex-row font-poppins gap-[31px] items-center justify-between mt-2.5 w-full">
                    <div className="bg-white-A700 border-2 border-gray-400_01 border-solid flex flex-col items-start justify-end p-[11px] rounded-lg">
                      <Text
                        className="md:ml-[0] ml-[5px] mt-1 text-base text-gray-400_01"
                        size="txtPoppinsRegular16"
                      >
                        Search your waste bank here!
                      </Text>
                    </div>
                    <div className="bg-white-A700 border-2 border-gray-400_01 border-solid flex flex-col items-start justify-end p-[11px] rounded-lg">
                      <Text
                        className="md:ml-[0] ml-[5px] mt-1 text-base text-gray-400_01"
                        size="txtPoppinsRegular16"
                      >
                        Search your waste bank here!
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="mt-[23px] text-blue_gray-900 text-xl w-auto"
                    size="txtOverlockBold20"
                  >
                    Email
                  </Text>
                  <div className="bg-white-A700 border-2 border-gray-400_01 border-solid flex flex-col font-poppins items-start justify-end mt-2.5 p-[11px] rounded-lg w-full">
                    <Text
                      className="md:ml-[0] ml-[25px] mt-1 text-base text-gray-400_01"
                      size="txtPoppinsRegular16"
                    >
                      Search your waste bank here!
                    </Text>
                  </div>
                  <Text
                    className="mt-[23px] text-blue_gray-900 text-xl w-auto"
                    size="txtOverlockBold20"
                  >
                    Password
                  </Text>
                  <div className="bg-white-A700 border-2 border-gray-400_01 border-solid flex flex-col font-poppins items-start justify-end mt-2.5 p-[11px] rounded-lg w-full">
                    <Text
                      className="md:ml-[0] ml-[25px] mt-1 text-base text-gray-400_01"
                      size="txtPoppinsRegular16"
                    >
                      Search your waste bank here!
                    </Text>
                  </div>
                  <Text
                    className="mt-[23px] text-blue_gray-900 text-xl w-auto"
                    size="txtOverlockBold20"
                  >
                    Mobile Phone
                  </Text>
                  <div className="bg-white-A700 border-2 border-gray-400_01 border-solid flex flex-col font-poppins items-start justify-end mt-2.5 p-[11px] rounded-lg w-full">
                    <Text
                      className="md:ml-[0] ml-[25px] mt-1 text-base text-gray-400_01"
                      size="txtPoppinsRegular16"
                    >
                      Search your waste bank here!
                    </Text>
                  </div>
                  <div
                    className="common-pointer bg-lime-900 flex flex-col font-poppins items-center justify-end md:ml-[0] ml-[235px] mt-[104px] p-[9px] rounded-lg"
                    onClick={() => navigate("/login")}
                  >
                    <a
                      href="javascript:"
                      className="mt-[3px] text-white-A700 text-xl"
                    >
                      <Text size="txtPoppinsSemiBold20">Register</Text>
                    </a>
                  </div>
                  <Text
                    className="md:ml-[0] ml-[348px] mt-6 text-base text-gray-800"
                    size="txtPoppinsRegular16Gray800"
                  >
                    OR
                  </Text>
                  <RegistrationOneColumnsearchone className="flex flex-col font-poppins items-start justify-start md:ml-[0] ml-[264px] mt-[23px] w-[57%] md:w-full" />
                  <Text
                    className="md:ml-[0] ml-[222px] mt-[25px] text-base text-gray-800 w-auto"
                    size="txtPoppinsRegular16Gray800"
                  >
                    <span className="text-gray-800 font-poppins text-left font-normal">
                      Already have’ an account?{" "}
                    </span>
                    <span className="text-lime-900_01 font-poppins text-left font-semibold">
                      Sign in
                    </span>
                  </Text>
                </div>
                <div className="absolute bg-white-A700 flex flex-col h-full inset-[0] items-center justify-end m-auto rounded-[20px] shadow-bs1 w-auto">
                  <div className="flex flex-col items-start justify-start w-[87%]">
                    <div className="flex flex-row font-overlock items-center justify-between w-[65%] md:w-full">
                      <Text
                        className="text-blue_gray-900 text-xl w-auto"
                        size="txtOverlockBold20"
                      >
                        First Name
                      </Text>
                      <Text
                        className="text-blue_gray-900 text-xl w-auto"
                        size="txtOverlockBold20"
                      >
                        Last Name
                      </Text>
                    </div>
                    <div className="flex sm:flex-col flex-row font-poppins gap-[31px] items-center justify-between mt-2.5 w-full">
                      <Input
                        name="textarea"
                        placeholder="Search your waste bank here!"
                        className="leading-[normal] p-0 placeholder:text-gray-400_01 text-base text-left w-full"
                        wrapClassName="border-2 border-gray-400_01 border-solid sm:flex-1 sm:w-full"
                      ></Input>
                      <Input
                        name="textarea_One"
                        placeholder="Search your waste bank here!"
                        className="leading-[normal] p-0 placeholder:text-gray-400_01 text-base text-left w-full"
                        wrapClassName="border-2 border-gray-400_01 border-solid sm:flex-1 sm:w-full"
                      ></Input>
                    </div>
                    <Text
                      className="mt-[23px] text-blue_gray-900 text-xl w-auto"
                      size="txtOverlockBold20"
                    >
                      Email
                    </Text>
                    <Input
                      name="textarea_Two"
                      placeholder="Search your waste bank here!"
                      className="font-poppins leading-[normal] p-0 placeholder:text-gray-400_01 text-base text-left w-full"
                      wrapClassName="border-2 border-gray-400_01 border-solid mt-2.5 w-full"
                    ></Input>
                    <Text
                      className="mt-[23px] text-blue_gray-900 text-xl w-auto"
                      size="txtOverlockBold20"
                    >
                      Password
                    </Text>
                    <Input
                      name="textarea_Three"
                      placeholder="Search your waste bank here!"
                      className="font-poppins leading-[normal] p-0 placeholder:text-gray-400_01 text-base text-left w-full"
                      wrapClassName="border-2 border-gray-400_01 border-solid mt-2.5 w-full"
                    ></Input>
                    <Text
                      className="mt-[23px] text-blue_gray-900 text-xl w-auto"
                      size="txtOverlockBold20"
                    >
                      Mobile Phone
                    </Text>
                    <Input
                      name="textarea_Four"
                      placeholder="Search your waste bank here!"
                      className="font-poppins leading-[normal] p-0 placeholder:text-gray-400_01 text-base text-left w-full"
                      wrapClassName="border-2 border-gray-400_01 border-solid mt-2.5 w-full"
                    ></Input>
                    <Button
                      className="cursor-pointer font-poppins font-semibold leading-[normal] min-w-[251px] md:ml-[0] ml-[235px] mt-[104px] text-center text-xl"
                      shape="round"
                      color="lime_900"
                      size="sm"
                      variant="fill"
                    >
                      Register
                    </Button>
                    <Text
                      className="md:ml-[0] ml-[348px] mt-6 text-base text-gray-800"
                      size="txtPoppinsRegular16Gray800"
                    >
                      OR
                    </Text>
                    <div className="flex flex-col font-poppins items-start justify-start md:ml-[0] ml-[264px] mt-[23px] w-[57%] md:w-full">
                      <div className="bg-white-A700 border border-gray-200 border-solid flex flex-row gap-3.5 items-center justify-start p-2.5 rounded-[9px] w-[47%] md:w-full">
                        <Img
                          className="h-[25px] md:h-auto object-cover w-[25px]"
                          src="images/img_search1.png"
                          alt="searchOne_One"
                        />
                        <Text
                          className="text-black-900 text-xs"
                          size="txtPoppinsRegular12"
                        >
                          Sign up with Google{" "}
                        </Text>
                      </div>
                    </div>
                    <Text
                      className="md:ml-[0] ml-[222px] mt-[25px] text-base text-gray-800 w-auto"
                      size="txtPoppinsRegular16Gray800"
                    >
                      <span className="text-gray-800 font-poppins text-left font-normal">
                        Already have’ an account?{" "}
                      </span>
                      <span className="text-lime-900_01 font-poppins text-left font-semibold">
                        Sign in
                      </span>
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegistrationPage;
