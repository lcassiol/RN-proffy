import React, { useState } from "react";
import { View, ScrollView, TextInput, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import PageHeader from "../../components/PageHeader";
import TeacherItem, { TeacherProps } from "../../components/TeacherItem";
import { BorderlessButton, RectButton } from "react-native-gesture-handler";
import api from "../../services/api";

import styles from "./styles";

const TeacherList: React.FC = () => {
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [teachers, setTeachers] = useState([]);
  const [subject, setSubject] = useState("");
  const [week_day, setWeekDay] = useState("");
  const [time, setTime] = useState("");

  function handleToggleFiltersVisible() {
    setIsFilterVisible(!isFilterVisible);
  }

  async function handleFilterSubmit() {
    const { data } = await api.get("classes", {
      params: {
        subject,
        week_day,
        time,
      },
    });

    setTeachers(data);
    if (data) {
      setIsFilterVisible(false);
    }
  }

  return (
    <View style={styles.container}>
      <PageHeader
        title="Proffys disponiveis"
        headerRight={
          <BorderlessButton onPress={handleToggleFiltersVisible}>
            <Feather name="filter" size={20} color="#fff" />
          </BorderlessButton>
        }
      >
        {isFilterVisible && (
          <View style={styles.searchForm}>
            <Text style={styles.label}>Matéria</Text>
            <TextInput
              style={styles.input}
              value={subject}
              onChangeText={(text) => setSubject(text)}
              placeholderTextColor="#c1bccc"
              placeholder="Qual a matéria"
            />

            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Dia da semana</Text>
                <TextInput
                  style={styles.input}
                  value={week_day}
                  onChangeText={(text) => setWeekDay(text)}
                  placeholderTextColor="#c1bccc"
                  placeholder="Qual o dia?"
                />
              </View>

              <View style={styles.inputBlock}>
                <Text style={styles.label}>Horário</Text>
                <TextInput
                  style={styles.input}
                  value={time}
                  onChangeText={(text) => setTime(text)}
                  placeholderTextColor="#c1bccc"
                  placeholder="Qual o horário?"
                />
              </View>
            </View>

            <RectButton
              style={styles.submitButton}
              onPress={handleFilterSubmit}
            >
              <Text style={styles.submitButtonText}>Filtrar</Text>
            </RectButton>
          </View>
        )}
      </PageHeader>

      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        {teachers.map((teacher: TeacherProps) => {
          return <TeacherItem key={teacher.id} teacher={teacher} />;
        })}
      </ScrollView>
    </View>
  );
};

export default TeacherList;
