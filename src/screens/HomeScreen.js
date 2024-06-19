import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import JobCard from '../components/JobCard';

const jobs = [
  { title: 'Software Engineer', company: 'Company A', location: 'New York, NY' },
  { title: 'Product Manager', company: 'Company B', location: 'San Francisco, CA' },
  // Add more job objects here
];

const HomeScreen = ({ route }) => {
  const { name, email } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Welcome, {name}</Text>
      <Text style={styles.subtitle}>Email: {email}</Text>
      <View>
        <Text style={styles.sectionTitle}>Popular Jobs</Text>
        {jobs.map((job, index) => (
          <JobCard key={index} job={job} />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    marginVertical: 10,
  },
});

export default HomeScreen;
