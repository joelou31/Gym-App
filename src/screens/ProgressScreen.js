import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { theme } from '../styles/theme';

export const ProgressScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Seguimiento del Progreso</Text>
        <Text style={styles.subtitle}>Tu evolución en el tiempo</Text>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statBox}>
          <Text style={styles.statValue}>75 kg</Text>
          <Text style={styles.statLabel}>Peso Actual</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statValue}>-2 kg</Text>
          <Text style={styles.statLabel}>Cambio</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statValue}>15%</Text>
          <Text style={styles.statLabel}>Grasa</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Historial de Entrenamientos</Text>
        <View style={styles.historyItem}>
          <Text style={styles.historyDate}>Hoy</Text>
          <Text style={styles.historyText}>Entrenamiento de fuerza - 45 min</Text>
        </View>
        <View style={styles.historyItem}>
          <Text style={styles.historyDate}>Ayer</Text>
          <Text style={styles.historyText}>Cardio - 30 min</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Objetivos</Text>
        <View style={styles.goalItem}>
          <Text style={styles.goalTitle}>Peso Objetivo</Text>
          <Text style={styles.goalValue}>70 kg</Text>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: '75%' }]} />
          </View>
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
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: theme.spacing.md,
    backgroundColor: theme.colors.card,
    margin: theme.spacing.md,
    borderRadius: theme.borderRadius.md,
  },
  statBox: {
    alignItems: 'center',
  },
  statValue: {
    ...theme.typography.h2,
    color: theme.colors.primary,
  },
  statLabel: {
    ...theme.typography.caption,
    color: theme.colors.textSecondary,
  },
  section: {
    padding: theme.spacing.md,
  },
  sectionTitle: {
    ...theme.typography.h2,
    marginBottom: theme.spacing.md,
  },
  historyItem: {
    backgroundColor: theme.colors.card,
    padding: theme.spacing.md,
    borderRadius: theme.borderRadius.md,
    marginBottom: theme.spacing.sm,
  },
  historyDate: {
    ...theme.typography.caption,
    color: theme.colors.primary,
    marginBottom: theme.spacing.xs,
  },
  historyText: {
    ...theme.typography.body,
    color: theme.colors.text,
  },
  goalItem: {
    backgroundColor: theme.colors.card,
    padding: theme.spacing.md,
    borderRadius: theme.borderRadius.md,
  },
  goalTitle: {
    ...theme.typography.body,
    color: theme.colors.text,
    marginBottom: theme.spacing.xs,
  },
  goalValue: {
    ...theme.typography.h2,
    color: theme.colors.primary,
    marginBottom: theme.spacing.sm,
  },
  progressBar: {
    height: 8,
    backgroundColor: theme.colors.card,
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: theme.colors.primary,
  },
}); 