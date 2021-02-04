import React, { FC, forwardRef, Ref } from "react";
import Fond from "../Fond/Fond.component";
import { IImageProps } from "./Image.types";

export const Image: FC<IImageProps> = forwardRef(
  (
    { sx, maxWidth = "100%", height = "auto", ...props },
    ref: Ref<HTMLImageElement>
  ) => (
    <Fond
      ref={ref}
      as="img"
      maxWidth={maxWidth}
      height={height}
      {...props}
      sx={{
        ...sx,
      }}
    />
  )
);

export default Image;
