import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { theme } from '../styles/theme';

const routinesData = [
  {
    id: '1',
    name: 'Rutina de Fuerza',
    duration: '45 min',
    exercises: 6,
    level: 'Intermedio',
    icon: '💪'
  },
  {
    id: '2',
    name: 'Rutina Cardio',
    duration: '30 min',
    exercises: 4,
    level: 'Principiante',
    icon: '🏃'
  },
  {
    id: '3',
    name: 'Rutina Completa',
    duration: '60 min',
    exercises: 8,
    level: 'Avanzado',
    icon: '🏋️'
  }
];

export const CustomRoutinesScreen = ({ navigation }) => {
  const renderRoutineItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.routineCard}
      onPress={() => console.log('Rutina seleccionada:', item.name)}
    >
      <View style={styles.routineHeader}>
        <Text style={styles.routineIcon}>{item.icon}</Text>
        <Text style={styles.routineName}>{item.name}</Text>
      </View>
      <View style={styles.routineDetails}>
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Duración</Text>
          <Text style={styles.detailValue}>{item.duration}</Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Ejercicios</Text>
          <Text style={styles.detailValue}>{item.exercises}</Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Nivel</Text>
          <Text style={styles.detailValue}>{item.level}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Rutinas Personalizadas</Text>
        <Text style={styles.subtitle}>Elige tu rutina ideal</Text>
      </View>

      <View style={styles.content}>
        {routinesData.map(routine => renderRoutineItem({ item: routine }))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  header: {
    padding: theme.spacing.lg,
    backgroundColor: theme.colors.primary,
  },
  title: {
    ...theme.typography.h1,
    color: '#FFFFFF',
    marginBottom: theme.spacing.xs,
  },
  subtitle: {
    ...theme.typography.body,
    color: '#FFFFFF',
    opacity: 0.8,
  },
  content: {
    padding: theme.spacing.md,
  },
  routineCard: {
    backgroundColor: theme.colors.card,
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.md,
    marginBottom: theme.spacing.md,
  },
  routineHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.md,
  },
  routineIcon: {
    fontSize: 24,
    marginRight: theme.spacing.sm,
  },
  routineName: {
    ...theme.typography.h2,
    color: theme.colors.text,
  },
  routineDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detailItem: {
    alignItems: 'center',
  },
  detailLabel: {
    ...theme.typography.caption,
    color: theme.colors.textSecondary,
    marginBottom: theme.spacing.xs,
  },
  detailValue: {
    ...theme.typography.body,
    color: theme.colors.text,
    fontWeight: '600',
  },
}); 