import React from "react";

const sizeClasses = {
  txtPoppinsBold16: "font-bold font-poppins",
  txtPoppinsRegular20Lime900: "font-normal font-poppins",
  txtAntonRegular40: "font-anton font-normal",
  txtInterBold26: "font-bold font-inter",
  txtAntonRegular25: "font-anton font-normal",
  txtAntonRegular24: "font-anton font-normal",
  txtPoppinsBold32: "font-bold font-poppins",
  txtPoppinsRegular16Bluegray900: "font-normal font-poppins",
  txtPoppinsRegular28: "font-normal font-poppins",
  txtPoppinsBold36: "font-bold font-poppins",
  txtPoppinsRegular16WhiteA700: "font-normal font-poppins",
  txtPoppinsSemiBold36: "font-poppins font-semibold",
  txtPoppinsBold48Yellow50: "font-bold font-poppins",
  txtPoppinsRegular12: "font-normal font-poppins",
  txtPoppinsSemiBold16: "font-poppins font-semibold",
  txtPoppinsBold173: "font-bold font-poppins",
  txtPoppinsBold48Bluegray700: "font-bold font-poppins",
  txtOverlockBold48: "font-bold font-overlock",
  txtPoppinsBold48Gray40001: "font-bold font-poppins",
  txtInterRegular22: "font-inter font-normal",
  txtPoppinsBold48Lime900: "font-bold font-poppins",
  txtOverlockBold20: "font-bold font-overlock",
  txtPoppinsSemiBold20Bluegray900: "font-poppins font-semibold",
  txtPoppinsBold48: "font-bold font-poppins",
  txtAntonRegular37Bluegray700: "font-anton font-normal",
  txtPoppinsBold28: "font-bold font-poppins",
  txtPoppinsBold48Lime90001: "font-bold font-poppins",
  txtPoppinsSemiBold20Gray800: "font-poppins font-semibold",
  txtPoppinsBold63: "font-bold font-poppins",
  txtPoppinsSemiBold28WhiteA700: "font-poppins font-semibold",
  txtAntonRegular37: "font-anton font-normal",
  txtPoppinsBold20: "font-bold font-poppins",
  txtPoppinsRegular16: "font-normal font-poppins",
  txtPoppinsSemiBold48: "font-poppins font-semibold",
  txtManropeMedium12: "font-manrope font-medium",
  txtPoppinsSemiBold20: "font-poppins font-semibold",
  txtPoppinsRegular16Gray800: "font-normal font-poppins",
  txtPoppinsMedium20: "font-medium font-poppins",
  txtPoppinsSemiBold43: "font-poppins font-semibold",
  txtPoppinsSemiBold22: "font-poppins font-semibold",
  txtPoppinsRegular20: "font-normal font-poppins",
  txtPoppinsBold1384: "font-bold font-poppins",
  txtPoppinsSemiBold28: "font-poppins font-semibold",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
