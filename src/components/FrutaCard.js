import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function FrutaCard({ fruta, onAdicionar }) {
  return (
    <View style={styles.card}>

      <Image
        source={{ uri: fruta.imagem }}
        style={styles.imagem}
      />

      <View style={styles.info}>
        <Text style={styles.nome}>{fruta.nome}</Text>

        <Text style={styles.preco}>
          R$ {fruta.preco.toFixed(2)}
        </Text>

        <TouchableOpacity
          style={styles.botao}
          onPress={() => onAdicionar(fruta)}
        >
          <Text style={styles.textoBotao}>
            Adicionar ao carrinho
          </Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
    elevation: 3,
  },

  imagem: {
    width: '100%',
    height: 150,
    borderRadius: 8,
  },

  info: {
    marginTop: 10,
  },

  nome: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  preco: {
    fontSize: 16,
    marginTop: 5,
  },

  botao: {
    marginTop: 10,
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    backgroundColor: '#4CAF50',
  },

  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
  },
});