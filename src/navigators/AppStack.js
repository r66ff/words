import { StackNavigator } from 'react-navigation';
import HomeScreen from '../components/HomeScreen';
import DetailsScreen from '../components/DetailsScreen';

const AppStack = StackNavigator({ Home: HomeScreen, Other: DetailsScreen });

export default AppStack;
