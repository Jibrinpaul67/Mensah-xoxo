import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Link } from 'expo-router';

const contact = () => {
  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Link style={styles.link} href="/">Home</Link>
        <Link style={styles.link} href="/faq">FAQ</Link>
        <Link style={styles.link} href="/project">Projects</Link>
        <Link style={styles.link} href="/work">Work</Link>
        <Link style={styles.link} href="/contact">Contact</Link>
      </View>

      <Text style={styles.title}>Contact Us</Text>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.card}>
          <Text style={styles.label}>Phone Number:</Text>
          <Text style={styles.value}>+234 8103 380 883</Text>

          <Text style={styles.label}>Email Address:</Text>
          <Text style={styles.value}>jibrinpaul56@gmail.com</Text>

          <Text style={styles.label}>GitHub:</Text>
          <Text style={styles.value}>github.com/jibrinpaul67</Text>

          <Text style={styles.label}>Instagram:</Text>
          <Text style={styles.value}>@navigate_ps</Text>

          <Text style={styles.label}>Location:</Text>
          <Text style={styles.value}>Abuja, Nigeria</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default contact;

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
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#222',
    marginTop: 10,
  },
  value: {
    fontSize: 15,
    color: '#444',
    marginBottom: 5,
  },
});
