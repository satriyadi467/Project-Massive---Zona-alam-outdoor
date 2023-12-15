import React from "react";

import { Text } from "components";

const Footer = (props) => {
  return (
    <>
      <footer className={props.className}>
        <div className="bg-gray-400_01 flex md:flex-col flex-row md:gap-10 gap-20 items-center justify-center p-[49px] md:px-10 sm:px-5 w-full">
          <div className="flex sm:flex-1 flex-col items-start justify-start md:ml-[0] ml-[148px] w-auto sm:w-full">
            <Text
              className="text-base text-white-A700"
              size="txtPoppinsRegular16WhiteA700"
            >
              <span className="text-white-A700 font-poppins text-left font-normal">
                <>
                  Address : Jl.Pangeran Sogiri No.374 RT.004 RW.002. Kel.Tanah
                  Baru Kec.bogor Utara Kota Bogor
                  <br />
                  <br />
                  +62{" "}
                </>
              </span>
              <span className="text-white-A700 font-poppins text-left font-normal">
                <>
                  812 3456 789
                  <br />
                  zonaalam
                </>
              </span>
              <span className="text-white-A700 font-poppins text-left font-normal">
                @rent.id
              </span>
            </Text>
          </div>
          <div className="flex flex-col gap-[41px] items-start justify-start mb-[27px] w-auto">
            <Text
              className="text-white-A700 text-xl w-auto"
              size="txtPoppinsSemiBold20"
            >
              Company
            </Text>
            <ul className="flex flex-col gap-6 items-start justify-start w-auto md:w-full common-column-list">
              <li>
                <Text
                  className="text-base text-white-A700"
                  size="txtPoppinsRegular16WhiteA700"
                >
                  About
                </Text>
              </li>
              <li>
                <Text
                  className="text-base text-white-A700"
                  size="txtPoppinsRegular16WhiteA700"
                >
                  Careers
                </Text>
              </li>
              <li>
                <Text
                  className="text-base text-white-A700"
                  size="txtPoppinsRegular16WhiteA700"
                >
                  Mobile
                </Text>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-[41px] items-start justify-start mb-[27px] w-auto">
            <Text
              className="text-white-A700 text-xl w-auto"
              size="txtPoppinsSemiBold20"
            >
              Contact
            </Text>
            <ul className="flex flex-col gap-6 items-start justify-start w-auto md:w-full common-column-list">
              <li>
                <Text
                  className="text-base text-white-A700"
                  size="txtPoppinsRegular16WhiteA700"
                >
                  Help/FAQ
                </Text>
              </li>
              <li>
                <Text
                  className="text-base text-white-A700"
                  size="txtPoppinsRegular16WhiteA700"
                >
                  Press
                </Text>
              </li>
              <li>
                <Text
                  className="text-base text-white-A700"
                  size="txtPoppinsRegular16WhiteA700"
                >
                  Affilates
                </Text>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-[41px] items-start justify-start w-auto">
            <Text
              className="text-white-A700 text-xl w-auto"
              size="txtPoppinsSemiBold20"
            >
              More
            </Text>
            <ul className="flex flex-col gap-[21px] items-start justify-start w-auto md:w-full common-column-list">
              <li>
                <Text
                  className="text-base text-white-A700"
                  size="txtPoppinsRegular16WhiteA700"
                >
                  Airlinefees
                </Text>
              </li>
              <li>
                <Text
                  className="text-base text-white-A700"
                  size="txtPoppinsRegular16WhiteA700"
                >
                  Airline
                </Text>
              </li>
              <li>
                <Text
                  className="text-base text-white-A700"
                  size="txtPoppinsRegular16WhiteA700"
                >
                  Low fare tips
                </Text>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;
