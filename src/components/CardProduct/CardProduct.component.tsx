import React, { FC } from "react";
import { ICardProductProps } from "./CardProduct.types";
import Fond from "../Fond/Fond.component";
import Flex from "../Flex/Flex.component";
import Icon from "../Icon/Icon.component";
import Text from "../Text/Text.component";
import Button from "../Button/Button.component";
import Chips from "../Chips/Chips.component";
import AspectImage from "../AspectImage/AspectImage.component";
import ProductFac from "../ProductFac/ProductFac.component";

const CardProduct: FC<ICardProductProps> = ({
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
  ...restProps
}) => {
  return (
    <Fond borderRadius={10} bg="white" p="s" overflow="hidden">
      <Fond borderTopLeftRadius={6} borderTopRightRadius={6} overflow="hidden">
        <AspectImage src={thumb} alt={name} ratio={370 / 260} />
      </Fond>
      <Fond px="s" py="m">
        {/* Chips and Like */}
        <Flex justifyContent="space-between" alignItems="center">
          <Flex>
            <Chips label={type} />
            {negotiable && (
              <Chips label="Nego" bg="primary" color="white" ml="s" circle />
            )}
          </Flex>
          <Icon
            name="Love"
            onClick={() => onClickLike(productId)}
            cursor="pointer"
          />
        </Flex>

        {/* Price */}
        <Flex alignItems="center" mt="m">
          <Text variant="subtitle" fontFamily="AvenirNextBold">
            {price}
          </Text>
          <Text ml="s" variant="caption1">
            Cicilan {installment}
          </Text>
        </Flex>

        {/* Other Information */}
        <Flex alignItems="center" mt="m">
          <ProductFac icon="Bedroom" label={`${bedroom} K. Tidur`} />
          <ProductFac ml="s" icon="Bathroom" label={`${bathroom} K. Mandi`} />
          <ProductFac ml="s" icon="BuildingSize" label={`${buildingSize}`} />
          <ProductFac ml="s" icon="LandSize" label={`${landSize}`} />
        </Flex>

        {/* Button */}
        <Button mt="l" onClick={() => onClickButton(productId)}>
          {buttonLabel}
        </Button>
      </Fond>
    </Fond>
  );
};

export default CardProduct;
