import React, { FC, forwardRef, Ref } from "react";
import { BoxProps } from "../../styles/types";
import Fond from "../Fond/Fond.component";

const Flex: FC<BoxProps> = forwardRef(
  ({ children, ...rest }, ref: Ref<HTMLDivElement>) => {
    return (
      <Fond ref={ref} display="flex" {...rest}>
        {children}
      </Fond>
    );
  }
);

export default Flex;
