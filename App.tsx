import 'react-native-gesture-handler';
import  React from 'react';
import { Text, View, StyleSheet, Button, Image, TouchableOpacity } from 'react-native';


import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
import { NativeBaseProvider } from 'native-base';

import Coupons from './Components/Coupons';

const Stack = createStackNavigator();





export default function App() {
  return (
    <NativeBaseProvider>
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Home" component={Coupons} /> */}
        <Stack.Screen
          name=" "
          component={Coupons}
          options={({navigation}) => ({
            // headerTitle: () => <Text>Register</Text>,
            headerStyle: {
              backgroundColor: 'black',
            },
            
            headerRight: () =>  <View style={styles.headerRight}>
            <TouchableOpacity>
            <Image
        // style={{width: 50, height: 50, marginHorizontal:13 }}
        source={require('./Components/assets/IconToogle.png')}
      />
            </TouchableOpacity>
            <TouchableOpacity
              style={{ marginLeft: 10 }}
              // onPress={playgroundNavigate}
            >
              <Image
        // style={{width: 50, height: 50, marginHorizontal:13 }}
        source={require('./Components/assets/Profile.png')}
      />
            </TouchableOpacity>
          </View>,
            headerLeft: () => <Image
            // style={{width: 350, height: 350, marginHorizontal:13 }}
            source={require('./Components/assets/LogoCubmu.png')}
          />,
          })}
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