import React, { FC } from "react";
import "./HeroHome.scss";
import { classname } from "../../utils/helper";
import Container from "../Container/Container.component";
import Text from "../Text/Text.component";
import Icon from "../Icon/Icon.component";

const HeroHome: FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...restProps
}) => {
  return (
    <section className={`hero-home ${classname(className)}`}>
      <Container>
        <Text variant="title" weight="bold" color="white">
          manntap jiwa
        </Text>
        <Text variant="subtitle" weight="demi" color="primary">
          manntap jiwa
        </Text>
        <Text variant="body">manntap jiwa</Text>
        <Text variant="caption1">manntap jiwa</Text>
        <Text variant="caption2">manntap jiwa</Text>

        <Icon name="ArrowLeft" />
        <Icon name="Bathroom" size="IconSize38" />
      </Container>
    </section>
  );
};

export default HeroHome;
