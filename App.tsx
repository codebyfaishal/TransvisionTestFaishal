//App.js
import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Coupons from './Components/Coupons';
// import Details from './Components/Details';
import { NativeBaseProvider } from 'native-base';

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

// class App extends Component {
//   render() {
//     return <AppContainer />;
//   }
// }

export default function App() {
  return (
    <NativeBaseProvider>
       <AppContainer />
    </NativeBaseProvider>
  );
}

// export default App;