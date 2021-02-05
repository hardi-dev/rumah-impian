import React, { FC } from "react";
import { ICardProductAddressProps } from "./CardProductAddress.types";
import Fond from "../Fond/Fond.component";
import Icon from "../Icon/Icon.component";
import Text from "../Text/Text.component";
import Button from "../Button/Button.component";
import AspectImage from "../AspectImage/AspectImage.component";
import Flex from "../Flex/Flex.component";

const CardProductAddress: FC<ICardProductAddressProps> = ({
  onClickButton,
  width = "100%",
  address,
  description,
  map,
  markerPos,
  ...restProps
}) => {
  return (
    <Flex
      width={width}
      borderRadius={10}
      bg="white"
      p="m"
      overflow="hidden"
      flexDirection="column"
      {...restProps}
    >
      <Fond borderRadius={6} overflow="hidden" position="relative">
        <AspectImage src={map} alt={address} ratio={768 / 393} />
        <Icon
          name="Marker"
          position="absolute"
          left={markerPos.x}
          top={markerPos.y}
          size="48px"
        />
      </Fond>
      <Flex px="m" py="l" flex={1} flexDirection="column">
        {/* Name and Address */}
        <Fond mt="l">
          <Text variant="subtitle">{address}</Text>
          <Text mt="m">{description}</Text>
        </Fond>

        {/* Button */}
        <Button mt="xl" marginTop="auto" onClick={onClickButton}>
          Tutup
        </Button>
      </Flex>
    </Flex>
  );
};

export default CardProductAddress;
