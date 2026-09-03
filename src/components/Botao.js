import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function Botao({ titulo, onPress }) {
  return (
    <TouchableOpacity
      style={styles.botao}
      onPress={onPress}
    >
      <Text style={styles.texto}>
        {titulo}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  botao: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },

  texto: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});