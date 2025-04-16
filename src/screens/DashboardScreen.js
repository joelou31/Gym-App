import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { theme } from '../styles/theme';

const menuItems = [
  { id: '1', icon: '🏋️', label: 'Workout', route: 'Workout' },
  { id: '2', icon: '📊', label: 'Progress\nTracking', route: 'Progress' },
  { id: '3', icon: '📋', label: 'Rutinas', route: 'CustomRoutines' },
  { id: '4', icon: '👥', label: 'Community', route: 'Community' },
];

const recommendedWorkouts = [
  {
    id: '1',
    title: 'Squat Ejercicio',
    duration: '12 Minutos',
    calories: '120 Kcal',
    image: require('../assets/exercises/squats.jpg'),
  },
  {
    id: '2',
    title: 'Full Body Stretching',
    duration: '15 Minutes',
    calories: '90 Kcal',
    image: require('../assets/exercises/stretch.jpg'),
  },
];

export const DashboardScreen = ({ navigation }) => {
  const renderMenuItem = (item) => (
    <TouchableOpacity 
      key={item.id}
      style={styles.menuItem}
      onPress={() => navigation.navigate(item.route)}
    >
      <Text style={styles.menuIcon}>{item.icon}</Text>
      <Text style={styles.menuLabel}>{item.label}</Text>
    </TouchableOpacity>
  );

  const renderWorkoutCard = (item) => (
    <TouchableOpacity 
      key={item.id}
      style={styles.workoutCard}
      onPress={() => navigation.navigate('WorkoutDetail', { workout: item })}
    >
      <View style={styles.workoutImagePlaceholder}>
      <Image source={item.image} style={styles.recommendationImage} />

      </View>
      <View style={styles.workoutInfo}>
        <Text style={styles.workoutTitle}>{item.title}</Text>
        <View style={styles.workoutStats}>
          <Text style={styles.workoutDuration}>⏱️ {item.duration}</Text>
          <Text style={styles.workoutCalories}>🔥 {item.calories}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>¡Bienvenido!</Text>
          <Text style={styles.subtitle}>It's Time To Challenge Your Limits.</Text>
        </View>
        <View style={styles.headerIcons}>
          <TouchableOpacity style={styles.iconButton}>
            <Text>🔍</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Text>🔔</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Text>👤</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.menuGrid}>
        {menuItems.map(renderMenuItem)}
      </View>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Recommendations</Text>
          <TouchableOpacity>
            <Text style={styles.seeAll}>See All</Text>
          </TouchableOpacity>
        </View>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          style={styles.workoutList}
        >
          {recommendedWorkouts.map(renderWorkoutCard)}
        </ScrollView>
      </View>

      <View style={styles.challengeSection}>
        <ImageBackground 
          source={require('../assets/challenges/plank2.jpg')}
          style={styles.challengeCard}
          imageStyle={styles.challengeImage}
        >
          <Text style={styles.challengeTitle}>Weekly Challenge</Text>
          <Text style={styles.challengeSubtitle}>Plank With Hip Twist</Text>
          <TouchableOpacity 
            style={styles.startButton}
            onPress={() => navigation.navigate('WorkoutDetail', { 
              workout: {
                title: 'Plank With Hip Twist Challenge',
                type: 'weekly'
              }
            })}
          >
            <Text style={styles.startButtonText}>Start Now</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Articles & Tips</Text>
        </View>
        <View style={styles.articlesGrid}>
          <TouchableOpacity style={styles.articleCard}>
            <Text style={styles.articleTitle}>Supplement Guide...</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.articleCard}>
            <Text style={styles.articleTitle}>15 Quick & Effective Daily Routines...</Text>
          </TouchableOpacity>
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
  recommendationImage: {
    width: '100%',
    height: 150,
    borderTopLeftRadius: theme.borderRadius.lg,
    borderTopRightRadius: theme.borderRadius.lg,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: theme.spacing.lg,
    paddingTop: 50,
  },
  greeting: {
    ...theme.typography.h1,
    color: theme.colors.text,
    marginBottom: theme.spacing.xs,
  },
  subtitle: {
    ...theme.typography.body,
    color: theme.colors.textSecondary,
  },
  headerIcons: {
    flexDirection: 'row',
    gap: theme.spacing.sm,
  },
  iconButton: {
    padding: theme.spacing.xs,
    backgroundColor: theme.colors.card,
    borderRadius: theme.borderRadius.full,
  },
  menuGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: theme.spacing.md,
    gap: theme.spacing.sm,
  },
  menuItem: {
    width: '23%',
    aspectRatio: 1,
    backgroundColor: theme.colors.card,
    borderRadius: theme.borderRadius.md,
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing.sm,
  },
  menuIcon: {
    fontSize: 24,
    marginBottom: theme.spacing.xs,
  },
  menuLabel: {
    ...theme.typography.caption,
    color: theme.colors.text,
    textAlign: 'center',
  },
  section: {
    padding: theme.spacing.md,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing.md,
  },
  sectionTitle: {
    ...theme.typography.h2,
    color: theme.colors.text,
  },
  seeAll: {
    ...theme.typography.body,
    color: theme.colors.primary,
  },
  workoutList: {
    marginHorizontal: -theme.spacing.md,
  },
  workoutCard: {
    width: 280,
    marginHorizontal: theme.spacing.sm,
    backgroundColor: theme.colors.card,
    borderRadius: theme.borderRadius.lg,
    overflow: 'hidden',
  },
  workoutImagePlaceholder: {
    width: '100%',
    height: 150,
    backgroundColor: theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  workoutIcon: {
    fontSize: 48,
  },
  workoutInfo: {
    padding: theme.spacing.md,
  },
  workoutTitle: {
    ...theme.typography.h2,
    color: theme.colors.text,
    marginBottom: theme.spacing.xs,
  },
  workoutStats: {
    flexDirection: 'row',
    gap: theme.spacing.md,
  },
  workoutDuration: {
    ...theme.typography.caption,
    color: theme.colors.textSecondary,
  },
  workoutCalories: {
    ...theme.typography.caption,
    color: theme.colors.textSecondary,
  },
  challengeSection: {
    padding: 16,
    marginVertical: 10,
  },
  challengeCard: {
    height: 200,
    justifyContent: 'flex-end',
    padding: 20,
  },
  challengeImage: {
    borderRadius: 16,
    opacity: 0.8,
  },
  challengeTitle: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  challengeSubtitle: {
    color: '#FFFFFF',
    fontSize: 16,
    marginVertical: 8,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  startButton: {
    backgroundColor: theme.colors.primary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    alignSelf: 'flex-start',
    marginTop: 10,
  },
  startButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  articlesGrid: {
    flexDirection: 'row',
    gap: theme.spacing.md,
  },
  articleCard: {
    flex: 1,
    height: 100,
    backgroundColor: theme.colors.card,
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.md,
    justifyContent: 'flex-end',
  },
  articleTitle: {
    ...theme.typography.caption,
    color: theme.colors.text,
  },
});
