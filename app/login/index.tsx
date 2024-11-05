import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import Colors from '@/constants/Colors';

export default function LoginScreen() {
  return (
    <View>
      <Image
        source={require('./../../assets/images/pixifyLanding.jpeg')}
        style={{
          width: '100%',
          height: 550,
        }}
      />
      <View style={styles.loginContainer}>
        <Text style={styles.title}>Welcome to PIXIFY</Text>
        <Text style={styles.subtitle}>
          Create AI magic with your favourite images
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonLabel}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  loginContainer: {
    padding: 25,
    marginTop: -20,
    backgroundColor: 'white',
    height: 600,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    color: Colors.GRAY,
    textAlign: 'center',
    marginTop: 12,
    fontSize: 16,
  },
  button: {
    width: '100%',
    padding: 20,
    backgroundColor: Colors.PRIMARY,
    borderRadius: 40,
    marginTop: 40,
  },
  buttonLabel: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
  },
});
