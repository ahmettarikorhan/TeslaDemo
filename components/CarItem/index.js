import React from "react";
import { View, Text, ImageBackground  , Linking} from "react-native";
import StyledButton from "../StyledButton";
import styles from "./styles";

const CarItem = (props) => {

    const { name, tagline ,taglineCTA, image} = props.car;

  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={image}
        style={styles.image}
      />

      <View style={styles.titles}>
        <Text style={styles.carTitle}>{name}</Text>

        <Text style={styles.subtitle}>
            {tagline + " "}
            <Text style={styles.subtitleCTA} onPress={() => Linking.openURL('https://www.tesla.com/support/taking-delivery?redirect=no')}>
             {taglineCTA}
            </Text>
        </Text>

      </View>

      <View style={styles.buttonsContainer}>
        <StyledButton
          type="primary"
          content={"Custom Order"}
          onPress={() => {
            Linking.openURL('https://www.tesla.com/models/design#overview')
          }}
        />
        <StyledButton
          type="secondary"
          content={"Existing Inventory"}
          onPress={() => {
            console.warn("Existing Inventory Çağırıldı");
          }}
        />
      </View>
    </View>
  );
};

export default CarItem;
