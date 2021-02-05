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
import bg from "../../assets/images/bg.png";
import { secondary, secondaryDark } from "../../styles/tokens/colors";

import ProductDetail from "../ProductDetail/ProductDetail.container";

const HomeHero: FC = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOnClickDetail = (productId) => {
    setShowModal(true);
    console.log("productid", productId);
  };

  const handleOnCloseModal = () => {
    setShowModal(false);
  };

  return (
    <Fond
      background={`
        url(${bg}) left bottom no-repeat,
        linear-gradient(90deg, ${secondary}, ${secondaryDark});
      `}
      backgroundSize="100%"
      minHeight={{ _: "100vh", xl: "71vw" }}
    >
      <Navbar />
      <Container>
        <Flex
          mt="10%"
          flexDirection={{ _: "column", lg: "row" }}
          alignItems={{ _: "center", lg: "flex-start" }}
        >
          <Fond
            width={{ _: 1, lg: 6 / 12, xl: 7 / 12 }}
            pl={{ _: "none", xl: "xl" }}
            pt={"5%"}
            mb={{ _: "l", lg: "none" }}
          >
            <Text
              variant="title"
              color="white"
              mb={{ _: "s", lg: "m" }}
              textAlign={{ _: "center", lg: "left" }}
            >
              Start Your Journey
            </Text>
            <Text color="white" textAlign={{ _: "center", lg: "left" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur magnam ad veniam fugit officia, quo, laudantium
              velit, officiis ipsum eius eligendi? Rerum iste odit cumque
              suscipit laboriosam dolorum optio atque?{" "}
            </Text>
          </Fond>

          <Flex
            width={{ _: 1, lg: 6 / 12, xl: 5 / 12 }}
            justifyContent="center"
            pb={{ _: "xl", lg: "none" }}
          >
            <ProductCarousel
              productData={[1, 2, 3, 4, 5]}
              ml={{ _: "none", lg: "l" }}
              onClickButton={handleOnClickDetail}
            />
          </Flex>
        </Flex>
      </Container>

      {/* Product Detail Modal */}
      <Modal isOpen={showModal} onCloseHandler={handleOnCloseModal}>
        <ProductDetail />
      </Modal>
    </Fond>
  );
};

export default HomeHero;
