// BottomNav.js
import React from 'react';
import { View, TouchableOpacity, StyleSheet, Dimensions, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const { width } = Dimensions.get('window');

const bottomNavItems = [
  { id: 1, icon: 'home', label: 'Home', defaultColor: '#C1C7D0', activeColor: '#1e88e5' },
  { id: 2, icon: 'add-circle-outline', label: 'Adicionar', defaultColor: '#C1C7D0', activeColor: '#1e88e5' },
  { id: 3, icon: 'settings', label: 'Configurações', defaultColor: '#C1C7D0', activeColor: '#1e88e5' },
];

const BottomNav = ({ activeId, setActiveId }) => {
  return (
    <View style={styles.bottomNav}>
      {bottomNavItems.map(({ id, icon, label, defaultColor, activeColor }) => (
        <TouchableOpacity 
          key={id} 
          style={styles.navItem} 
          onPress={() => setActiveId(id)}
        >
          <Icon 
            name={icon} 
            size={width * 0.07} 
            color={activeId === id ? activeColor : defaultColor} 
          />
          <Text style={styles.navLabel}>{label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: '#e0e0e0',
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  navItem: {
    alignItems: 'center',
    flex: 1
  },
  navLabel: {
    fontSize: width * 0.03,
  },
});

export default BottomNav;
