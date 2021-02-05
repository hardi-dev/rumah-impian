import React, { FC, useState } from "react";
import { ICardProductDetailProps } from "./CardProductDetail.types";
import Fond from "../Fond/Fond.component";
import Flex from "../Flex/Flex.component";
import Icon from "../Icon/Icon.component";
import Text from "../Text/Text.component";
import Button from "../Button/Button.component";
import Chips from "../Chips/Chips.component";
import AspectImage from "../AspectImage/AspectImage.component";
import ProductFac from "../ProductFac/ProductFac.component";
import CardProductAddress from "../CardProductAddress/CardProductAddress.component";

const CardProductDetail: FC<ICardProductDetailProps> = ({
  productId,
  thumb,
  name,
  type,
  negotiable,
  price,
  installment,
  bedroom,
  bathroom,
  buildingSize,
  landSize,
  liked,
  onClickButton,
  onClickLike,
  width = "100%",
  buttonLabel = "Lihat Detail",
  address,
  description,
  map,
  markerPos,
  ...restProps
}) => {
  const [showAddress, setShowAddress] = useState(false);

  return (
    <Fond
      width={width}
      borderRadius={10}
      bg="white"
      p="m"
      overflow="hidden"
      position="relative"
      {...restProps}
    >
      <Fond borderRadius={6} overflow="hidden">
        <AspectImage src={thumb} alt={name} ratio={768 / 393} />
      </Fond>
      <Fond px="m" py="l">
        {/* Chips and Like */}
        <Flex justifyContent="space-between" alignItems="center">
          <Flex>
            <Chips label={type} />
            {negotiable && (
              <Chips label="Nego" bg="primary" color="white" ml="m" circle />
            )}
          </Flex>
          <Icon
            name="Love"
            onClick={() => onClickLike(productId)}
            size="32px"
          />
        </Flex>

        {/* Price */}
        <Flex alignItems="center" mt="l">
          <Text variant="subtitle" fontFamily="AvenirNextBold">
            {price}
          </Text>
          <Text ml="m" variant="caption1">
            Cicilan {installment}
          </Text>
        </Flex>

        {/* Name and Address */}
        <Fond mt="l">
          <Text variant="subtitle">{name}</Text>
          <Text>{address}</Text>
        </Fond>

        {/* Other Information */}
        <Flex alignItems="center" mt="l">
          <ProductFac
            size="24px"
            textVariant="body"
            icon="Bedroom"
            label={`${bedroom} K. Tidur`}
          />
          <ProductFac
            size="24px"
            textVariant="body"
            ml="s"
            icon="Bathroom"
            label={`${bathroom} K. Mandi`}
          />
          <ProductFac
            size="24px"
            textVariant="body"
            ml="s"
            icon="BuildingSize"
            label={`${buildingSize}`}
          />
          <ProductFac
            size="24px"
            textVariant="body"
            ml="s"
            icon="LandSize"
            label={`${landSize}`}
          />
        </Flex>

        {/* Button */}
        <Button mt="xl" onClick={() => setShowAddress(true)}>
          {buttonLabel}
        </Button>
      </Fond>

      {/* Product Address */}
      {showAddress && (
        <Fond position="absolute" left="0px" right="0px" top="0px" bottom="0px">
          <CardProductAddress
            address={address}
            map={map}
            description={description}
            onClickButton={() => setShowAddress(false)}
            height="100%"
            markerPos={markerPos}
          />
        </Fond>
      )}
    </Fond>
  );
};

export default CardProductDetail;
