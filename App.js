import React from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  Button,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

/*------------------------ COMPONENTS ------------------------ */
import AppBar from "./components/AppBar";
import HomeIcon from "./components/HomeIcon";
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

export default function App() {
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
            showLabel: false, // hide labels
            activeTintColor: "#F8F8F8", // active icon color
            inactiveTintColor: "#586589", // inactive icon color
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
            options={{ tabBarIcon: ({ tintColor }) => <HomeIcon /> }}
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
            options={{ tabBarIcon: ({ tintColor }) => <ProfileIcon /> }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}

/*export default function App() {
  //const comicPage = useState(false);

  return (
    <View><SearchIcon/></View>
    
  );
}*/

/*export default function App() {
  //const comicPage = useState(false);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="perfil" component={Perfil} />
        <Stack.Screen name="evento" component={Evento} />
        <Stack.Screen name="comic" component={Comic} />
      </Stack.Navigator>
      <AppBar />
    </NavigationContainer>
  );
}*/

/*export default function App() {
  //const comicPage = useState(false);

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <LinearGradient
        colors={["white", "white", "#B895C8"]}
        style={styles.gradient}
      />

<CloseSvg style={styles.closeIcon}/>
    </View>
  );
}*/

/*<View style={styles.container}>
      <StatusBar hidden />
      <LinearGradient
        colors={["white", "white", "#B895C8"]}
        style={styles.gradient}
      />

      <Resultados />
      <AppBar />
    </View>*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff0",
    //alignItems: "center",
    //justifyContent: "center",
    //justifyContent: "flex-end",
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
});
