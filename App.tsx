// App.js

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Provider} from 'react-redux';
import {NewsScreen, PortfolioScreen, StocksScreen} from './src/screens';
import store from './src/redux/store';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            headerShown: false,
            tabBarIcon: ({focused, color, size}) => {
              let iconComponent;
              if (route.name === 'Portfolio') {
                iconComponent = focused ? (
                  <MaterialCommunityIcons
                    name="clock"
                    size={size}
                    color={color}
                  />
                ) : (
                  <MaterialCommunityIcons
                    name="chart-line-variant"
                    size={size}
                    color={color}
                  />
                );
              } else if (route.name === 'Markets') {
                iconComponent = focused ? (
                  <MaterialCommunityIcons
                    name="chart-line"
                    size={size}
                    color={color}
                  />
                ) : (
                  <MaterialCommunityIcons
                    name="chart-line-variant"
                    size={size}
                    color={color}
                  />
                );
              } else if (route.name === 'News') {
                iconComponent = focused ? (
                  <MaterialCommunityIcons
                    name="newspaper"
                    size={size}
                    color={color}
                  />
                ) : (
                  <MaterialCommunityIcons
                    name="newspaper-variant-multiple-outline"
                    size={size}
                    color={color}
                  />
                );
              }
              return iconComponent;
            },
          })}>
          <Tab.Screen name="Portfolio" component={PortfolioScreen} />
          <Tab.Screen name="Markets" component={StocksScreen} />
          <Tab.Screen name="News" component={NewsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
