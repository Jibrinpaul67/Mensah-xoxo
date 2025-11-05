import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Link } from 'expo-router';

const faq = () => {
  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Link style={styles.link} href="/">Home</Link>
        <Link style={styles.link} href="/faq">FAQ</Link>
        <Link style={styles.link} href="/project">Projects</Link>
        <Link style={styles.link} href="/work">Work</Link>
        <Link style={styles.link} href="/contact">Contact</Link>
      </View>

      <Text style={styles.title}>Frequently Asked Questions</Text>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.card}>
          <Text style={styles.question}>How old are you?</Text>
          <Text style={styles.answer}>I am 18 years old.</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.question}>What is your area of speciality?</Text>
          <Text style={styles.answer}>Neural networking in robotics.</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.question}>What company are you affiliated with?</Text>
          <Text style={styles.answer}>Algolog Solutions.</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.question}>What programming languages do you use?</Text>
          <Text style={styles.answer}>I mainly use Java, Python, react native, flutter and typescript.</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.question}>Are you open to collaboration?</Text>
          <Text style={styles.answer}>Yes! I’m open to collaborating on AI and robotics projects. And web and mobile dev if the pay is good enough.</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default faq;

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
  question: {
    fontWeight: 'bold',
    fontSize: 17,
    color: '#222',
    marginBottom: 4,
  },
  answer: {
    fontSize: 15,
    color: '#444',
  },
});
