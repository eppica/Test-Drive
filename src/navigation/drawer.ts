import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import ConteudoStack from './conteudoStack';
import SobreStack from './sobreStack';

const RootDrawerNavigator = createDrawerNavigator({
  Conteudo: {
    screen: ConteudoStack,
  },
  Sobre: {
    screen: SobreStack,
  },
});

export default createAppContainer(RootDrawerNavigator);
