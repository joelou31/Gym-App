import React from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList } from 'react-native';
import { Button } from '../components/common/Button';
import { theme } from '../styles/theme';

const statsData = [
  { id: '1', icon: '🔥', value: '450', label: 'Calorías' },
  { id: '2', icon: '⏱️', value: '45', label: 'Minutos' },
  { id: '3', icon: '👣', value: '8,234', label: 'Pasos' },
  { id: '4', icon: '💪', value: '4', label: 'Ejercicios' },
  { id: '5', icon: '🎯', value: '75%', label: 'Objetivo' },
];

export const DashboardScreen = ({ navigation }) => {
  const renderStatItem = ({ item }) => (
    <View style={styles.statCard}>
      <Text style={styles.statIcon}>{item.icon}</Text>
      <Text style={styles.statValue}>{item.value}</Text>
      <Text style={styles.statLabel}>{item.label}</Text>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcomeText}>¡Bienvenido!</Text>
        <Text style={styles.subtitle}>Tu progreso de hoy</Text>
      </View>

      <View style={styles.statsSection}>
        <Text style={styles.sectionTitle}>Estadísticas</Text>
        <FlatList
          data={statsData}
          renderItem={renderStatItem}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.statsList}
        />
      </View>

      <View style={styles.actionsContainer}>
        <Text style={styles.sectionTitle}>Acciones Rápidas</Text>
        <View style={styles.buttonContainer}>
          <Button 
            title="Iniciar Entrenamiento" 
            onPress={() => navigation.navigate('Workout')}
            variant="primary"
          />
          <Button 
            title="Seguimiento del Progreso" 
            onPress={() => navigation.navigate('Progress')}
            variant="secondary"
          />
          <Button 
            title="Rutinas Personalizadas" 
            onPress={() => navigation.navigate('CustomRoutines')}
            variant="secondary"
          />
        </View>
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
  welcomeText: {
    ...theme.typography.h1,
    color: '#FFFFFF',
    marginBottom: theme.spacing.xs,
  },
  subtitle: {
    ...theme.typography.body,
    color: '#FFFFFF',
    opacity: 0.8,
  },
  statsSection: {
    paddingVertical: theme.spacing.md,
  },
  statsList: {
    paddingHorizontal: theme.spacing.md,
  },
  statCard: {
    backgroundColor: theme.colors.card,
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.md,
    marginRight: theme.spacing.md,
    width: 120,
    alignItems: 'center',
  },
  statIcon: {
    fontSize: 28,
    marginBottom: theme.spacing.sm,
  },
  statValue: {
    ...theme.typography.h2,
    color: theme.colors.text,
    fontWeight: 'bold',
  },
  statLabel: {
    ...theme.typography.caption,
    color: theme.colors.textSecondary,
    marginTop: theme.spacing.xs,
  },
  sectionTitle: {
    ...theme.typography.h2,
    marginBottom: theme.spacing.md,
    paddingHorizontal: theme.spacing.md,
  },
  actionsContainer: {
    padding: theme.spacing.md,
  },
  buttonContainer: {
    gap: theme.spacing.md,
  },
});
