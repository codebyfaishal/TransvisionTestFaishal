import 'react-native-gesture-handler';
import  React from 'react';
import { Text, View, StyleSheet, Button, Image, TouchableOpacity } from 'react-native';


import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import { NativeBaseProvider } from 'native-base';

import Coupons from './Components/Coupons';

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Coupons"
      tabBarPosition="bottom"
      tabBarOptions={{
        style: {
          marginHorizontal: 7,
          paddingBottom: 10,
          shadowOpacity: 0,
          shadowOffset: {
            height: 0,
            width: 0,
          },
          elevation: 0,
          shadowRadius: 0,
          
        },
        indicatorStyle: {
          backgroundColor: 'darkgreen',
          marginBottom: 5,
          width: '5%',
          marginLeft: '10%',
        },
        labelStyle: {
          fontSize: 12,
        },
        activeTintColor: 'darkgreen',
        inactiveTintColor: 'grey'
      }}>
      <Tab.Screen name="All" component={Coupons} />
      <Tab.Screen name="Food" component={Coupons} />
      <Tab.Screen name="Movies" component={Coupons} />
      <Tab.Screen name="Shop" component={Coupons} />
      <Tab.Screen name="Travel" component={Coupons} />
      {/* <Tab.Screen name="Items" component={Coupons} /> */}
    </Tab.Navigator>
  );
};




export default function App() {
  return (
    <NativeBaseProvider>
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="Home"
          component={TabNavigator}
          options={({navigation}) => ({
            headerStyle: {
              backgroundColor: 'black',
            },
            
            headerRight: () =>  <View style={styles.headerRight}>
            <TouchableOpacity>
            <Image
        source={require('./Components/assets/IconToogle.png')}
      />
            </TouchableOpacity>
            <TouchableOpacity
              style={{ marginLeft: 10 }}
              // onPress={playgroundNavigate}
            >
              <Image
        source={require('./Components/assets/Profile.png')}
      />
            </TouchableOpacity>
          </View>,
            headerLeft: () => <Image
            source={require('./Components/assets/LogoCubmu.png')}
          />,
          })}
        />
        <Stack.Screen
          name=" "
          component={Coupons}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#397af8',
    marginBottom: 20,
    width: '100%',
    paddingVertical: 15,
  },
  heading: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
  headerRight: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 5,
  },
  subheaderText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  });