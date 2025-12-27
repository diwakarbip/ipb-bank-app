import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { COLORS } from '../theme/colors';

export default function AppHeader() {
  return (
    <View style={styles.header}>
      <Image
        source={require('../../assets/images/menu_icon.png')}
        style={styles.icon}
      />

      <View style={styles.center}>
        <Image
          source={require('../../assets/images/bank_logo.png')}
          style={styles.logo}
        />
        <Text style={styles.title}>IPB Bank</Text>
      </View>

      <View style={styles.profile}>
        <Text style={styles.profileText}>CR</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon: {
    width: 26,
    height: 26,
    tintColor: 'white',
  },
  center: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 32,
    height: 32,
    marginRight: 8,
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
  },
  profile: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: COLORS.accentGold,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileText: {
    fontWeight: '700',
    color: COLORS.primaryPurple,
  },
});
