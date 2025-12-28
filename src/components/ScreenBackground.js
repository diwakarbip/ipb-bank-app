import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const { height } = Dimensions.get('window');
const PURPLE_HEIGHT = height * 0.4;

export default function ScreenBackground({ children }) {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['rgba(139,17,122,1)', 'rgba(72,8,64,0.9)']}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={styles.gradient}
      />
      <View style={styles.divider} />        
      {children}
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white' },
   divider: {
    height: 1,
    top: 100,
    backgroundColor: 'rgba(255,255,255,0.4)',
  },
  gradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: PURPLE_HEIGHT,
  },
});
