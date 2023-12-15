import React from "react";

import { Button, Img, Line, PagerIndicator, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";

const InformationEducationOnePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="h-[848px] md:px-5 relative w-full">
            <Img
              className="h-[848px] m-auto object-cover w-full"
              src="images/img_pngtree4kwall.png"
              alt="pngtree4kwall"
            />
            <div className="absolute flex flex-col md:gap-10 gap-[210px] inset-x-[0] items-center justify-start mx-auto top-[5%] w-[82%]">
              <Header className="bg-white-A700 flex flex-col items-center justify-center rounded-[20px] shadow-bs w-full" />
              <div className="flex flex-col items-center justify-start w-auto sm:w-full">
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
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 gap-[78px] items-center justify-start max-w-[1352px] mt-[169px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-1 flex-col items-start justify-start w-[48%] md:w-full">
              <Img
                className="h-[312px] sm:h-auto md:ml-[0] ml-[3px] object-cover rounded-[30px] w-[94%] md:w-full"
                src="images/img_hq7201.png"
                alt="hq7201"
              />
              <Text
                className="ml-24 md:ml-[0] mt-7 sm:text-2xl md:text-[26px] text-[28px] text-blue_gray-900 text-center"
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
            <div className="flex md:flex-1 flex-col gap-[31px] items-start justify-start w-[48%] md:w-full">
              <Img
                className="h-[312px] md:h-auto object-cover rounded-[41px] w-[94%]"
                src="images/img_maxresdefault1.png"
                alt="maxresdefaultOne"
              />
              <div className="flex flex-col items-center justify-start ml-0.5 md:ml-[0] w-full">
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
          </div>
          <div className="sm:h-[531px] h-[532px] md:h-[883px] max-w-[1352px] mx-auto md:px-5 relative w-full">
            <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-[98%]">
              <div className="flex flex-col items-start justify-start w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between md:ml-[0] ml-[3px] w-full">
                  <div className="h-[312px] relative w-[46%] md:w-full">
                    <Img
                      className="h-[312px] m-auto object-cover rounded-[30px] w-full"
                      src="images/img_hq7201.png"
                      alt="hq7201_One"
                    />
                    <Img
                      className="absolute h-[312px] inset-[0] justify-center m-auto object-cover rounded-[37px] w-full"
                      src="images/img_556293f96a0d4.png"
                      alt="556293f96a0dFour"
                    />
                  </div>
                  <Img
                    className="h-[312px] md:h-auto object-cover rounded-[35px]"
                    src="images/img_hq72011.png"
                    alt="hq72011"
                  />
                </div>
                <Text
                  className="md:ml-[0] ml-[29px] mt-[31px] sm:text-2xl md:text-[26px] text-[28px] text-blue_gray-900 text-center"
                  size="txtPoppinsSemiBold28"
                >
                  Tenda Kamu Rembes? Ini Cara Atasinya!
                </Text>
                <div className="h-[146px] relative w-[49%] md:w-full">
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
            <div className="absolute bottom-[0] flex flex-col items-center justify-start right-[0] w-[48%]">
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
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[1100px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-1 flex-col gap-[31px] items-start justify-start w-[59%] md:w-full">
              <Img
                className="h-[312px] md:h-auto object-cover rounded-[34px] w-[93%]"
                src="images/img_maxresdefault1_312x595.png"
                alt="maxresdefaultOne_One"
              />
              <div className="flex flex-col items-center justify-start ml-1 md:ml-[0] w-full">
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
            </div>
            <div className="flex md:flex-1 flex-col gap-[15px] items-center justify-start md:mt-0 mt-[164px] w-[10%] md:w-full">
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
          <Footer className="flex items-center justify-center mt-14 md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default InformationEducationOnePage;
