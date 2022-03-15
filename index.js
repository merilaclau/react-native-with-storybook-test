/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {getStorybookUI, configure} from '@storybook/react-native';
import {STORYBOOK} from '@env';

configure(() => {
  require('./storybook/stories/index.js');
}, module);

const StorybookUIRoot = getStorybookUI({});

console.log(STORYBOOK);
AppRegistry.registerComponent(appName, () =>
  process.env.STORYBOOK === 'true' ? StorybookUIRoot : App,
);
