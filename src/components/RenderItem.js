import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export const RenderItem = ({ item, onOpen }) => {
  let img = item.urls.regular;
  let authorUserName = item.user.username;
  let alt_description = item.alt_description
    ? item.alt_description
    : "No description";
  let description = item.description ? item.description : alt_description;
  const photo = {
    img: img,
    authorUserName: authorUserName,
    alt_description: alt_description,
    description: description,
  };
  return (
    <TouchableOpacity onPress={() => onOpen(photo)} activeOpacity={0.9}>
      <View style={styles.wrapper}>
        <Image source={{ uri: img }} style={styles.image} />
        <View>
          <Text style={styles.description}>{description}</Text>
          <Text style={styles.author}>by: {authorUserName}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    alignSelf: "center",
  },
  wrapper: {
    width: "85%",
    flexDirection: "column",
    alignSelf: "center",
    justifyContent: "center",
    alignContent: "center",
    marginBottom: 50,
    marginTop: 20,
  },
  description: {
    fontSize: 15,
    textAlign: "left",
    marginTop: 5,
  },
  author: {
    fontSize: 15,
    marginTop: 10,
    textAlign: "right",
  },
});
