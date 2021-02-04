import React, { FC } from "react";
import { StyledFond } from "./HomeHero.styles";
import {
  Fond,
  Text,
  Container,
  Flex,
  Navbar,
  CardProduct,
} from "../../components";

const HomeHero: FC = () => {
  return (
    <StyledFond>
      <Navbar />
      <Container>
        <Flex mt="15%">
          <Fond width={{ _: 1, lg: 7 / 12 }} pl={{ _: 0, md: "xl" }}>
            <Text variant="title" color="white" mb="m">
              Start Your Journey
            </Text>
            <Text color="white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur magnam ad veniam fugit officia, quo, laudantium
              velit, officiis ipsum eius eligendi? Rerum iste odit cumque
              suscipit laboriosam dolorum optio atque?{" "}
            </Text>
          </Fond>

          <Flex width={{ _: 1, lg: 5 / 12 }} justifyContent="center">
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
          </Flex>
        </Flex>
      </Container>
    </StyledFond>
  );
};

export default HomeHero;
