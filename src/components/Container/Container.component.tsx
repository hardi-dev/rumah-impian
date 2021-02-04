import React, { FC } from "react";
import "./Container.scss";
import { classname } from "../../utils/helper";

const Container: FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...restProps
}) => {
  return (
    <div className={`container ${classname(className)}`} {...restProps}>
      {children}
    </div>
  );
};

export default Container;
