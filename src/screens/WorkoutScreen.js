import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { theme } from '../styles/theme';

const exercisesData = [
  { 
    id: '1', 
    name: 'Flexiones', 
    sets: '3 x 12',
    icon: '💪',
    description: 'Ejercicio de pecho y tríceps'
  },
  { 
    id: '2', 
    name: 'Sentadillas', 
    sets: '3 x 15',
    icon: '🦵',
    description: 'Ejercicio de piernas'
  },
  { 
    id: '3', 
    name: 'Plancha', 
    sets: '3 x 30s',
    icon: '⏱️',
    description: 'Ejercicio de core'
  },
  { 
    id: '4', 
    name: 'Dominadas', 
    sets: '3 x 8',
    icon: '🏋️',
    description: 'Ejercicio de espalda'
  },
];

export const WorkoutScreen = ({ navigation }) => {
  const renderExerciseItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.exerciseCard}
      onPress={() => console.log('Ejercicio seleccionado:', item.name)}
    >
      <View style={styles.exerciseHeader}>
        <Text style={styles.exerciseIcon}>{item.icon}</Text>
        <Text style={styles.exerciseName}>{item.name}</Text>
      </View>
      <Text style={styles.exerciseSets}>{item.sets}</Text>
      <Text style={styles.exerciseDescription}>{item.description}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Ejercicios</Text>
        <Text style={styles.subtitle}>Selecciona un ejercicio para comenzar</Text>
      </View>

      <FlatList
        data={exercisesData}
        renderItem={renderExerciseItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
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
  listContainer: {
    padding: theme.spacing.md,
  },
  exerciseCard: {
    backgroundColor: theme.colors.card,
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.md,
    marginBottom: theme.spacing.md,
  },
  exerciseHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.sm,
  },
  exerciseIcon: {
    fontSize: 24,
    marginRight: theme.spacing.sm,
  },
  exerciseName: {
    ...theme.typography.h2,
    color: theme.colors.text,
  },
  exerciseSets: {
    ...theme.typography.body,
    color: theme.colors.primary,
    fontWeight: '600',
    marginBottom: theme.spacing.xs,
  },
  exerciseDescription: {
    ...theme.typography.caption,
    color: theme.colors.textSecondary,
  },
}); 