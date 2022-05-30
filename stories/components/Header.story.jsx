import React from 'react';
import { Provider } from 'react-redux';

import { Header as HeaderComponent } from '/components/header/Header';

import { useStore } from '/store/store';

export default {
  title: 'Components/Header',
  component: HeaderComponent,
  decorators: [
    (Story) => (<Provider store={useStore({})}><Story /></Provider>),
  ],
};

function Template(args) {
  return <HeaderComponent {...args} />;
}

export const Header = Template.bind({});
