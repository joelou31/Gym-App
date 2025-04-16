// screens/ExerciseDetailScreen.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { theme } from '../styles/theme';

export const ExerciseDetailScreen = ({ route }) => {
  const { exercise } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.icon}>{exercise.icon}</Text>
      <Text style={styles.name}>{exercise.name}</Text>
      <Text style={styles.level}>Nivel: <Text style={{ color: exercise.levelColor }}>{exercise.level}</Text></Text>
      <Text style={styles.info}>Reps: {exercise.reps}</Text>
      <Text style={styles.info}>Duración: {exercise.duration}</Text>
      <Text style={styles.info}>Calorías aprox: {exercise.calories} kcal</Text>
      <Text style={styles.info}>Equipo: {exercise.equipment}</Text>
      <Text style={styles.info}>Grupo muscular: {exercise.muscleGroup}</Text>
      <Text style={styles.description}>{exercise.description}</Text>
      <Text style={styles.tips}>💡 Tips: {exercise.tips}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: theme.spacing.lg,
    backgroundColor: theme.colors.background,
    flex: 1,
  },
  icon: {
    fontSize: 60,
    textAlign: 'center',
    marginBottom: theme.spacing.md,
  },
  name: {
    ...theme.typography.h1,
    textAlign: 'center',
    color: theme.colors.text,
    marginBottom: theme.spacing.sm,
  },
  level: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: theme.spacing.sm,
    color :'#FFFFFF',
  },
  info: {
    ...theme.typography.body,
    marginBottom: theme.spacing.xs,
    color: '#FFFFFF',
    
  },
  description: {
    ...theme.typography.body,
    marginVertical: theme.spacing.md,
    color: '#FFFFFF',
  },
  tips: {
    ...theme.typography.caption,
    fontStyle: 'italic',
    color: theme.colors.textSecondary,
  },
});
