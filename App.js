// SettingsScreen.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import BottomNav from './BottomNav'; // Ajuste o caminho se necessário

const { width } = Dimensions.get('window');

// Tela de Configurações
const App = () => {
  const [activeId, setActiveId] = useState(3); // Defina o ID do botão ativo como 3 (Configurações)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configurações</Text>

      {/* Itens das configurações */}
      <TouchableOpacity style={styles.item}>
        <Text style={styles.itemText}>Perfil</Text>
        <Icon name="chevron-forward" size={20} color="#000" style={styles.chevronIcon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <Text style={styles.itemText}>Idioma</Text>
        <Icon name="chevron-forward" size={20} color="#000" style={styles.chevronIcon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <Text style={styles.itemText}>Acessibilidade</Text>
        <Icon name="chevron-forward" size={20} color="#000" style={styles.chevronIcon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <Text style={styles.itemText}>Notificações</Text>
        <Icon name="chevron-forward" size={20} color="#000" style={styles.chevronIcon} />
      </TouchableOpacity>

      {/* Barra de Navegação Inferior */}
      <BottomNav activeId={activeId} setActiveId={setActiveId} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
    paddingVertical: 20,
    paddingTop: 80,
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    marginVertical: 20,
    textAlign: 'center',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#fff',
    width: '100%',
  },
  itemText: {
    fontSize: 24,
    marginHorizontal: 22,
  },
  chevronIcon: {
    marginRight: 20,
  },
});

export default App;
