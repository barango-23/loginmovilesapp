import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./HomeScreen";
import LoginScreen from "./LoginScreen";
import Settings from "./Settings";
import Chat from "./Chat";
import {MaterialIcons}from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
    return (
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false, 
          tabBarInactiveTintColor: 'red', 
          tabBarActiveTintColor: 'orange', 
          tabBarActiveBackgroundColor: 'black',
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <MaterialIcons
                name="home"
                size={size}
                color={focused ? color : 'red'} // Cambia el color si está activo o inactivo
              />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <MaterialIcons
                name="settings"
                size={size}
                color={focused ? color : 'red'}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Chat"
          component={Chat}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <MaterialIcons
                name="chat"
                size={size}
                color={focused ? color : 'red'}
              />
            ),
          }}
        />
        <Tab.Screen
          name="login"
          component={LoginScreen}
          options={{
           tabBarIcon:({focused,color,size})=>(<MaterialIcons name="login"size={size}color={focused?color:'red'}/>),
           tabBarStyle:{display: 'none'}  // Oculta la pestaña de inicio de sesión
          }}
        />
      </Tab.Navigator>
    );
  }