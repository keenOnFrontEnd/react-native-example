import React from "react";
import { Image, StyleSheet, TouchableHighlight, View } from "react-native";


export const PhotoScreen = ({ route, navigation }) => {
  const { img } = route.params;

  return (
    <TouchableHighlight
      onPress={() => navigation.navigate("Home")}
      activeOpacity={1}
      underlayColor="none"
    >
      <View style={styles.photoScreenWrapper}>
        <Image
          source={{ uri: img }}
          style={styles.image}
          resizeMethod="scale"
        />
      </View>
    </TouchableHighlight>
  );
};

PhotoScreen.navigationOptions = ({ route }) => ({});

const styles = StyleSheet.create({
  photoScreenWrapper: {
    flexDirection: "column",
    width: "100%",
    height: "100%",
  },
  image: {
    resizeMode: "contain",
    flex: 1,
  },
});
