import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {
  BreedScreen,
  GalleryScreen,
  MainScreen,
  ManageBreed,
  ManagePhotoGallery,
  ProfileScreen,
  WelcomeScreen,
} from './screens';
import GeneralColors from './constants/colors';
import BreedContextProvider from './store/breed_context';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainScreen"
        component={MainScreen}
        options={{title: ' ', headerShown: false}}
      />
      <Stack.Screen
        name="GalleryScreen"
        component={GalleryScreen}
        options={{
          title: 'Gallery',
          headerStyle: {backgroundColor: GeneralColors.lightOrange},
        }}
      />
      <Stack.Screen
        name="BreedScreen"
        component={BreedScreen}
        options={{
          headerStyle: {
            backgroundColor: GeneralColors.maroon,
          },
          headerTintColor: 'white',
          title: ' ',
        }}
      />
      <Stack.Screen
        name="ManageBreed"
        component={ManageBreed}
        options={{
          headerStyle: {backgroundColor: GeneralColors.maroon},
          headerTintColor: 'white',
        }}
      />
      <Stack.Screen
        name="ManagePhotoGallery"
        component={ManagePhotoGallery}
        options={{
          title: ' ',
          headerStyle: {backgroundColor: GeneralColors.maroon},
          headerTintColor: 'white',
        }}
      />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <BreedContextProvider>
      <NavigationContainer>
        <Drawer.Navigator
          screenOptions={{
            headerStyle: {backgroundColor: '#803D3B'},
            headerTintColor: 'white',
            drawerContentStyle: {backgroundColor: '#803D3B'},
            drawerInactiveTintColor: 'white',
            drawerActiveTintColor: '#322C2B',
            drawerActiveBackgroundColor: '#E4C59E',
            sceneStyle: {backgroundColor: '#3f2f25'},
          }}>
          <Drawer.Screen name="Welcome" component={WelcomeScreen} />
          <Drawer.Screen name="Profile" component={ProfileScreen} />
          <Drawer.Screen name="Main" component={StackNavigator} />
        </Drawer.Navigator>
      </NavigationContainer>
    </BreedContextProvider>
  );
}

export default App;
