import React from "react";

import { Button, Text } from "components";

const RentCheckoutPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins sm:gap-10 md:gap-10 gap-[260px] justify-center mx-auto p-[199px] md:px-10 sm:px-5 w-full">
        <div className="flex flex-col md:gap-10 gap-[97px] items-start justify-start mr-[1180px] mt-[723px]">
          <Text
            className="text-blue_gray-900 text-xl"
            size="txtPoppinsSemiBold20Bluegray900"
          >
            Name
          </Text>
          <Text
            className="text-blue_gray-900 text-xl"
            size="txtPoppinsSemiBold20Bluegray900"
          >
            Address
          </Text>
          <Text
            className="text-blue_gray-900 text-xl"
            size="txtPoppinsSemiBold20Bluegray900"
          >
            Phone number
          </Text>
        </div>
        <div className="flex flex-col items-end max-w-[1311px] mb-[505px] mx-auto md:pl-10 sm:pl-5 pl-[1084px] w-full">
          <Button
            className="cursor-pointer font-semibold leading-[normal] min-w-[227px] text-center text-xl"
            shape="round"
            color="lime_900"
            size="sm"
            variant="fill"
          >
            Check Out
          </Button>
        </div>
      </div>
    </>
  );
};

export default RentCheckoutPage;
