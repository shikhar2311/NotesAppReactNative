import React, { useState } from "react";
import {Platform, View, TextInput } from "react-native";
import Style from "./style";

export default function SearchBar({ data, onChange }) {
  const [masterData, setMasterData] = useState(data);
  const search = (text) => {
    if (text) {
      const newData = data.filter((item) => {
        const itemTitle = item.title
          ? item.title.toUpperCase()
          : "".toUpperCase();
        const titleSearch = text.toUpperCase();
        return itemTitle.indexOf(titleSearch) > -1;
      });
      onChange(newData);
    } else {
      onChange(masterData);
    }
  };

  return (
    <View
      style={[
        Style.searchArea,
        { padding: Platform.OS === "android" ? 12 : 20},
      ]}
    >
      <TextInput
        placeholder="Search Tasks..."
        maxLength={50}
        onChangeText={(text) => search(text)}
      />
    </View>
  );
}
