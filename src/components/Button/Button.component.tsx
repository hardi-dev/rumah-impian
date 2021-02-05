import React, { FC, forwardRef, Ref } from "react";
import { IButtonProps } from "./Button.types";
import { StyledFond } from "./Button.styles";

export const Button: FC<IButtonProps> = forwardRef(
  (
    { bg = "primary", color, as = "button", full = true, ...props },
    ref: Ref<HTMLButtonElement>
  ) => (
    <StyledFond
      as={as}
      px="l"
      py="12px"
      borderRadius="2px"
      bg={bg}
      color="white"
      ref={ref}
      fontSize="body"
      fontFamily="AvenirNextDemi"
      textAlign="center"
      display="inline-block"
      width={full ? "100%" : "auto"}
      border="none"
      cursor="pointer"
      {...props}
    />
  )
);

export default Button;
