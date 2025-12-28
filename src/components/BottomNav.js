import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { COLORS } from '../theme/colors';

function Item({ icon, label, active }) {
  return (
    <View style={[styles.item, active && styles.active]}>
      <Image
        source={icon}
        style={[
          styles.icon,
          { tintColor: active ? 'white' : 'black' },
        ]}
      />
      <Text style={[styles.label, { color: active ? 'white' : 'black' }]}>
        {label}
      </Text>
    </View>
  );
}

export default function BottomNav() {
  return (
    <View style={styles.nav}>
      <Item icon={require('../../assets/images/Home.png')} label="Home" />
      <Item icon={require('../../assets/images/Deposit.png')} label="Deposit" />
      <Item icon={require('../../assets/images/Loan.png')} label="Loans" active />
      <Item icon={require('../../assets/images/Payments.png')} label="Payment" />
      <Item icon={require('../../assets/images/Help.png')} label="Help" />
    </View>
  );
}

const styles = StyleSheet.create({
  nav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,

    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 14,

    backgroundColor: 'white',
    borderTopWidth: 1,
    borderColor: '#eee',
  },
  item: {
    alignItems: 'center',
    padding: 8,
    borderRadius: 10,
  },
  active: {
    backgroundColor: COLORS.primaryPurple,
    paddingHorizontal: 18,
  },
  icon: {
    width: 24,
    height: 24,
    marginBottom: 4,
  },
  label: {
    fontSize: 10,
  },
});
