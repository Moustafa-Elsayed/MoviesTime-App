import {
 
    TouchableWithoutFeedback,
    Image,
    Dimensions,
  } from "react-native";
  import React from "react";
  const { width, height } = Dimensions.get("window");
  
  const MovieCard = ({  }) => {
    return (
      <TouchableWithoutFeedback >
        <Image
            source={require("../assets/images/nft12.jpg")}
          style={{
            width: width * 0.6,
            height: height * 0.4,
            borderRadius:10
          }}
        />
      </TouchableWithoutFeedback>
    );
  };
  
  export default MovieCard;
  