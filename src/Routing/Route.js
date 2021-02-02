import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { HeaderComp, FooterComp, Profile } from '../Component'
import { } from '../Component/Style'
import { Main, AlertCretae } from '../Screen'
import { Login, Signup, Splash } from '../Starter'

import Map from '../Screen/Map'
import Chatbox from '../ChatBox/Chatbox'

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

const Route = () => {
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
                <Stack.Screen name="Home" component={MyTabs}
                    options={{
                        headerShown: true,
                        headerLeft: false,
                        headerRight: () => (<HeaderComp />)
                    }} />
                <Stack.Screen name="MyDrawer" component={MyDrawer} />
                <Stack.Screen name="AlertCretae" component={AlertCretae}
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

export default Route