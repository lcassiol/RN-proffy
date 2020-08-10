import React, { useState, useEffect } from "react";
import { View, ScrollView } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";

import { useFocusEffect } from '@react-navigation/native';
import TeacherItem, { TeacherProps } from "../../components/TeacherItem";
import PageHeader from "../../components/PageHeader";

import styles from "./styles";

const Favorites: React.FC = () => {
  const [favorites, setFavorites] = useState([]);

  function loadFavorites() {
    AsyncStorage.getItem("favorites").then((response) => {
      if (response) {
        const favoritedTeachers = JSON.parse(response);

        setFavorites(favoritedTeachers);
      }
    });
  }

  useFocusEffect(() => {
    React.useCallback(() => {
      loadFavorites(); 
    },[]) 
  });

  return (
    <View style={styles.container}>
      <PageHeader title="Meus proffys favoritos" />

      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        {favorites.map((teacher: TeacherProps) => {
          return (
            <TeacherItem key={teacher.id} teacher={teacher} favorited/>
          )
        }}
        
      </ScrollView>
    </View>
  );
};

export default Favorites;
