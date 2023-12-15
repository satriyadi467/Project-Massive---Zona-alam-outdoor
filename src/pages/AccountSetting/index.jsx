import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Text } from "components";

const AccountSettingPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-lime-900 flex font-poppins h-[1117px] justify-end mx-auto relative w-full">
        <div className="flex flex-col h-full items-center justify-end mt-auto mx-auto w-full">
          <div className="flex flex-col md:gap-10 gap-[410px] items-center justify-start w-full">
            <div className="bg-lime-900 h-[328px] w-full"></div>
            <div className="bg-white-A700 h-[837px] w-full"></div>
          </div>
        </div>
        <div className="absolute bg-white-A700 flex flex-col h-max inset-[0] items-center justify-center m-auto max-w-[1331px] p-[49px] md:px-5 rounded-[20px] shadow-bs w-full">
          <div className="flex flex-col items-start justify-start mb-[19px] w-[86%] md:w-full">
            <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-[96%] md:w-full">
              <Text
                className="text-5xl sm:text-[38px] md:text-[44px] text-lime-900"
                size="txtPoppinsBold48Lime900"
              >
                Account Settings
              </Text>
              <div className="font-anton h-[111px] relative w-[17%] sm:w-full">
                <div className="flex m-auto w-full">
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
                </div>
                <Text
                  className="absolute bottom-[13%] right-[6%] sm:text-[21px] md:text-[23px] text-[25px] text-gray-500"
                  size="txtAntonRegular25"
                >
                  ALAM
                </Text>
              </div>
            </div>
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-[53px] w-full">
              <div className="flex md:flex-1 flex-col items-start justify-start w-[56%] md:w-full">
                <Text
                  className="text-blue_gray-900 text-xl"
                  size="txtPoppinsSemiBold20Bluegray900"
                >
                  Your Name
                </Text>
                <Input
                  name="textarea"
                  placeholder="Search your waste bank here!"
                  className="leading-[normal] p-0 placeholder:text-gray-400_01 text-base text-left w-full"
                  wrapClassName="border-2 border-gray-400_01 border-solid mt-1 w-full"
                ></Input>
                <Text
                  className="mt-[34px] text-blue_gray-900 text-xl"
                  size="txtPoppinsSemiBold20Bluegray900"
                >
                  Email Address
                </Text>
                <Input
                  name="textarea_One"
                  placeholder="Search your waste bank here!"
                  className="leading-[normal] p-0 placeholder:text-gray-400_01 text-base text-left w-full"
                  wrapClassName="border-2 border-gray-400_01 border-solid mt-[5px] w-full"
                ></Input>
                <Text
                  className="mt-[34px] text-blue_gray-900 text-xl"
                  size="txtPoppinsSemiBold20Bluegray900"
                >
                  Password
                </Text>
              </div>
              <div className="bg-gray-50_01 border border-blue_gray-700 border-dashed flex md:flex-1 flex-col font-manrope items-center justify-center p-[82px] md:px-10 sm:px-5 rounded-[18px] w-[26%] md:w-full">
                <div className="flex flex-col items-center justify-start mt-1 w-[104px] md:w-full">
                  <div className="flex flex-col items-center justify-start w-[104px] md:w-full">
                    <div className="flex flex-col gap-3.5 items-center justify-start w-[104px] md:w-full">
                      <Img
                        className="h-[74px] w-[74px]"
                        src="images/img_galleryadd.svg"
                        alt="television"
                      />
                      <Text
                        className="text-blue_gray-700 text-center text-xs"
                        size="txtManropeMedium12"
                      >
                        Upload your photo
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mt-[5px] w-[98%] md:w-full">
              <Input
                name="textarea_Two"
                placeholder="Search your waste bank here!"
                className="leading-[normal] p-0 placeholder:text-gray-400_01 text-base text-left w-full"
                wrapClassName="border-2 border-gray-400_01 border-solid mb-5 md:w-full"
              ></Input>
              <Button
                className="cursor-pointer font-semibold leading-[normal] min-w-[224px] md:mt-0 mt-5 text-center text-xl"
                shape="round"
                color="lime_900"
                size="sm"
                variant="fill"
              >
                Upload Image
              </Button>
            </div>
            <div className="flex flex-row gap-[71px] items-center justify-end md:ml-[0] ml-[393px] mt-[189px] w-[35%] md:w-full">
              <Text
                className="text-gray-400_01 text-xl"
                size="txtPoppinsMedium20"
              >
                Cancel
              </Text>
              <Button
                className="common-pointer cursor-pointer font-semibold leading-[normal] min-w-[223px] text-center text-xl"
                onClick={() => navigate("/dashboard")}
                shape="round"
                color="lime_900"
                size="sm"
                variant="fill"
              >
                Update Profile
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountSettingPage;
