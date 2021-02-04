import React, { FC, forwardRef, Ref } from "react";
import { IButtonProps } from "./Button.types";
import Fond from "../Fond/Fond.component";

export const Button: FC<IButtonProps> = forwardRef(
  (
    {
      bg = "primary50",
      size = "small",
      color,
      outlined,
      as = "button",
      ...props
    },
    ref: Ref<HTMLButtonElement>
  ) => (
    <Fond
      as={as}
      px={{ _: "m", md: "s" }}
      py={{ _: "s", md: "xs" }}
      bg={outlined ? "white" : bg}
      color="white"
      ref={ref}
      fontSize="body"
      textAlign="center"
      display="inline-block"
      {...props}
    />
  )
);

export default Button;
