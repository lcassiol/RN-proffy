import React from "react";
import { Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import TeacherList from "../pages/TeacherList";
import Favorites from "../pages/Favorites";

const { Navigator, Screen } = createBottomTabNavigator();

const StudyTabs: React.FC = () => {
  return (
    <Navigator
      tabBarOptions={{
        style: {
          elevation: 0,
          shadowOpacity: 0,

          height: Platform.OS === "ios" ? 84 : 64,
        },
        tabStyle: {
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          paddingBottom: Platform.OS === "ios" ? 20 : 0,
        },
        safeAreaInsets: {
          bottom: 0,
        },
        iconStyle: {
          flex: 0,
          width: 20,
          height: Platform.OS === "ios" ? 24 : 20,
        },
        labelStyle: {
          fontFamily: "Archivo_700Bold",
          fontSize: 13,
          marginLeft: 16,
        },
        inactiveBackgroundColor: "#fafafc",
        activeBackgroundColor: "#ebebf5",
        inactiveTintColor: "#32264d",
      }}
    >
      <Screen
        name="TeacherList"
        component={TeacherList}
        options={{
          tabBarLabel: "Proffys",
          tabBarIcon: ({ size, color, focused }) => {
            return (
              <Ionicons
                size={size}
                color={focused ? "#8257e5" : color}
                name="ios-easel"
              />
            );
          },
        }}
      />
      <Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarLabel: "Favoritos",
          tabBarIcon: ({ size, color, focused }) => {
            return (
              <Ionicons
                size={size}
                color={focused ? "#8257e5" : color}
                name="ios-heart"
              />
            );
          },
        }}
      />
    </Navigator>
  );
};

export default StudyTabs;
