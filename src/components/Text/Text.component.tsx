import React, { FC } from "react";
import "./Text.scss";
import { ITextProps } from "./Text.types";
import { classname } from "../../utils/helper";

const Text: FC<ITextProps & React.HTMLAttributes<HTMLParagraphElement>> = ({
  children,
  variant = "body",
  weight = "normal",
  color = "black",
  className,
  ...restPorps
}) => {
  if (variant === "title") {
    return (
      <h1
        className={`text text__title text__${weight} text__color-${color} ${classname(
          className
        )}`}
        {...restPorps}
      >
        {children}
      </h1>
    );
  }

  if (variant === "subtitle") {
    return (
      <h2
        className={`text text__subtitle text__${weight} text__color-${color} ${classname(
          className
        )}`}
        {...restPorps}
      >
        {children}
      </h2>
    );
  }

  return (
    <p
      className={`text text__${variant} text__${weight} text__color-${color} ${classname(
        className
      )}`}
      {...restPorps}
    >
      {children}
    </p>
  );
};

export default Text;
