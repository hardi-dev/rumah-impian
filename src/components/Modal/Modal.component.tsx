import React, { FC, useEffect } from "react";
import { IModalProps } from "./Modal.types";
import Fond from "../../components/Fond/Fond.component";
import Flex from "../../components/Flex/Flex.component";
import { black } from "../../styles/tokens/colors";

const Modal: FC<IModalProps> = ({ isOpen, onCloseHandler, children }) => {
  useEffect(() => {
    const marginRight = window.innerWidth - document.body.offsetWidth;
    document.querySelector("html").style.overflowY = isOpen ? "hidden" : "auto";
    document.querySelector("body").style.marginRight = isOpen
      ? `${marginRight}px`
      : "0px";
  }, [isOpen]);

  return (
    <Fond
      position="fixed"
      top="0px"
      left="0px"
      right="0px"
      bottom="0px"
      backgroundColor={`${black}90`}
      onClick={onCloseHandler}
      opacity={isOpen ? 1 : 0}
      zIndex={isOpen ? 9999 : -1}
      transition=".2s linear"
      overflowY="auto"
    >
      <Fond
        transform={isOpen ? "translateY(0)" : "translateY(10%)"}
        transitionDelay=".2s"
        transition=".4s cubic-bezier(.04,.97,.84,1.9)"
        width={{ _: "90%", md: "56%" }}
        margin="8% auto"
        onClick={(e) => e.stopPropagation()}
      >
        <Flex flexDirection="column" width="100%">
          {children}
        </Flex>
      </Fond>
    </Fond>
  );
};

export default Modal;
