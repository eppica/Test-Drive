import { createStackNavigator } from 'react-navigation-stack';
import Sobre from '../screens/Sobre';

const screens = {
  Sobre: {
    screen: Sobre,
  },
};

const SobreStack = createStackNavigator(screens);

export default SobreStack;
