import {
    View,
    Text,
    ScrollView,
    TextInput,
    TouchableOpacity,
    Dimensions,
    SafeAreaView,
    TouchableWithoutFeedback,
    Image,
  } from "react-native";
  import React, { useState } from "react";
  import { COLORS } from "../constants";
  import { useNavigation } from "@react-navigation/native";
  const Search = () => {
    const [result, setResult] = useState([1,2,3,4,5,6]);
    const { width, height } = Dimensions.get("window");
    const navigation = useNavigation();
    return (
      <SafeAreaView style={{ backgroundColor: COLORS.bg, flex: 1 }}>
        <View
          style={{
            backgroundColor: COLORS.cardBg,
            borderRadius: 20,
            marginTop: 25,
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            padding: 10,
          }}
        >
          <TextInput
            placeholder="search movies"
            placeholderTextColor={"white"}
            style={{
              padding: 10,
              flex: 1,
              color: "white",
              fontSize: 20,
            }}
          />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Home");
            }}
          >
          </TouchableOpacity>
        </View>
        {result.length > 0 ? (
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 15 }}
            style={{
              marginTop: 20,
            }}
          >
            <Text
              style={{ color: COLORS.white, fontSize: 20, fontWeight: "bold" }}
            >
              Result ({result.length})
            </Text>
            <View
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
                flexDirection: "row",
                gap: 10,
                marginTop: 20,
              }}
            >
              {result.map((item, index) => {
                return (
                  <TouchableWithoutFeedback
                    key={index}
                    onPress={() => {
                      navigation.navigate("Movies", item);
                    }}
                  >
                    <Image
                      source={require("../images/nft02.jpg")}
                      style={{
                        width: width * 0.44,
                        height: height * 0.3,
                        borderRadius: 50,
                      }}
                    />
                  </TouchableWithoutFeedback>
                );
              })}
            </View>
          </ScrollView>
        ) : (
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
              No Search Found
            </Text>
          </View>
        )}
      </SafeAreaView>
    );
  };
  
  export default Search;
  