import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, Text } from "components";

const Header = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <header className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center mx-auto my-[18px] w-[95%]">
          <div className="flex flex-col gap-[7px] items-center justify-start w-[3%] md:w-full">
            <Line className="bg-black-900 h-px w-full" />
            <Line className="bg-black-900 h-px w-full" />
            <Line className="bg-black-900 h-px w-full" />
          </div>
          <Text
            className="common-pointer md:ml-[0] ml-[13px] text-gray-800 text-xl"
            size="txtPoppinsRegular20"
            onClick={() => navigate("/dashboardone")}
          >
            Menu
          </Text>
          <div className="flex flex-row items-center justify-center md:ml-[0] ml-[491px] w-[11%] md:w-full">
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
              alt="refresh"
            />
          </Button>
        </div>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
