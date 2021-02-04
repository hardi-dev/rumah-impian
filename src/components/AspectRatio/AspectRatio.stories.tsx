import React from 'react';
import {Meta, Story} from '@storybook/react/types-6-0';
import Text from '../Text/Text.component';
import AspectRatio from './AspectRatio.component';

export default {
  title: 'Components/AspectRatio',
  parameters: {
    docs: {
      description: {
        component:
          'Komponen ini digunakan untuk memenuhi kebutuhan _AspectRatio_',
      },
    },
  },
} as Meta;

const Template: Story = () => (
  <AspectRatio width={300} bg="primary50">
    <Text>Aspect Ratio Default 4/3</Text>
  </AspectRatio>
);
export const Default = Template.bind({});

export const Square = () => (
  <AspectRatio width={300} bg="primary50" ratio={1}>
    <Text>Aspect Ratio Square</Text>
  </AspectRatio>
);
