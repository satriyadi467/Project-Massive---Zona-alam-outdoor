import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, List, PagerIndicator, Text } from "components";
import Footer from "components/Footer";

const DashboardOnePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins justify-end mx-auto pt-[51px] w-full">
        <div className="flex flex-col items-center md:px-10 sm:px-5 px-[158px] w-full">
          <div className="bg-white-A700 flex flex-col items-center justify-start max-w-[1412px] mx-auto p-[18px] md:px-5 rounded-[20px] shadow-bs w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[97%] md:w-full">
              <div className="flex flex-col gap-[7px] items-center justify-start w-[3%] md:w-full">
                <Line className="bg-black-900 h-px w-full" />
                <Line className="bg-black-900 h-px w-full" />
                <Line className="bg-black-900 h-px w-full" />
              </div>
              <Text
                className="md:ml-[0] ml-[13px] text-gray-800 text-xl"
                size="txtPoppinsRegular20"
              >
                Menu
              </Text>
              <div className="flex flex-row font-anton items-center justify-center md:ml-[0] ml-[491px] w-[11%] md:w-full">
                <Img
                  className="h-11 md:h-auto object-cover w-11"
                  src="images/img_zonaamantanpa.png"
                  alt="zonaamantanpa"
                />
                <Text
                  className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                  size="txtAntonRegular24"
                >
                  <span className="text-lime-900_01 font-anton text-left font-normal">
                    ZONA
                  </span>
                  <span className="text-black-900 font-anton text-left font-normal">
                    {" "}
                  </span>
                  <span className="text-gray-400_02 font-anton text-left font-normal">
                    ALAM
                  </span>
                </Text>
              </div>
              <Button
                className="flex h-9 items-center justify-center md:ml-[0] ml-[557px] md:mt-0 my-1 rounded w-9"
                color="white_A700"
                size="xs"
                variant="fill"
              >
                <Img
                  className="h-[19px]"
                  src="images/img_refresh.svg"
                  alt="arrowdown"
                />
              </Button>
            </div>
          </div>
          <Text
            className="mt-[239px] text-5xl sm:text-[38px] md:text-[44px] text-black-900 text-center w-[82%] sm:w-full"
            size="txtPoppinsBold48"
          >
            Nikmati Alam dengan Nyaman - Sewa Kemah Lebih Mudah dari Sebelumnya!
          </Text>
          <div className="flex flex-col items-center justify-start mt-[452px] w-auto md:w-full">
            <Text
              className="sm:text-2xl md:text-[26px] text-[28px] text-blue_gray-900 w-auto"
              size="txtPoppinsRegular28"
            >
              Featured
            </Text>
            <Text
              className="text-4xl sm:text-[32px] md:text-[34px] text-blue_gray-900 w-auto"
              size="txtPoppinsSemiBold36"
            >
              Our Features Really Care About Both Parties
            </Text>
          </div>
          <div className="flex md:flex-col flex-row gap-[50px] items-start justify-start max-w-[1099px] mt-[67px] mx-auto shadow-bs w-full">
            <List
              className="md:flex-1 sm:flex-col flex-row gap-[50px] grid md:grid-cols-1 grid-cols-2 w-[66%] md:w-full"
              orientation="horizontal"
            >
              <div
                className="common-pointer bg-white-A700 flex flex-col gap-2.5 items-start justify-start rounded-[20px] w-auto"
                onClick={() => navigate("/informationeducation")}
              >
                <Img
                  className="h-[72px]"
                  src="images/img_arrowup.svg"
                  alt="arrowup"
                />
                <Text
                  className="text-gray-800 text-xl w-auto"
                  size="txtPoppinsSemiBold20Gray800"
                >
                  Information & Education
                </Text>
                <Text
                  className="max-w-[181px] md:max-w-full text-base text-center text-gray-800"
                  size="txtPoppinsRegular16Gray800"
                >
                  Belajar menggunakan perlengkapan kemah yang baik dan benar
                </Text>
              </div>
              <div className="bg-white-A700 flex flex-col items-center justify-end p-[43px] md:px-10 sm:px-5 rounded-[20px] w-full">
                <Img
                  className="h-[72px] mt-1"
                  src="images/img_car.svg"
                  alt="car"
                />
                <Text
                  className="mt-[39px] text-center text-gray-800 text-xl w-auto"
                  size="txtPoppinsSemiBold20Gray800"
                >
                  Camp Stuff Rent
                </Text>
                <Text
                  className="mt-[3px] text-base text-center text-gray-800 w-[74%] sm:w-full"
                  size="txtPoppinsRegular16Gray800"
                >
                  Layanan penyewaan peralatan dan perlengkapan berkemah{" "}
                </Text>
              </div>
            </List>
            <div
              className="common-pointer bg-white-A700 flex flex-col gap-2.5 items-start justify-start rounded-[20px] w-auto"
              onClick={() => navigate("/beourpartner")}
            >
              <Img className="h-[72px]" src="images/img_user.svg" alt="lock" />
              <div className="flex flex-col gap-[5px] items-center justify-start w-auto">
                <Text
                  className="text-gray-800 text-xl w-auto"
                  size="txtPoppinsSemiBold20Gray800"
                >
                  Become a Partner
                </Text>
                <Text
                  className="max-w-[181px] md:max-w-full text-base text-center text-gray-800"
                  size="txtPoppinsRegular16Gray800"
                >
                  Mari menjadi partner kami untuk menyewakan alat kemah
                </Text>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start mt-[195px] w-auto">
            <Text
              className="text-4xl sm:text-[32px] md:text-[34px] text-blue_gray-900 w-auto"
              size="txtPoppinsSemiBold36"
            >
              Top Rent Stuff
            </Text>
          </div>
        </div>
        <div className="flex flex-col items-end mt-[120px] md:px-10 sm:px-5 px-[102px] w-full">
          <div className="md:h-[1252px] sm:h-[1682px] h-[1816px] relative w-[93%] md:w-full">
            <div className="absolute bottom-[0] flex md:flex-col flex-row md:gap-10 items-start justify-between right-[0] w-[96%]">
              <div className="flex flex-col items-start justify-start md:mt-0 mt-[1414px] w-auto">
                <Text
                  className="sm:text-2xl md:text-[26px] text-[28px] text-blue_gray-900 w-auto"
                  size="txtPoppinsBold28"
                >
                  Testimonial
                </Text>
                <Text
                  className="max-w-[325px] md:max-w-full text-4xl sm:text-[32px] md:text-[34px] text-blue_gray-900"
                  size="txtPoppinsBold36"
                >
                  What our partner and customer say
                </Text>
              </div>
              <div className="md:h-[1008px] h-[1682px] relative w-[61%] md:w-full">
                <div className="absolute bg-gray-400_01 h-[696px] right-[10%] rounded-[20px] top-[0] w-[57%]"></div>
                <div className="absolute bottom-[0] flex flex-col inset-x-[0] justify-start mx-auto w-full">
                  <PagerIndicator
                    className="flex h-3 md:ml-[0] ml-[466px] w-[87px]"
                    count={3}
                    activeCss="inline-block cursor-pointer rounded-[50%] h-3 bg-gray-700 w-3"
                    activeIndex={1}
                    inactiveCss="inline-block cursor-pointer rounded-[50%] h-3 bg-blue_gray-400 w-3"
                    selectedWrapperCss="inline-block md:ml-[0] mx-[13.00px] sm:ml-[0]"
                    unselectedWrapperCss="inline-block md:ml-[0] mx-[13.00px] sm:ml-[0]"
                  />
                  <div className="h-[281px] md:h-[948px] mt-[670px] relative w-full">
                    <div className="absolute md:h-[241px] h-[243px] inset-[0] justify-center m-auto w-full">
                      <div className="absolute bg-white-A700 flex flex-col h-full inset-y-[0] items-start justify-end my-auto p-[29px] sm:px-5 right-[0] rounded-[9px] shadow-bs2">
                        <Text
                          className="ml-1 md:ml-[0] mt-0.5 text-[13.84px] text-blue_gray-600 w-[91%] sm:w-full"
                          size="txtPoppinsBold1384"
                        >
                          “On the Windows talking painted pasture yet its
                          express parties use. Sure last upon he same as knew
                          next. Of believed or diverted no.”
                        </Text>
                        <Text
                          className="ml-1 md:ml-[0] mt-[67px] text-[17.3px] text-blue_gray-600"
                          size="txtPoppinsBold173"
                        >
                          Mike taylor
                        </Text>
                        <Text
                          className="ml-1 md:ml-[0] mt-1 text-[13.84px] text-blue_gray-600"
                          size="txtPoppinsBold1384"
                        >
                          Lahore, Pakistan
                        </Text>
                      </div>
                      <div className="absolute bg-white-A700 flex flex-col h-full inset-y-[0] items-start justify-end left-[0] my-auto p-[29px] sm:px-5 rounded-[9px] shadow-bs2">
                        <Text
                          className="ml-1 md:ml-[0] mt-0.5 text-[13.84px] text-blue_gray-600 w-[91%] sm:w-full"
                          size="txtPoppinsBold1384"
                        >
                          “On the Windows talking painted pasture yet its
                          express parties use. Sure last upon he same as knew
                          next. Of believed or diverted no.”
                        </Text>
                        <Text
                          className="ml-1 md:ml-[0] mt-[67px] text-[17.3px] text-blue_gray-600"
                          size="txtPoppinsBold173"
                        >
                          Mike taylor
                        </Text>
                        <Text
                          className="ml-1 md:ml-[0] mt-1 text-[13.84px] text-blue_gray-600"
                          size="txtPoppinsBold1384"
                        >
                          Lahore, Pakistan
                        </Text>
                      </div>
                    </div>
                    <div className="absolute bg-white-A700 flex flex-col h-full inset-[0] items-start justify-center m-auto p-[31px] sm:px-5 rounded-[11px] shadow-bs3">
                      <Text
                        className="md:ml-[0] ml-[7px] mt-[5px] text-base text-blue_gray-600 w-[90%] sm:w-full"
                        size="txtPoppinsBold16"
                      >
                        “Website ini sangat memudahkan saya dalam menyewakan
                        barang-barang untuk berkemah”
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[7px] mt-[102px] text-blue_gray-600 text-xl"
                        size="txtPoppinsBold20"
                      >
                        Mike taylor
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[7px] mt-[7px] text-base text-blue_gray-600"
                        size="txtPoppinsBold16"
                      >
                        Depok, Jawa Barat
                      </Text>
                    </div>
                  </div>
                  <PagerIndicator
                    className="flex h-3 justify-center md:ml-[0] ml-[367px] mt-9 w-[87px]"
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
            <div className="absolute bg-gray-500 flex flex-col items-start justify-end left-[0] rounded-[20px] top-[0] w-auto">
              <div className="flex flex-col gap-2.5 items-start justify-start w-auto">
                <Text
                  className="text-white-A700 text-xl w-auto"
                  size="txtPoppinsSemiBold20"
                >
                  Tenda Ukuran 2 Orang
                </Text>
                <Text
                  className="text-base text-center text-white-A700 w-auto"
                  size="txtPoppinsRegular16WhiteA700"
                >
                  Rp. 50.000/hari
                </Text>
              </div>
            </div>
            <div className="absolute bg-gray-500 flex flex-col items-start justify-end left-[27%] rounded-[20px] top-[0] w-auto">
              <div className="flex flex-col gap-2.5 items-start justify-start w-auto">
                <Text
                  className="text-white-A700 text-xl w-auto"
                  size="txtPoppinsSemiBold20"
                >
                  Sleeping Bag
                </Text>
                <Text
                  className="text-base text-center text-white-A700 w-auto"
                  size="txtPoppinsRegular16WhiteA700"
                >
                  Rp. 30.000/hari
                </Text>
              </div>
            </div>
            <div className="absolute bg-gray-500 flex flex-col items-start justify-end left-[0] rounded-[20px] top-[27%] w-auto">
              <div className="flex flex-col gap-2.5 items-start justify-start w-auto">
                <Text
                  className="text-white-A700 text-xl w-auto"
                  size="txtPoppinsSemiBold20"
                >
                  Hammock
                </Text>
                <Text
                  className="text-base text-center text-white-A700 w-auto"
                  size="txtPoppinsRegular16WhiteA700"
                >
                  Rp. 20.000/hari
                </Text>
              </div>
            </div>
            <div className="absolute flex flex-col md:gap-10 gap-[226px] justify-start left-[27%] top-[27%] w-[26%]">
              <div className="bg-gray-500 flex flex-col items-start justify-start mr-8 rounded-[20px] w-auto">
                <div className="flex flex-col gap-2.5 items-start justify-start w-auto">
                  <Text
                    className="text-white-A700 text-xl w-auto"
                    size="txtPoppinsSemiBold20"
                  >
                    Travel Stove
                  </Text>
                  <Text
                    className="text-base text-center text-white-A700 w-auto"
                    size="txtPoppinsRegular16WhiteA700"
                  >
                    Rp. 15.000/hari
                  </Text>
                </div>
              </div>
              <div className="flex flex-row items-start justify-end md:ml-[0] ml-[179px] w-[51%] md:w-full">
                <div className="flex flex-col items-center justify-start w-auto">
                  <Text
                    className="text-5xl sm:text-[38px] md:text-[44px] text-blue_gray-900 w-auto"
                    size="txtPoppinsSemiBold48"
                  >
                    20+
                  </Text>
                </div>
                <Text
                  className="mt-[3px] text-[22px] text-blue_gray-900 sm:text-lg md:text-xl"
                  size="txtPoppinsSemiBold22"
                >
                  Partners
                </Text>
              </div>
            </div>
          </div>
        </div>
        <Footer className="flex flex-col items-center mt-60 w-full" />
      </div>
    </>
  );
};

export default DashboardOnePage;
