import React, { FC } from "react";
import { StyledFond } from "./HomeHero.styles";
import {
  Fond,
  Text,
  Container,
  Flex,
  Navbar,
  CardProduct,
  ProductCarousel,
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
            <ProductCarousel productData={[1, 2, 3, 4, 5]} ml="l" />
          </Flex>
        </Flex>
      </Container>
    </StyledFond>
  );
};

export default HomeHero;
