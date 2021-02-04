import React, { FC } from "react";
import { IChipsProps } from "./Chips.types";
import Text from "../Text/Text.component";
import Flex from "../Flex/Flex.component";

const Chips: FC<IChipsProps> = ({
  circle = false,
  bg = "grey",
  label,
  color = "black",
  ...restProps
}) => {
  return (
    <Flex
      borderRadius={circle ? "100px" : 5}
      px="l"
      py="6px"
      bg={bg}
      {...restProps}
    >
      <Text color={color} variant="caption2" fontFamily="AvenirNextDemi">
        {label}
      </Text>
    </Flex>
  );
};

export default Chips;
