import React from 'react';

import { Button as BtnComponent } from '../../components/button/Button';

export default {
  title: 'Components/Button',
  component: BtnComponent,
  argTypes: {
    children: { control: 'text' },
  },
};

function Template(args) {
  return <BtnComponent {...args} />;
}

export const Button = Template.bind({});
Button.args = {
  color: 'primary',
  children: 'Button',
};
