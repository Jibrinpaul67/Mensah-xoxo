import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { Link } from 'expo-router';

const home = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/helpme.jpg')} 
        style={styles.headerImage}
      />

      <View style={styles.navbar}>
        <Link style={styles.link} href="/">Home</Link>
        <Link style={styles.link} href="/faq">FAQ</Link>
        <Link style={styles.link} href="/project">Projects</Link>
        <Link style={styles.link} href="/work">Work</Link>
        <Link style={styles.link} href="/contact">Contact</Link>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
     
        <View style={styles.profileCard}>
          <Image
            source={require('../assets/images/jibrin.jpg')}
            style={styles.logo}
          />
          <Text style={styles.title}>Welcome to Jibrin's Profile</Text>
          <Text style={styles.subtitle}>
            Explore the services and projects offered below:
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.heading}>About Jibrin</Text>
          <Text style={styles.text}>
            Jibrin is a passionate software developer with a strong interest in
            artificial intelligence and neuroscience. Skilled in full-stack
            development, mobile app creation, and robotics-focused neural networking.
            She's also a lovely person that deserves an A in this course!! (Abeg)
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.heading}>Services Offered</Text>
          <Text style={styles.text}>• Web & Mobile App Development</Text>
          <Text style={styles.text}>• AI & Neural Network Integration</Text>
          <Text style={styles.text}>• Backend API Development</Text>
          <Text style={styles.text}>• Research & Technical Documentation</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  headerImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
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
  scrollContainer: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  profileCard: {
    alignItems: 'center',
    backgroundColor: 'white',
    width: '90%',
    borderRadius: 10,
    paddingVertical: 20,
    marginVertical: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  logo: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 15,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#031138',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 15,
    color: '#444',
    textAlign: 'center',
    marginTop: 8,
    paddingHorizontal: 20,
  },
  card: {
    width: '90%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#031138',
    marginBottom: 8,
  },
  text: {
    fontSize: 15,
    color: '#444',
    lineHeight: 22,
  },
});
