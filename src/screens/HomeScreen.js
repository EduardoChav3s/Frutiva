import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Alert
} from 'react-native';

import FrutaCard from '../components/FrutaCard';
import { buscarCarrinho, salvarCarrinho } from '../services/storage';

const FRUTAS = [
  {
    id: '1',
    nome: 'Maçã Fuji',
    preco: 4.50,
    imagem: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400'
  },
  {
    id: '2',
    nome: 'Banana Prata',
    preco: 6.00,
    imagem: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400'
  },
  {
    id: '3',
    nome: 'Morango Orgânico',
    preco: 12.90,
    imagem: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=400'
  },
  {
    id: '4',
    nome: 'Laranja Pera',
    preco: 5.20,
    imagem: 'https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?w=400'
  },
  {
    id: '5',
    nome: 'Abacaxi Pérola',
    preco: 8.90,
    imagem: 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?w=400'
  },
  {
    id: '6',
    nome: 'Uva Niágara',
    preco: 9.50,
    imagem: 'https://images.unsplash.com/photo-1537640538966-79f369143f8f?w=400'
  }
];

export default function HomeScreen({ navigation }) {
  const [qtdCarrinho, setQtdCarrinho] = useState(0);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      atualizarQtdCarrinho();
    });

    atualizarQtdCarrinho();

    return unsubscribe;
  }, [navigation]);

  async function atualizarQtdCarrinho() {
    const carrinho = await buscarCarrinho();
    setQtdCarrinho(carrinho.length);
  }

  async function adicionarAoCarrinho(fruta) {
    const carrinhoAtual = await buscarCarrinho();
    
    // Gera ID único para o item no carrinho para permitir remover itens individuais
    const itemComIdUnico = {
      ...fruta,
      id: `${fruta.id}-${Date.now()}`
    };

    const novoCarrinho = [...carrinhoAtual, itemComIdUnico];
    await salvarCarrinho(novoCarrinho);
    setQtdCarrinho(novoCarrinho.length);
    Alert.alert('Sucesso', `${fruta.nome} foi adicionado ao carrinho!`);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.subtitulo}>Frutas Frescas & Orgânicas</Text>
        
        <TouchableOpacity
          style={styles.botaoCarrinho}
          onPress={() => navigation.navigate('Carrinho')}
        >
          <Text style={styles.textoBotaoCarrinho}>
            🛒 Carrinho ({qtdCarrinho})
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={FRUTAS}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <FrutaCard
            fruta={item}
            onAdicionar={adicionarAoCarrinho}
          />
        )}
        contentContainerStyle={styles.lista}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 15,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  subtitulo: {
    fontSize: 16,
    fontWeight: '600',
    color: '#555',
  },
  botaoCarrinho: {
    backgroundColor: '#4CAF50',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  textoBotaoCarrinho: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  lista: {
    paddingBottom: 20,
  },
});