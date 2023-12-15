import React from "react";
import PropTypes from "prop-types";

const shapes = { round: "rounded-lg" };
const variants = {
  fill: {
    gray_500: "bg-gray-500 text-white-A700",
    gray_400_01: "bg-gray-400_01 text-white-A700",
    white_A700: "bg-white-A700",
    blue_gray_700: "bg-blue_gray-700 text-white-A700",
    gray_400: "bg-gray-400 text-white-A700",
    lime_900: "bg-lime-900 text-white-A700",
  },
};
const sizes = { xs: "p-2", sm: "p-[11px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "sm"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf([
    "gray_500",
    "gray_400_01",
    "white_A700",
    "blue_gray_700",
    "gray_400",
    "lime_900",
  ]),
};

export { Button };
