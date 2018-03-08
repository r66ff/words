import { SwitchNavigator } from 'react-navigation';
import AuthLoadingScreen from '../components/AuthLoadingScreen';
import AppStack from './AppStack';
import AuthStack from './AuthStack';


export default SwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
);
