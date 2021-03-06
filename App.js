// import React from 'react'
// import { View, Text } from 'react-native'
// import  DoctorMaps from './src/Screen/Maps/DoctorMaps'
// import ContactList from './src/Screen/Contact'

// export default function App() {
//   return (
//     <View>
//       <DoctorMaps/>
//     </View>
//   )
// }



import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { HeaderComp, FooterComp, Profile } from './src/Component'
import { Main, AlertCrete, Homes } from './src/Screen'
import { Login, Signup, Splash } from './src/Starter'

import Map from './src/Screen/Map'
import Chatbox from './src/ChatBox/Chatbox'
import DoctorMaps from './src/Screen/Maps/DoctorMaps'
import PoliceMap from './src/Screen/Maps/PoliceMaps'
import HospitalMap from './src/Screen/Maps/HospitalMaps'
import NearByMap from './src/Screen/Maps/NearByMaps'
import Near from  './src/Screen/Maps/Near&DearMaps'

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Main}
        options={{
          tabBarIcon: () => (<FooterComp name='home' />)
        }}
      />
      <Tab.Screen name="Messenger" component={Chatbox}
        options={{
          tabBarIcon: () => (<FooterComp name='message1' />)
        }}
      />
    </Tab.Navigator>
  );
}


function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

const MyDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Profile" component={Profile}
        options={{
          headerRight: () => (<HeaderComp />)
        }}
      />
      <Drawer.Screen name="Notifications" component={HomeScreen} />
    </Drawer.Navigator>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login"
        screenOptions={{
          headerTitleAlign: 'center',
        }}
      >
        <Stack.Screen name='Login' component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name='Signup' component={Signup}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name='Need' component={Homes}
          options={{
            headerShown: true,
            headerLeft: false,
            headerRight: () => (<HeaderComp />)
          }}
        />
        <Stack.Screen name="Home" component={MyTabs}
          options={{
            headerShown: true,
            headerRight: () => (<HeaderComp />)
          }} />
        {/* <Stack.Screen name="MyDrawer" component={MyDrawer} /> */}
        <Stack.Screen name="DoctorMap" component={DoctorMaps}
          options={{
            headerRight: () => (<HeaderComp />)
          }} />
          <Stack.Screen name="PoliceMap" component={PoliceMap}
          options={{
            headerRight: () => (<HeaderComp />)
          }} />
          <Stack.Screen name="HospitaleMap" component={HospitalMap}
          options={{
            headerRight: () => (<HeaderComp />)
          }} />
          <Stack.Screen name="NearByMap" component={NearByMap}
          options={{
            headerRight: () => (<HeaderComp />)
          }} />
          <Stack.Screen name="Near&Dear" component={Near}
          options={{
            headerRight: () => (<HeaderComp />)
          }} />
        <Stack.Screen name="AlertCrete" component={AlertCrete}
          options={{
            headerRight: () => (<HeaderComp />)
          }} />
        <Stack.Screen name="Map" component={Map}
          options={{
            headerRight: () => (<HeaderComp />)
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App


