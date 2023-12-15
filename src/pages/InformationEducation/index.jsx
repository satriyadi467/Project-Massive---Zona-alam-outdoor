import React from "react";

import { Button, Img, Line, PagerIndicator, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const InformationEducationPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-end mx-auto pt-[46px] w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <Header className="bg-white-A700 flex flex-col items-center justify-center md:px-5 rounded-[20px] shadow-bs w-full" />
          <div className="flex flex-col items-center justify-start mt-[210px] md:px-5 w-auto sm:w-full">
            <Text
              className="sm:text-[33px] md:text-[39px] text-[43px] text-black-900 w-auto"
              size="txtPoppinsSemiBold43"
            >
              Information & Education
            </Text>
            <Text
              className="md:text-5xl text-[63px] text-black-900 w-auto"
              size="txtPoppinsBold63"
            >
              CAMPING
            </Text>
          </div>
          <div className="md:gap-5 gap-[74px] grid md:grid-cols-1 grid-cols-2 justify-center max-w-[1380px] min-h-[auto] mt-[457px] mx-auto md:px-5 w-full">
            <div className="md:h-[564px] h-[593px] relative w-full">
              <Img
                className="absolute h-[564px] inset-x-[0] mx-auto top-[0] w-[645px]"
                src="images/img_frame427319346.svg"
                alt="frame427319346"
              />
              <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-[99%]">
                <Text
                  className="sm:text-2xl md:text-[26px] text-[28px] text-blue_gray-900 text-center"
                  size="txtPoppinsSemiBold28"
                >
                  Cara Mendirikan Tenda Mahika
                </Text>
                <div className="h-[146px] md:h-[149px] mt-[3px] relative w-full">
                  <Text
                    className="m-auto text-base text-center text-gray-800 w-full"
                    size="txtPoppinsRegular16Gray800"
                  >
                    Tutorial lengkap dengan gambar untuk memudahkan anda
                    mendirikan/memasang tenda mahadika. Lengkap dengan Step by
                    step cara memasang tenda.
                  </Text>
                  <Text
                    className="absolute bottom-[34%] inset-x-[0] mx-auto text-base text-justify text-lime-900 w-max"
                    size="txtPoppinsSemiBold16"
                  >
                    <>View More &gt;</>
                  </Text>
                </div>
              </div>
            </div>
            <div className="md:h-[564px] h-[593px] relative w-full">
              <Img
                className="absolute h-[564px] inset-x-[0] mx-auto top-[0] w-[645px]"
                src="images/img_frame427319346.svg"
                alt="frame427319372"
              />
              <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-[99%]">
                <Text
                  className="sm:text-2xl md:text-[26px] text-[28px] text-blue_gray-900 text-center"
                  size="txtPoppinsSemiBold28"
                >
                  Solo Camping Overnight
                </Text>
                <div className="h-[146px] relative w-full">
                  <Text
                    className="m-auto text-base text-center text-gray-800 w-full"
                    size="txtPoppinsRegular16Gray800"
                  >
                    Oke teman-teman, kali ini kontennya masih solo camping lagi
                    ya. Dan lokasi yang saya pilih masih benar-benar hutan
                    belantara yang memang masih belum ada jalan. Kalopun ada
                    jalan setapak, itu merupakan ...
                  </Text>
                  <Text
                    className="absolute bottom-[34%] inset-x-[0] mx-auto text-base text-justify text-lime-900 w-max"
                    size="txtPoppinsSemiBold16"
                  >
                    <>View More &gt;</>
                  </Text>
                </div>
              </div>
            </div>
            <div className="h-[564px] relative w-full">
              <Img
                className="absolute h-[564px] inset-[0] m-auto w-[645px]"
                src="images/img_frame427319346.svg"
                alt="frame427319373"
              />
              <div className="absolute bottom-[6%] flex flex-col inset-x-[0] items-center justify-start mx-auto w-[99%]">
                <Text
                  className="sm:text-2xl md:text-[26px] text-[28px] text-blue_gray-900 text-center"
                  size="txtPoppinsSemiBold28"
                >
                  Tenda Kamu Rembes? Ini Cara Atasinya!
                </Text>
                <div className="h-[146px] relative w-full">
                  <Text
                    className="m-auto text-base text-center text-gray-800 w-full"
                    size="txtPoppinsRegular16Gray800"
                  >
                    Tutorial lengkap dengan gambar untuk mengatasi tenda yang
                    rembes saat berkemah. Yuk! simak videonya...
                  </Text>
                  <Text
                    className="absolute bottom-[34%] inset-x-[0] mx-auto text-base text-justify text-lime-900 w-max"
                    size="txtPoppinsSemiBold16"
                  >
                    <>View More &gt;</>
                  </Text>
                </div>
              </div>
            </div>
            <div className="h-[564px] relative w-full">
              <Img
                className="absolute h-[564px] inset-[0] m-auto w-[645px]"
                src="images/img_frame427319346.svg"
                alt="frame427319375"
              />
              <div className="absolute bottom-[6%] flex flex-col items-center justify-start left-[0] w-[96%]">
                <Text
                  className="sm:text-2xl md:text-[26px] text-[28px] text-blue_gray-900 text-center"
                  size="txtPoppinsSemiBold28"
                >
                  Cara Packing Carrier
                </Text>
                <div className="h-[146px] relative w-full">
                  <Text
                    className="m-auto text-base text-center text-gray-800 w-full"
                    size="txtPoppinsRegular16Gray800"
                  >
                    Bagaimana sih cara packing untuk berkemah yang benar? Yuk,
                    kita simak video ini untuk memperdalam ilmu kita dalam
                    berkemah!.
                  </Text>
                  <Text
                    className="absolute bottom-[34%] inset-x-[0] mx-auto text-base text-justify text-lime-900 w-max"
                    size="txtPoppinsSemiBold16"
                  >
                    <>View More &gt;</>
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="md:h-[653px] h-[783px] mt-[89px] md:px-5 relative w-full">
            <Img
              className="absolute h-[564px] left-[0] object-cover top-[0] w-[97px]"
              src="images/img_frame427319374.png"
              alt="frame427319374"
            />
            <div className="absolute flex flex-col items-center justify-start left-[11%] top-[28%] w-[37%]">
              <Text
                className="sm:text-2xl md:text-[26px] text-[28px] text-blue_gray-900 text-center"
                size="txtPoppinsSemiBold28"
              >
                Perlengkapan Camping Bagi Pemula
              </Text>
              <div className="h-[146px] relative w-full">
                <Text
                  className="m-auto text-base text-center text-gray-800 w-full"
                  size="txtPoppinsRegular16Gray800"
                >
                  Yuk, jangan ketinggalan tentang apa saja sih yang harus
                  dipersiapkan untuk perlengkapan camping bagi pemula.
                </Text>
                <Text
                  className="absolute bottom-[34%] inset-x-[0] mx-auto text-base text-justify text-lime-900 w-max"
                  size="txtPoppinsSemiBold16"
                >
                  <>View More &gt;</>
                </Text>
              </div>
            </div>
            <Footer className="absolute bottom-[0] flex inset-x-[0] items-center justify-center mx-auto w-full" />
            <div className="absolute flex flex-col gap-[15px] items-center justify-start right-[26%] top-[5%] w-[6%]">
              <div className="flex flex-col items-center justify-start w-auto">
                <Text
                  className="text-4xl sm:text-[32px] md:text-[34px] text-blue_gray-900 w-auto"
                  size="txtPoppinsSemiBold36"
                >
                  MORE
                </Text>
              </div>
              <PagerIndicator
                className="flex h-3 justify-center w-[87px]"
                count={3}
                activeCss="inline-block cursor-pointer rounded-[50%] h-3 bg-gray-700 w-3"
                activeIndex={1}
                inactiveCss="inline-block cursor-pointer rounded-[50%] h-3 bg-blue_gray-400 w-3"
                selectedWrapperCss="inline-block md:ml-[0] mx-[13.00px] sm:ml-[0]"
                unselectedWrapperCss="inline-block md:ml-[0] mx-[13.00px] sm:ml-[0]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InformationEducationPage;
