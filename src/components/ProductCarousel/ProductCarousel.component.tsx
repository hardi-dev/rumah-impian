import React, { FC, useState } from "react";
import { IProductCarouselProps } from "./ProductCarousel.types";
import { StyledFond } from "./ProductCarousel.styles";
import Fond from "../Fond/Fond.component";
import Flex from "../Flex/Flex.component";
import Icon from "../Icon/Icon.component";
import CardProduct from "../CardProduct/CardProduct.component";

const ProductCarousel: FC<IProductCarouselProps> = ({
  productData,
  ...restProps
}) => {
  const [active, setActive] = useState(0);
  const carouselLength = productData.length;

  const nextItem = () => {
    setActive(active === carouselLength - 1 ? 0 : active + 1);
  };

  const prevItem = () => {
    setActive(active === 0 ? carouselLength - 1 : active - 1);
  };

  console.log(active);

  if (!Array.isArray(productData) || productData.length === 0) {
    return null;
  }

  return (
    <Fond {...restProps}>
      <Flex>
        <Icon name="ArrowLeft" onClick={prevItem} />
        <Icon name="ArrowRight" onClick={nextItem} />
      </Flex>
      <Flex justifyContent="center" alignItems="center">
        {productData.map((item: any, index: number) => {
          return (
            <StyledFond className={index === active && "active"} key={index}>
              {/* {index === active && ( */}
              <CardProduct
                productId={1}
                thumb="https://img.rea-asia.com/rumah123/premium/360x203-crop/images/homepage_advertisement_v2/1635/1599626810_5f585e3add5eeimg.jpg"
                name="Perumahan Indah Permai"
                type="Dijual"
                negotiable={true}
                price="Rp. 326 jt"
                installment="2,61jt/bln"
                bedroom={2}
                bathroom={2}
                buildingSize={"65m²"}
                landSize={"65m²"}
                liked={false}
                onClickButton={(productId: number) => console.log(productId)}
                onClickLike={(productId: number) => console.log(productId)}
              />
              {/* )} */}
            </StyledFond>
          );
        })}
      </Flex>
    </Fond>
  );
};

export default ProductCarousel;
