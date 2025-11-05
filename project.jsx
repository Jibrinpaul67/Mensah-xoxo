import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Link } from 'expo-router';

const project = () => {
  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Link style={styles.link} href="/">Home</Link>
        <Link style={styles.link} href="/faq">FAQ</Link>
        <Link style={styles.link} href="/project">Projects</Link>
        <Link style={styles.link} href="/work">Work</Link>
        <Link style={styles.link} href="/contact">Contact</Link>
      </View>
      <Text style={styles.title}>Available Projects</Text>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.card}>
          <Text style={styles.projectTitle}>Caffinated</Text>
          <Text>Description: A mobile app that connects coffee lovers to nearby cafés and allows online orders.</Text>
          <Text>Technology: React Native, Node.js, Firebase</Text>
          <Text>Link: https://github.com/username/caffinated</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.projectTitle}>Face Attendance System</Text>
          <Text>Description: A facial recognition-based attendance system for schools and offices.</Text>
          <Text>Technology: Python, OpenCV, Flask</Text>
          <Text>Link: https://github.com/username/face-attendance</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.projectTitle}>Lost & Found App</Text>
          <Text>Description: A platform to report and recover lost items using geolocation and user verification.</Text>
          <Text>Technology: React Native, Laravel, MySQL</Text>
          <Text>Link: https://github.com/username/lostfound</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.projectTitle}>Portfolio Website</Text>
          <Text>Description: A personal portfolio showcasing my projects, experience, and contact details.</Text>
          <Text>Technology: React, Tailwind CSS</Text>
          <Text>Link: https://jibrinportfolio.com</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default project;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    paddingTop: 50,
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#031138',
    paddingVertical: 10,
  },
  link: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#031138',
    textAlign: 'center',
    marginVertical: 20,
  },
  scrollContainer: {
    alignItems: 'center',
    paddingBottom: 20,
  },
  card: {
    width: '90%',
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  projectTitle: {
    fontWeight: 'bold',
    fontSize: 17,
    color: '#222',
    marginBottom: 4,
  },
});
