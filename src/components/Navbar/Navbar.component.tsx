import React, { FC } from "react";
import Flex from "../Flex/Flex.component";
import Container from "../Container/Container.component";
import Fond from "../Fond/Fond.component";
import Image from "../Image/Image.component";
import Test from "../../assets/images/TEST.png";
import FrontEnd from "../../assets/images/FRONTend.png";

const Navbar: FC = () => {
  return (
    <Fond py={{ _: "xl" }}>
      <Container>
        <Flex flexDirection="row" justifyContent="space-between">
          <Image src={Test} height={22} width="auto" />
          <Image src={FrontEnd} height={24} width="auto" />
        </Flex>
      </Container>
    </Fond>
  );
};

export default Navbar;
