import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import { RenderItem } from "../components/RenderItem";

export const HomeScreen = ({ navigation }) => {
  let Data = useSelector((state) => state.data.photos);
  let onOpenHandler = (photo) => {
    navigation.navigate("Photo", {
      img: photo.img,
      authorUserName: photo.authorUserName,
      alt_description: photo.alt_description,
      description: photo.description,
    });
  };
  return (
    <View style={styles.homeWrapper}>
      <FlatList
        data={Data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <RenderItem item={item} onOpen={onOpenHandler} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  homeWrapper: {
    justifyContent: "center",
    alignContent: "center",
  },
});
