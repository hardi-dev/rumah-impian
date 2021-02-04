import React, { FC } from "react";
import { classname } from "../../utils/helper";
import { IBoxProps } from "./Box.types";

const Box: FC<IBoxProps> = ({ children, className, ...restProps }) => {
  return (
    <div className={className} {...restProps}>
      {children}
    </div>
  );
};

export default Box;
