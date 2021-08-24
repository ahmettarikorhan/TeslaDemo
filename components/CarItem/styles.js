import { StyleSheet , Dimensions} from "react-native";

const styles = StyleSheet.create({
    carContainer:{
        width: '100%',
        height: Dimensions.get("window").height
      },
      titles:{
        marginTop:"30%",
        width: "100%",
        alignItems:"center"
      },
      subtitle:{
        fontSize: 16,
        color: "#5c5e62"
      },
      carTitle:{
          fontSize: 40,
          fontWeight: '500'
      },
      image:{
        width: "100%",
        height: "100%",
        position:"absolute",
        resizeMode:"cover"
      },
      buttonsContainer:{
        position:"absolute",
        bottom: 80,
        width:"100%"
      },
      subtitleCTA:{
        textDecorationLine:"underline"
      }
});

export default styles;