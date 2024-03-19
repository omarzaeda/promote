import Link from "next/link";
import React from "react";

import cn from "classnames";
export const CustomButton = ({
  children,
  size = "",
  variant,
  href = "",
  ...rest
}) => {
  const Component = href ? Link : "button";
  return (
    <Component
      href={href}
      className={cn(
        "font-nunito text-white bg-secondary-main bg-secondary hover:text-secondary-main hover:bg-secondary-offWhite border border-secondary-main trans text-lg font-medium rounded-[7px] h-[55px] 2xl:h-[64px] w-[173px] flex justify-center items-center ",
        {
          "hover:!text-white hover:!bg-secondary-main !text-secondary-main bg-secondary-offWhite border border-secondary-main":
            variant === "outlined",
          "!bg-primary !text-secondary-main border-primary hover:!border-secondary-main hover:!bg-secondary-offWhite":
            variant === "primary",
          "!bg-transparent border-none hover:!bg-transparent hover:border-none !text-secondary-main hover:opacity-70 w-fit px-[30px]":
            variant === "text",
          "w-[200px] lg:w-[252px] ": size === "lg",
          "px-10 py-[18px] w-fit": size === "padding",
          "min-w-full": size === "full",
        }
      )}
      {...rest}
    >
      {children}
    </Component>
  );
};
export default CustomButton;
