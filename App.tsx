//App.js
import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Coupons from './Components/Coupons';
// import Details from './Components/Details';

const appNavigator = createStackNavigator(
  {
    Home: {
      screen: Coupons,
    },
    // Details: {
    //   screen: Details,
    // },
  },
  {
    initialRouteName: 'Home',
  },
);

const AppContainer = createAppContainer(appNavigator);

class App extends Component {
  render() {
    return <AppContainer />;
  }
}

export default App;