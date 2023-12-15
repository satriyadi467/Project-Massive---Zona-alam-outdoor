import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, PagerIndicator, Text } from "components";
import RegistrationOneColumnsearchone from "components/RegistrationOneColumnsearchone";

const RegistrationOnePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 font-overlock h-[1117px] mx-auto overflow-auto md:pl-10 sm:pl-5 pl-[83px] py-[83px] relative w-full">
        <div className="absolute flex flex-col h-max inset-y-[0] items-center justify-start my-auto right-[0] w-[84%]">
          <div className="flex flex-col gap-[33px] justify-start w-full">
            <Text
              className="md:ml-[0] ml-[717px] text-5xl sm:text-[38px] md:text-[44px] text-blue_gray-900"
              size="txtOverlockBold48"
            >
              Registration
            </Text>
            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
              <PagerIndicator
                className="flex h-[9px] md:mt-0 mt-[475px] w-[60px]"
                count={4}
                activeCss="inline-block cursor-pointer rounded-[50%] h-[9px] bg-white-A700 w-[9px]"
                activeIndex={1}
                inactiveCss="inline-block cursor-pointer rounded-[50%] h-[9px] bg-gray-400 w-[9px]"
                selectedWrapperCss="inline-block md:ml-[0] mx-[4.00px] sm:ml-[0]"
                unselectedWrapperCss="inline-block md:ml-[0] mx-[4.00px] sm:ml-[0]"
              />
              <div className="flex md:flex-1 md:flex-col flex-row gap-2.5 items-start justify-start w-auto md:w-full">
                <div className="bg-white-A700 md:h-[811px] sm:h-[822px] h-[850px] relative rounded-[20px] shadow-bs1 w-[82%] md:w-full">
                  <div className="flex flex-col gap-2.5 h-full justify-start m-auto w-[87%]">
                    <Text
                      className="md:ml-[0] ml-[376px] text-blue_gray-900 text-xl w-auto"
                      size="txtOverlockBold20"
                    >
                      Last Name
                    </Text>
                    <div className="flex flex-col items-start justify-start w-full">
                      <div className="flex md:flex-col flex-row font-poppins gap-[31px] items-center justify-between w-full">
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
                      <div className="flex flex-col gap-[23px] items-start justify-start mt-[59px] w-full">
                        <div className="bg-white-A700 border-2 border-gray-400_01 border-solid flex flex-col font-poppins items-start justify-end p-[11px] rounded-lg w-full">
                          <Text
                            className="md:ml-[0] ml-[25px] mt-1 text-base text-gray-400_01"
                            size="txtPoppinsRegular16"
                          >
                            Search your waste bank here!
                          </Text>
                        </div>
                        <Text
                          className="text-blue_gray-900 text-xl w-auto"
                          size="txtOverlockBold20"
                        >
                          Mobile Phone
                        </Text>
                      </div>
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
                        onClick={() => navigate("/loginone")}
                      >
                        <a
                          href="javascript:"
                          className="mt-[3px] text-white-A700 text-xl"
                        >
                          <Text size="txtPoppinsSemiBold20">Register</Text>
                        </a>
                      </div>
                      <Text
                        className="md:ml-[0] ml-[440px] mt-6 text-base text-gray-800 w-auto"
                        size="txtPoppinsRegular16Gray800"
                      >
                        OR
                      </Text>
                      <RegistrationOneColumnsearchone className="flex flex-col font-poppins items-start justify-start md:ml-[0] ml-[264px] mt-[23px] w-[57%] md:w-full" />
                      <Text
                        className="md:ml-[0] ml-[285px] mt-[25px] text-base text-gray-800 w-auto"
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
                        color="gray_500"
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
                      <Text
                        className="md:ml-[0] ml-[222px] mt-[94px] text-base text-gray-800 w-auto"
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
                  Password
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bg-blue_gray-100 h-[297px] left-[8%] md:px-5 rounded-[30px] top-[34%] w-[30%]"></div>
      </div>
    </>
  );
};

export default RegistrationOnePage;
