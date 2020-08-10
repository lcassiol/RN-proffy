import React, { useState } from "react";
import { View, Image, Text, Linking } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import { RectButton } from "react-native-gesture-handler";

import heartOutlineIcon from "../../assets/images/heart-outline.png";
import unfavoriteIcon from "../../assets/images/unfavorite.png";
import whatsappIcon from "../../assets/images/whatsapp.png";

import styles from "./styles";
import api from "../../services/api";

export interface TeacherProps {
  id: number;
  avatar: string;
  bio: string;
  cost: string;
  name: string;
  subject: string;
  whatsapp: string;
}

interface TeacherItemProps {
  teacher: TeacherProps;
  favorited: boolean;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher, favorited }) => {
  const [isFavorite, setIsFavorite] = useState(favorited);

  function handleLinkToWhatsapp() {
    api.post("connections", {
      user_id: teacher.id,
    });
    Linking.openURL(`whatsapp://send?phone=${teacher.whatsapp}`);
  }

  async function handleToggleFavorite() {
    const favorites = await AsyncStorage.getItem("favorites");
    let favoritesArray = [];

    if (favorites) {
      favoritesArray = JSON.parse(favorites);
    }

    if (isFavorite) {
      const favoriteIndex = favoritesArray.findIndex(
        (teacherItem: TeacherProps) => {
          return teacher.id === teacherItem.id;
        }
      );

      favoritesArray.splice(favoriteIndex, 1);
      setIsFavorite(false);
    } else {
      //add favorite

      favoritesArray.push(teacher);
      setIsFavorite(true);
    }
    await AsyncStorage.setItem("favorites", JSON.stringify(favoritesArray));
  }

  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image style={styles.avatar} source={{ uri: teacher.avatar }} />

        <View style={styles.profileInfo}>
          <Text style={styles.name}>{teacher.name}</Text>
          <Text style={styles.subject}>{teacher.subject}</Text>
        </View>
      </View>

      <Text style={styles.bio}>{teacher.bio}</Text>

      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/hora {"   "}
          <Text style={styles.priceValue}>R$ {teacher.cost}</Text>
        </Text>

        <View style={styles.buttonsContainer}>
          <RectButton
            onPress={handleToggleFavorite}
            style={[styles.favoriteButton, isFavorite ? styles.favorited : {}]}
          >
            {isFavorite ? (
              <Image source={unfavoriteIcon} />
            ) : (
              <Image source={heartOutlineIcon} />
            )}
          </RectButton>

          <RectButton
            style={styles.contactButton}
            onPress={handleLinkToWhatsapp}
          >
            <Image source={whatsappIcon} />
            <Text style={styles.contactButtonText}>Entrar em contato</Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
};

export default TeacherItem;
