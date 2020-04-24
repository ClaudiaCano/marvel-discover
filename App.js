import React from "react";
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

/*------------------------ COMPONENTS ------------------------ */
import AppBar from "./components/AppBar";
import HomeIcon from "./components/HomeIcon";
import Label from "./components/Label";
import ProfileIcon from "./components/ProfileIcon";
import SearchIcon from "./components/SearchIcon";
import AppBarBackground from "./components/AppBarBackground";
import SearchModal from "./components/SearchModal";
import CloseSvg from "./assets/close.svg";

/*------------------------ PAGES ------------------------ */
import Comic from "./pages/Comic";
import Evento from "./pages/Evento";
import Splash from "./pages/Splash";
import Resultados from "./pages/Resultados";
import Leidos from "./pages/Leidos";
import Guardados from "./pages/Guardados";
import Perfil from "./pages/Perfil";
import Search from "./pages/Search";
import Home from "./pages/Home";

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
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <AppBarBackground />
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
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
          })}
          tabBarOptions={{
            showLabel: true, // hide labels
            activeTintColor: "red", // active icon color
            inactiveTintColor: "#000", // inactive icon color
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
            style={styles.icon}
            options={{ tabBarLabel: ({focused}) => <Label Title="Home" Focused={focused}/>, tabBarIcon: ({ tintColor }) => <HomeIcon/> }}
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
            options={{ tabBarLabel: ({focused}) => <Label Title="Perfil" Focused={focused}/>, tabBarIcon: ({ tintColor }) => <ProfileIcon/>  }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff0",
  },
  icon: {},
  buttonStyle: {
    height: 500,
    width: 110,
    backgroundColor: "red",
    borderRadius: 100,
  },
  closeIcon: {
    position: "absolute",
    top: 30,
    right: 30,
    width: 20,
    height: 20,
    alignSelf: "flex-end",
    zIndex: 2,
  },
  text: {
    fontFamily: "RobotoCondensed-Regular",
  },
});
