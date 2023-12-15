import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, Text } from "components";
import Header from "components/Header";

const BeOurPartnerOnePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins sm:gap-10 md:gap-10 gap-[127px] items-center justify-start mx-auto pb-[1261px] w-full">
        <div className="h-[1022px] md:h-[1295px] sm:h-[837px] md:px-5 relative w-full">
          <div className="absolute bg-lime-900_01 flex flex-col inset-x-[0] items-center justify-start mx-auto p-[39px] sm:px-5 top-[0] w-full">
            <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-start mb-[210px] w-[86%] md:w-full">
              <Header className="bg-white-A700 flex flex-col items-center justify-center rounded-[20px] shadow-bs w-full" />
              <div className="flex md:flex-col flex-row gap-[19px] items-start justify-start w-[95%] md:w-full">
                <div className="flex flex-col gap-[27px] items-center justify-start md:mt-0 mt-[94px] w-[69%] md:w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                      size="txtPoppinsSemiBold28WhiteA700"
                    >
                      Be Our Partner
                    </Text>
                    <Text
                      className="text-5xl sm:text-[38px] md:text-[44px] text-yellow-50 w-full"
                      size="txtPoppinsBold48Yellow50"
                    >
                      Jadilah mitra kami dan sewakan alat perkemahan anda
                    </Text>
                  </div>
                  <Text
                    className="text-base text-justify text-white-A700 w-[99%] sm:w-full"
                    size="txtPoppinsRegular16WhiteA700"
                  >
                    Selamat datang di dunia petualangan, di mana momen tak
                    terlupakan dan pengalaman seru menanti untuk dijelajahi!
                    Kami, [Nama Perusahaan], mengundang Anda untuk bergabung
                    sebagai mitra kami dalam menjadikan setiap petualangan lebih
                    mudah diakses dan menyenangkan.
                  </Text>
                </div>
                <div className="bg-lime-900 flex flex-col h-[401px] sm:h-auto items-end justify-end mb-2 pt-[46px] md:px-10 sm:px-5 px-[46px] rounded-[200px] w-[401px] sm:w-full">
                  <div className="flex flex-col items-center justify-start mt-[19px] w-[88%] md:w-full">
                    <Img
                      className="h-[335px]"
                      src="images/img_component11.svg"
                      alt="componentEleven"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bg-white-A700 bottom-[0] flex flex-col items-center justify-start left-[32%] p-10 sm:px-5 rounded-[20px] shadow-bs w-[18%]">
            <div className="bg-lime-900 flex flex-col h-[146px] items-end justify-start pt-[17px] px-[17px] rounded-[50%] w-[146px]">
              <div className="flex flex-col items-center justify-start mt-[7px] w-[89%] md:w-full">
                <Img
                  className="h-[122px]"
                  src="images/img_component11.svg"
                  alt="componentEleven_One"
                />
              </div>
            </div>
            <Text
              className="mt-8 text-blue_gray-900 text-center text-xl"
              size="txtPoppinsSemiBold20Bluegray900"
            >
              Daftarkan Diri Anda!
            </Text>
            <Text
              className="mb-[5px] mt-[53px] text-base text-blue_gray-900"
              size="txtPoppinsRegular16Bluegray900"
            >
              Click Now!
            </Text>
          </div>
          <div className="absolute bg-white-A700 bottom-[0] flex flex-col gap-7 items-center justify-center p-[9px] right-[31%] rounded-[20px] shadow-bs w-[18%]">
            <div className="bg-lime-900 flex flex-col h-[146px] items-center justify-start mt-[31px] pt-[26px] sm:px-5 px-[26px] rounded-[50%] w-[146px]">
              <div className="flex flex-col items-center justify-start w-[99%] md:w-full">
                <Img
                  className="h-[119px]"
                  src="images/img_component10.svg"
                  alt="componentTen"
                />
              </div>
            </div>
            <Text
              className="text-blue_gray-900 text-center text-xl w-full"
              size="txtPoppinsSemiBold20Bluegray900"
            >
              Daftarkan Barang-barang Anda
            </Text>
            <Text
              className="mb-9 text-base text-blue_gray-900 text-center"
              size="txtPoppinsRegular16Bluegray900"
            >
              Click Now!
            </Text>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start md:px-5 w-[58%] md:w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
            <div className="flex md:flex-1 flex-col gap-[23px] justify-start md:mt-0 mt-[186px] w-[27%] md:w-full">
              <div className="bg-gray-50_01 border border-blue_gray-700 border-dashed flex flex-col font-manrope items-center justify-start p-[82px] md:px-10 sm:px-5 rounded-[18px] w-full">
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
              <Button
                className="common-pointer cursor-pointer font-poppins font-semibold leading-[normal] min-w-[185px] ml-12 md:ml-[0] mr-9 text-center text-xl"
                onClick={() => navigate("/partnersetting")}
                shape="round"
                color="lime_900"
                size="sm"
                variant="fill"
              >
                Daftar
              </Button>
            </div>
            <div className="flex md:flex-1 flex-col md:gap-10 gap-[72px] justify-start w-[73%] md:w-full">
              <div className="flex flex-col items-center justify-start w-auto sm:w-full">
                <Text
                  className="text-5xl sm:text-[38px] md:text-[44px] text-lime-900_01 w-auto"
                  size="txtPoppinsBold48Lime90001"
                >
                  Daftarkan Diri Anda
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start md:ml-[0] ml-[54px] w-[93%] md:w-full">
                <Text
                  className="text-blue_gray-900 text-xl"
                  size="txtPoppinsSemiBold20Bluegray900"
                >
                  Nama Toko
                </Text>
                <Img
                  className="h-[52px] mt-[5px]"
                  src="images/img_textarea.svg"
                  alt="textarea"
                />
                <Text
                  className="mt-[26px] text-blue_gray-900 text-xl"
                  size="txtPoppinsSemiBold20Bluegray900"
                >
                  Nama Pemilik
                </Text>
                <Img
                  className="h-[52px] mt-[5px]"
                  src="images/img_textarea.svg"
                  alt="textarea_One"
                />
                <Text
                  className="mt-[26px] text-blue_gray-900 text-xl"
                  size="txtPoppinsSemiBold20Bluegray900"
                >
                  Alamat Toko
                </Text>
                <Img
                  className="h-[52px] mt-[5px]"
                  src="images/img_textarea.svg"
                  alt="textarea_Two"
                />
                <Text
                  className="mt-[27px] text-blue_gray-900 text-xl"
                  size="txtPoppinsSemiBold20Bluegray900"
                >
                  Sosial Media Toko/Nomor Telepon
                </Text>
                <Img
                  className="h-[52px] mt-1"
                  src="images/img_textarea.svg"
                  alt="textarea_Three"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BeOurPartnerOnePage;
