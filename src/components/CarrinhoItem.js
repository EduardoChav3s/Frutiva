import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function CarrinhoItem({ fruta, onRemover }) {
  return (
    <View style={styles.item}>

      <View>
        <Text style={styles.nome}>
          {fruta.nome}
        </Text>

        <Text style={styles.preco}>
          R$ {fruta.preco.toFixed(2)}
        </Text>
      </View>

      <TouchableOpacity
        onPress={() => onRemover(fruta.id)}
      >
        <Text style={styles.remover}>
          Remover
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  nome: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  preco: {
    fontSize: 16,
    marginTop: 5,
  },

  remover: {
    color: 'red',
    fontWeight: 'bold',
  },
});