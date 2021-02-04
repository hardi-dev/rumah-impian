import { ImgHTMLAttributes } from "react";
import { BaseProps } from "../../styles/types";
import { LayoutProps, SpaceProps, PositionProps } from "styled-system";

export interface IImageProps
  extends BaseProps,
    LayoutProps,
    SpaceProps,
    PositionProps,
    Omit<ImgHTMLAttributes<HTMLImageElement>, "width" | "height"> {}
