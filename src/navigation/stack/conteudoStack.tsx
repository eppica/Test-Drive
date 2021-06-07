import { RootStackParamList } from '../../typing/navigationTypes';
import { createStackNavigator } from '@react-navigation/stack';

import Teste from '../../screens/Teste';
import Conteudo from '../../screens/Conteudo';
import Questao from '../../screens/Questao';

const ConteudoStack = createStackNavigator<RootStackParamList>();

export default function ConteudoStackComponent() {
  return (
    <ConteudoStack.Navigator>
      <ConteudoStack.Screen name="Conteudo" component={Conteudo} />
      <ConteudoStack.Screen name="Teste" component={Teste} />
      <ConteudoStack.Screen name="Questao" component={Questao} />
    </ConteudoStack.Navigator>
  );
}
