import React from "react";
import { Provider } from "mobx-react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  Button,
  ActivityIndicator,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useFonts } from "@use-expo/font";

import MarvelContext, { MarvelProvider } from "./model/MarvelModel";

/*------------------------ COMPONENTS ------------------------ */
import HomeIcon from "./components/HomeIcon";
import Label from "./components/Label";
import AppBarBackground from "./components/AppBarBackground";
import SearchModal from "./components/SearchModal";

import Logo from "./assets/logo.svg";
import ActiveLogo from "./assets/logoactive.svg";
import ProfileIcon from "./assets/profileicon.svg";
import ActiveProfileIcon from "./assets/profileactive.svg";

/*------------------------ PAGES ------------------------ */
import Comic from "./pages/Comic";
import Evento from "./pages/Evento";
import Splash from "./pages/Splash";
import Leidos from "./pages/Leidos";
import Guardados from "./pages/Guardados";
import Perfil from "./pages/Perfil";
import Search from "./pages/Search";
import Home from "./pages/Home";
import { SplashScreen } from "expo";

//--------- PARA EL SEARCH (porque la gradiente es diferente)-------------
/*
export default function App() {
  return (
    <Search/>
  );
}
*/

const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="Evento" component={Evento} />
      <HomeStack.Screen name="Comic" component={Comic} />
    </HomeStack.Navigator>
  );
}

function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <ProfileStack.Screen name="Perfil" component={Perfil} />
      <ProfileStack.Screen name="Leidos" component={Leidos} />
      <ProfileStack.Screen name="Guardados" component={Guardados} />
    </ProfileStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

const dimensions = Dimensions.get("window");
const windowwidth = dimensions.width;
const windowheight = dimensions.height;
const ratio = windowwidth / 615.6;
const barheight = 136 * ratio;

export default function App(props) {
  const [fontsLoaded] = useFonts({
    "RobotoCondensed-Regular": require("./assets/fonts/RobotoCondensed-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return (
      <View style={[styles.container]}>
        <LinearGradient
          colors={["white", "white", "#B895C8"]}
          style={styles.gradient}
        />
        <ActivityIndicator size="large" color="#4E00B0" />
      </View>
    );
  }

  return (
    <MarvelProvider>
      <View style={styles.container}>
        <StatusBar hidden />
        <AppBarBackground />
        <NavigationContainer>
          <Tab.Navigator
            tabBarOptions={{
              showLabel: true, // hide labels
              style: {
                backgroundColor: "transparent",
                position: "absolute", // TabBar background
                height: barheight,
                width: windowwidth,
                elevation: 0,
                borderTopWidth: 0,
                zIndex: 2,
              },
            }}
          >
            <Tab.Screen
              name="Home"
              component={HomeStackScreen}
              options={{
                tabBarLabel: ({ focused }) => (
                  /*<Label Title="Home" Focused={focused} />*/
                  <Text style={focused ? styles.textActive : styles.text}>Home</Text>
                ),
                /*tabBarIcon: ({ tintColor }) => <Logo width={20} height={20} />,*/
                tabBarIcon: ({ focused }) =>
                  focused ? <ActiveLogo width={20} height={20} style={styles.icon}/> : <Logo width={20} height={20} style={styles.icon}/>,
              }}
            />
            <Tab.Screen
              name="Search"
              component={Search}
              options={{
                tabBarButton: () => <SearchModal />,
              }}
            />
            <Tab.Screen
              name="Perfil"
              component={ProfileStackScreen}
              options={{
                tabBarLabel: ({ focused }) => (
                  <Text style={focused ? styles.textActive : styles.text}>Perfil</Text>
                ),
                tabBarIcon: ({ focused }) =>
                  focused ? <ActiveProfileIcon width={20} height={20} style={styles.icon}/> : <ProfileIcon width={20} height={20} style={styles.icon}/>,
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </View>
    </MarvelProvider>
  );
}

/*initialRouteName="Home"
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === "Home") {
                  iconName = focused
                    ? "ios-information-circle"
                    : "ios-information-circle-outline";
                } else if (route.name === "Settings") {
                  iconName = focused ? "ios-list-box" : "ios-list";
                }

                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
              },
            })}*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  buttonStyle: {
    height: 500,
    width: 110,
    backgroundColor: "red",
    borderRadius: 100,
  },
  text: {
    fontFamily: "RobotoCondensed-Regular",
    fontSize: 11,
    marginBottom: 15,
  },
  textActive: {
    fontFamily: "RobotoCondensed-Regular",
    fontSize: 11,
    color: "#5E009C",
    marginBottom: 15,
  },
  icon: {
    marginBottom: -25,
  },
});
