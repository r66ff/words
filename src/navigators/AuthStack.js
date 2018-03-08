import { StackNavigator } from 'react-navigation';
import SignInScreen from '../components/SignInScreen';

const AuthStack = StackNavigator({ SignIn: SignInScreen });

export default AuthStack;
