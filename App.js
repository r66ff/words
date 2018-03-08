import React from 'react';
import { StackNavigator, SwitchNavigator, addNavigationHelpers } from 'react-navigation';
import { createStore, applyMiddleware, combineReducers} from 'redux';
import { createReduxBoundAddListener, createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';
import { Provider, connect } from 'react-redux';
import MainNavigator from './src/navigators/MainNavigator';

class App extends React.Component {
  render() {
    return (
      <MainNavigator />
    );
  }
}

export default App;
