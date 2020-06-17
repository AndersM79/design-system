import React from 'react';
import { action } from '@storybook/addon-actions';
import Text from './index';

export default {
  component: Text,
  title: 'Text',
};

export const text = () => <Text label="hola" onChange={action('onChange')} />;
