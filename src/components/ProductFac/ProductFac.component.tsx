import React, { FC } from "react";
import { IProductFacProps } from "./ProductFac.types";
import Text from "../Text/Text.component";
import Flex from "../Flex/Flex.component";
import Icon from "../Icon/Icon.component";

const ProductFact: FC<IProductFacProps> = ({
  icon,
  size = "16px",
  textVariant = "caption1",
  label,
  ...restProps
}) => {
  return (
    <Flex alignItems="center" {...restProps}>
      <Icon name={icon} size={size} />
      <Text ml="xs" variant={textVariant} fontFamily="AvenirNextDemi">
        {label}
      </Text>
    </Flex>
  );
};

export default ProductFact;
