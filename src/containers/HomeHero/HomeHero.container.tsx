import React, { FC, useState } from "react";
import { StyledFond } from "./HomeHero.styles";
import {
  Fond,
  Text,
  Container,
  Flex,
  Navbar,
  ProductCarousel,
  Modal,
} from "../../components";

import ProductDetail from "../ProductDetail/ProductDetail.container";

const HomeHero: FC = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOnClickDetail = (productId) => {
    setShowModal(true);
    console.log("cli");
  };

  const handleOnCloseModal = () => {
    setShowModal(false);
  };

  return (
    <StyledFond>
      <Navbar />
      <Container>
        <Flex mt="10%">
          <Fond width={{ _: 1, lg: 7 / 12 }} pl={{ _: 0, md: "xl" }} pt={"5%"}>
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
            <ProductCarousel
              productData={[1, 2, 3, 4, 5]}
              ml="l"
              onClickButton={handleOnClickDetail}
            />
          </Flex>
        </Flex>
      </Container>

      {/* Product Detail Modal */}
      <Modal isOpen={showModal} onCloseHandler={handleOnCloseModal}>
        <ProductDetail />
      </Modal>
    </StyledFond>
  );
};

export default HomeHero;
