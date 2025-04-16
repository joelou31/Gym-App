import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { theme } from '../styles/theme';
import { Image } from 'react-native'; // Asegúrate de importar esto


const exercisesData = [
  { 
    id: '1',
    name: 'Flexiones',
    sets: '3 x 12',
    icon: '💪',
    description: 'Ejercicio de pecho y tríceps',
    level: 'Beginner',
    duration: '00:30',
    calories: 80,
    image: require('../assets/exercises/pushups.jpg'),
    videoUrl: 'https://example.com/videos/flexiones.mp4',
    levelColor: '#6C63FF',
    reps: '3 x 12',
    equipment: 'Sin equipo',
    muscleGroup: 'Pecho',
    tips: 'Mantén el cuerpo recto y no bajes demasiado las caderas'
  },
  { 
    id: '2',
    name: 'Sentadillas',
    sets: '3 x 15',
    icon: '🦵',
    description: 'Ejercicio de piernas',
    level: 'Beginner',
    duration: '00:45',
    calories: 90,
    image: require('../assets/exercises/squat2.jpg'),
    videoUrl: 'https://example.com/videos/sentadillas.mp4',
    levelColor: '#6C63FF',
    reps: '3 x 15',
    equipment: 'Sin equipo',
    muscleGroup: 'Piernas',
    tips: 'Mantén las rodillas alineadas con los pies'
  },
  { 
    id: '3',
    name: 'Plancha',
    sets: '3 x 30s',
    icon: '⏱️',
    description: 'Ejercicio de core',
    level: 'Intermediate',
    duration: '00:30',
    calories: 70,
    image: require('../assets/exercises/plank.jpg'),
    videoUrl: 'https://example.com/videos/plancha.mp4',
    levelColor: '#FF9800',
    reps: '3 x 30s',
    equipment: 'Mat opcional',
    muscleGroup: 'Abdominales',
    tips: 'Evita arquear la espalda y activa el core'
  },
  { 
    id: '4',
    name: 'Dominadas',
    sets: '3 x 8',
    icon: '🏋️',
    description: 'Ejercicio de espalda',
    level: 'Advanced',
    duration: '00:40',
    calories: 100,
    image: require('../assets/exercises/pullups.jpg'),
    videoUrl: 'https://example.com/videos/dominadas.mp4',
    levelColor: '#FF5252',
    reps: '3 x 8',
    equipment: 'Barra de dominadas',
    muscleGroup: 'Espalda y bíceps',
    tips: 'No balancees el cuerpo, sube de forma controlada'
  },
];

export const WorkoutScreen = ({ navigation }) => {
  const [selectedLevel, setSelectedLevel] = useState('Beginner');
  const levels = ['Beginner', 'Intermediate', 'Advanced'];

  const renderExerciseItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.exerciseCard}
      onPress={() => navigation.navigate('ExerciseDetail', { exercise: item })}
    >
      <Image source={item.image} style={styles.exerciseImage} />
      <View style={styles.exerciseContent}>
        <Text style={styles.exerciseName}>{item.name}</Text>
        <Text style={styles.exerciseSets}>{item.sets}</Text>
        <Text style={styles.exerciseDescription}>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );

  // En el futuro puedes filtrar según el nivel
  const filteredExercises = exercisesData.filter(e => e.level === selectedLevel);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Ejercicios</Text>
        <Text style={styles.subtitle}>Selecciona un ejercicio para comenzar</Text>
      </View>

      {/* Tabs de Niveles */}
      <View style={styles.tabContainer}>
        {levels.map(level => (
          
          <TouchableOpacity 
            key={level}
            onPress={() => setSelectedLevel(level)}
            style={[
              styles.tabButton,
              selectedLevel === level && styles.tabButtonActive
            ]}
          >
            <Text style={[
              styles.tabText,
              selectedLevel === level && styles.tabTextActive
            ]}>
              {level}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={filteredExercises}
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
  
  exerciseImage: {
    width: '100%',
    height: 150,
    borderRadius: theme.borderRadius.md,
    marginBottom: theme.spacing.sm,
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
  // 👉 Tabs de niveles
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: theme.spacing.sm,
    backgroundColor: theme.colors.background,
  },
  tabButton: {
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: theme.colors.card,
  },
  tabButtonActive: {
    backgroundColor: theme.colors.primary,
  },
  tabText: {
    color: theme.colors.textSecondary,
    fontWeight: '500',
  },
  tabTextActive: {
    color: '#fff',
    fontWeight: '700',
  },
  // 👉 Lista de ejercicios
  listContainer: {
    padding: theme.spacing.md,
  },
  exerciseCard: {
    backgroundColor: theme.colors.card,
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.md,
    marginBottom: theme.spacing.md,
  },
  exerciseContent: {
    marginTop: theme.spacing.sm,
  },
  exerciseName: {
    ...theme.typography.h2,
    color: theme.colors.text,
    marginBottom: theme.spacing.xs,
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
