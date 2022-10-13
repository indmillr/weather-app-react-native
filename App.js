import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Location from "expo-location";

export default function App() {
   // define state for Error Message related to Location permissions
   const [errorMessage, setErrorMessage] = useState(null);

   // location permissions on Load
   useEffect(() => {
      load();
   }, []);

   // a function to make sure on load that access to Location is permitted
   async function load() {
      try {
         let { status } = await Location.requestBackgroundPermissionsAsync();
         if (status !== "granted") {
            setErrorMessage("Access to Location is needed to run the App");
            return;
         }
         const location = await Location.getCurrentPositionAsync();
         const { latitude, longitude } = location.coords;
         alert(`Latitude: ${latitude}, Longitude: ${longitude}`);
      } catch (error) {}
   }

   return (
      <View style={styles.container}>
         <Text>Hello from ReactNative!</Text>
         <StatusBar style="auto" />
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "red",
      alignItems: "center",
      justifyContent: "center",
   },
});
