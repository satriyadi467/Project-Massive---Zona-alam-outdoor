import React from "react";

import { Button, Img, Line, Text } from "components";
import Header from "components/Header";

const RentCheckoutOnePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-start mx-auto pb-[704px] w-full">
        <div className="flex flex-col md:gap-10 gap-[85px] items-center justify-start w-full">
          <div className="bg-gray-400_01 flex flex-col items-center justify-start p-[42px] md:px-10 sm:px-5 w-full">
            <div className="flex flex-col md:gap-10 gap-[123px] justify-start max-w-[1412px] mb-8 mx-auto w-full">
              <Header className="bg-white-A700 flex flex-col items-center justify-center rounded-[20px] shadow-bs w-full" />
              <div className="flex md:flex-col flex-row md:gap-10 gap-[66px] items-start justify-start ml-4 md:ml-[0] w-[78%] md:w-full">
                <div className="bg-white-A700 h-[517px] rounded-[20px] w-[44%]"></div>
                <div className="flex flex-col items-start justify-start w-[51%] md:w-full">
                  <Text
                    className="md:ml-[0] ml-[3px] sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                    size="txtPoppinsSemiBold28WhiteA700"
                  >
                    Product
                  </Text>
                  <div className="md:h-[74px] h-[99px] md:ml-[0] ml-[3px] mt-[5px] relative w-full">
                    <Text
                      className="absolute inset-x-[0] mx-auto text-5xl sm:text-[38px] md:text-[44px] text-yellow-50 top-[0] w-max"
                      size="txtPoppinsBold48Yellow50"
                    >
                      Tenda Ukuran 2 Orang
                    </Text>
                    <Text
                      className="absolute bottom-[0] left-[0] md:text-2xl sm:text-[22px] text-[26px] text-gray-50"
                      size="txtInterBold26"
                    >
                      Spesifkasi Produk
                    </Text>
                  </div>
                  <Text
                    className="mt-2.5 text-[22px] text-gray-50 sm:text-lg md:text-xl"
                    size="txtInterRegular22"
                  >
                    <>
                      - Ukuran P x L x T : (60 + 145 + 60) x 205 x 105 CM
                      <br />- Ukuran Packing : 50 x 15 x 15 CM
                      <br />- Frame alumunium alloy
                      <br />- Berat : 2.3 KG
                    </>
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[3px] mt-[71px] md:text-3xl sm:text-[28px] text-[32px] text-yellow-50"
                    size="txtPoppinsBold32"
                  >
                    Rp. 50.000
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[3px] text-base text-justify text-white-A700"
                    size="txtPoppinsRegular16WhiteA700"
                  >
                    Quantity :
                  </Text>
                  <div className="font-poppins h-[30px] md:h-[42px] md:ml-[0] ml-[3px] mt-3 relative w-[17%]">
                    <div className="absolute bg-white-A700 flex flex-row gap-[30px] h-full inset-[0] items-center justify-between m-auto w-full">
                      <Img
                        className="h-[30px] w-[30px]"
                        src="images/img_icbaselineminus.svg"
                        alt="icbaselineminus"
                      />
                      <Img
                        className="h-[30px] w-[30px]"
                        src="images/img_icbaselineplus.svg"
                        alt="icbaselineplus"
                      />
                    </div>
                    <Text
                      className="absolute h-full inset-[0] justify-center m-auto text-center text-lime-900 text-xl w-max"
                      size="txtPoppinsRegular20Lime900"
                    >
                      1
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start max-w-[1331px] mx-auto md:px-5 w-full">
            <div className="flex flex-row sm:gap-10 items-start justify-between w-[67%] md:w-full">
              <Text
                className="mb-0.5 text-blue_gray-900 text-xl"
                size="txtPoppinsSemiBold20Bluegray900"
              >
                Name
              </Text>
              <Text
                className="mt-0.5 text-blue_gray-900 text-xl"
                size="txtPoppinsSemiBold20Bluegray900"
              >
                Choose Payment
              </Text>
            </div>
            <div className="flex sm:flex-col flex-row gap-[38px] items-center justify-between mt-0.5 w-full">
              <Img
                className="h-[52px]"
                src="images/img_textarea.svg"
                alt="textarea"
              />
              <Img
                className="h-[52px]"
                src="images/img_textarea.svg"
                alt="textarea_One"
              />
            </div>
            <div className="flex flex-row sm:gap-10 items-start justify-between mt-[35px] w-[61%] md:w-full">
              <Text
                className="mt-[5px] text-blue_gray-900 text-xl"
                size="txtPoppinsSemiBold20Bluegray900"
              >
                Address
              </Text>
              <Text
                className="mb-[5px] text-blue_gray-900 text-xl"
                size="txtPoppinsSemiBold20Bluegray900"
              >
                Payment
              </Text>
            </div>
            <Img
              className="h-[52px] mt-[9px]"
              src="images/img_textarea.svg"
              alt="textarea_Two"
            />
            <Text
              className="mt-[35px] text-blue_gray-900 text-xl"
              size="txtPoppinsSemiBold20Bluegray900"
            >
              Phone number
            </Text>
            <Img
              className="h-[52px] mt-3.5"
              src="images/img_textarea.svg"
              alt="textarea_Three"
            />
            <Text
              className="md:ml-[0] ml-[713px] mt-[76px] text-blue_gray-900 text-xl"
              size="txtPoppinsSemiBold20Bluegray900"
            >
              Total :
            </Text>
            <div className="flex flex-row gap-[71px] items-center justify-end md:ml-[0] ml-[941px] mt-[87px] w-[28%] md:w-full">
              <Text
                className="text-gray-400_01 text-xl"
                size="txtPoppinsMedium20"
              >
                Cancel
              </Text>
              <Button
                className="cursor-pointer font-semibold leading-[normal] min-w-[227px] text-center text-xl"
                shape="round"
                color="blue_gray_700"
                size="sm"
                variant="fill"
              >
                Check Out
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RentCheckoutOnePage;
