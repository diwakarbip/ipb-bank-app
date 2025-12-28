import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { COLORS } from '../theme/colors';

export default function LoanTopSection() {
  return (
    <View style={styles.topSection}>
      <View style={styles.badge}>
        <Text style={styles.badgeText}>LOANS & CREDITS</Text>
      </View>

      <View style={styles.row}>
        <TouchableOpacity style={styles.backBtn}>
          <Image
            source={require('../../assets/images/Back_Arrow.png')}
            style={styles.backArrow}
          />
        </TouchableOpacity>

        <View style={styles.pill}>
          <Text style={styles.pillText}>Active Loans/Credits</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  topSection: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },

  badge: {
    backgroundColor: COLORS.accentGold,
    paddingVertical: 10,
    paddingHorizontal: 32,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 20,
  },

  badgeText: {
    fontWeight: '900',
    color: COLORS.primaryPurple,
    fontSize: 18,
    letterSpacing: 0.5,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 18,
  },

  backBtn: {
    marginRight: 12,
  },

  backArrow: {
    width: 40,
    height: 40,
    tintColor: 'white',
  },

  pill: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 25,
    marginLeft: 20,
    marginTop: 1,
  },

  pillText: {
    fontSize: 17,
    fontWeight: '900',
    color: COLORS.primaryPurple,
  },
});
