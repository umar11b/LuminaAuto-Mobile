import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import { Pressable, StatusBar } from "react-native"; // Add StatusBar here

import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";
import { useClientOnlyValue } from "@/components/useClientOnlyValue";

import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <>
      <StatusBar backgroundColor="#121212" barStyle="light-content" />
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#BB86FC", // highlight color
          tabBarInactiveTintColor: "#E0E0E0", // text color
          tabBarStyle: {
            backgroundColor: "#121212", // dark background color
            borderTopWidth: 0, // remove the border
          },
          // Disable the static render of the header on web
          // to prevent a hydration error in React Navigation v6.
          headerShown: useClientOnlyValue(false, true),
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            tabBarIcon: ({ color }) => (
              <Ionicons name="car-sport-outline" size={25} color={color} />
            ),
            headerRight: () => (
              <Link href="/modal" asChild>
                <Pressable>
                  {({ pressed }) => (
                    <FontAwesome
                      name="info-circle"
                      size={25}
                      color={Colors[colorScheme ?? "light"].text}
                      style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                    />
                  )}
                </Pressable>
              </Link>
            ),
          }}
        />
        <Tabs.Screen
          name="search"
          options={{
            title: "Search",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="cloud-search-outline"
                size={25}
                color={color}
              />
            ),
            headerRight: () => (
              <Link href="/modal" asChild>
                <Pressable>
                  {({ pressed }) => (
                    <FontAwesome
                      name="info-circle"
                      size={25}
                      color={Colors[colorScheme ?? "light"].text}
                      style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                    />
                  )}
                </Pressable>
              </Link>
            ),
          }}
        />

        <Tabs.Screen
          name="sell"
          options={{
            title: "Sell",
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="sell" size={23} color={color} />
            ),
          }}
        />

        <Tabs.Screen
          name="favorite"
          options={{
            title: "Favorites",
            tabBarIcon: ({ color }) => (
              <Fontisto name="favorite" size={23} color={color} />
            ),
          }}
        />

        <Tabs.Screen
          name="account"
          options={{
            title: "My Account",
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="account-circle" size={25} color={color} />
            ),
          }}
        />
      </Tabs>
    </>
  );
}
