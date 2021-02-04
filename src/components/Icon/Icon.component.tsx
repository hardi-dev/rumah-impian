import React, { FC } from "react";
import { IIconProps } from "./Icon.types";
import { icons } from "./../../styles/tokens";
import { colors } from "../../styles/tokens";
import Fond from "../Fond/Fond.component";

const Icon: FC<IIconProps> = ({
  name = "ArrowLeft",
  color = "black",
  width = "24px",
  height = "auto",
  ...rest
}): React.ReactElement => {
  const IconComponent = icons[name as keyof typeof icons];

  return (
    <Fond
      as="span"
      display="block"
      sx={{ lineHeight: 0 }}
      width={width}
      height={height}
      {...rest}
    >
      <IconComponent width="100%" height="100%" fill={colors[color] || color} />
    </Fond>
  );
};

export default Icon;
