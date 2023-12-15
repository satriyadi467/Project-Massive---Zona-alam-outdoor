import React from "react";

import { Img, Text } from "components";

const RegistrationOneColumnsearchone = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-white-A700 border border-gray-200 border-solid flex flex-row gap-3.5 items-center justify-start p-2.5 rounded-[9px] w-[47%] md:w-full">
          <Img
            className="h-[25px] md:h-auto object-cover w-[25px]"
            src="images/img_search1.png"
            alt="searchOne"
          />
          <Text className="text-black-900 text-xs" size="txtPoppinsRegular12">
            {props?.language}
          </Text>
        </div>
      </div>
    </>
  );
};

RegistrationOneColumnsearchone.defaultProps = {
  language: "Sign up with Google ",
};

export default RegistrationOneColumnsearchone;
