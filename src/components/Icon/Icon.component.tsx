import React from "react";
import { IIconProps } from "./Icon.types";
import { colors, iconSize, icons } from "../../tokens";
import "./Icon.scss";

function Icon(props: IIconProps): React.ReactElement {
  const { name = "plus", size = "IconSize16", color = "white" } = props;
  const IconComponent = icons[name as keyof typeof icons];

  return (
    <span className="ic">
      <IconComponent
        width={iconSize[size as keyof typeof iconSize]}
        height={iconSize[size as keyof typeof iconSize]}
        fill={colors[color as keyof typeof colors]}
      />
    </span>
  );
}

export default Icon;
