import React from 'react';
import {Meta, Story} from '@storybook/react/types-6-0';
import Image from './Image.component';
import {images} from '../../utils/constant';

export default {
  title: 'Components/Image',
  parameters: {
    docs: {
      description: {
        component: 'Komponen ini digunakan untuk memenuhi kebutuhan _Image_',
      },
    },
  },
} as Meta;

const Template: Story = () => (
  <Image src={images.logoBlue} alt="Logo Yokke" width={200} />
);
export const Default = Template.bind({});
