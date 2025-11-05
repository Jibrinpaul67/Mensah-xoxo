import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Link } from 'expo-router';

const work = () => {
  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Link style={styles.link} href="/">Home</Link>
        <Link style={styles.link} href="/faq">FAQ</Link>
        <Link style={styles.link} href="/project">Projects</Link>
        <Link style={styles.link} href="/work">Work</Link>
        <Link style={styles.link} href="/contact">Contact</Link>
      </View>
      <Text style={styles.title}>Work Experience</Text>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.card}>
          <Text style={styles.company}>Bytework Solutions Limited</Text>
          <Text>Job Role: Backend Developer</Text>
          <Text>Duration: 16.04.2021 - 30.05.2022</Text>
          <Text>Description: Developed and maintained backend APIs for business applications.</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.company}>Algolog Solutions</Text>
          <Text>Job Role: Fullstack Developer</Text>
          <Text>Duration: 16.04.2022 - 30.05.2023</Text>
          <Text>Description: Built and deployed fullstack web applications using React and Laravel.</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.company}>Spaece Workload</Text>
          <Text>Job Role: Neuroscience Engineer (Intern)</Text>
          <Text>Duration: 16.04.2023 - 30.05.2024</Text>
          <Text>Description: Assisted in research and development of brain-signal analysis tools.</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.company}>Appens Consultancy</Text>
          <Text>Job Role: Neuroscience Engineer (Junior)</Text>
          <Text>Duration: 16.04.2024 - Present</Text>
          <Text>Description: Working on AI-driven neurofeedback systems for clinical applications.</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default work;

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
  company: {
    fontWeight: 'bold',
    fontSize: 17,
    color: '#222',
    marginBottom: 4,
  },
});
