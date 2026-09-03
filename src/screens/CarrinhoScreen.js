import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

import {
  buscarCarrinho,
  salvarCarrinho,
  buscarPedidos,
  salvarPedidos
} from '../services/storage';

export default function CarrinhoScreen({ navigation }) {

  const [carrinho, setCarrinho] = useState([]);

  useEffect(() => {
    carregarCarrinho();
  }, []);

  async function carregarCarrinho() {
    const dados = await buscarCarrinho();
    setCarrinho(dados);
  }

  function calcularTotal() {
    return carrinho.reduce(
      (total, fruta) => total + fruta.preco,
      0
    );
  }

  async function removerFruta(id) {
    const novoCarrinho = carrinho.filter(
      fruta => fruta.id !== id
    );

    setCarrinho(novoCarrinho);
    await salvarCarrinho(novoCarrinho);
  }

  async function finalizarPedido() {

    if (carrinho.length === 0) {
      return;
    }

    const pedidos = await buscarPedidos();

    const novoPedido = {
      id: pedidos.length + 1,
      produtos: carrinho,
      total: calcularTotal(),
      status: 'Em preparação'
    };

    pedidos.push(novoPedido);

    await salvarPedidos(pedidos);

    // Limpa o carrinho
    await salvarCarrinho([]);
    setCarrinho([]);

    // Vai para a tela do pedido
    navigation.navigate('Pedido');
  }

  function renderItem({ item }) {
    return (
      <View style={styles.item}>

        <View>
          <Text style={styles.nome}>
            {item.nome}
          </Text>

          <Text>
            R$ {item.preco.toFixed(2)}
          </Text>
        </View>

        <TouchableOpacity
          onPress={() => removerFruta(item.id)}
        >
          <Text style={styles.remover}>
            Remover
          </Text>
        </TouchableOpacity>

      </View>
    );
  }

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>
        Meu Carrinho
      </Text>

      {carrinho.length === 0 ? (

        <Text style={styles.vazio}>
          Seu carrinho está vazio.
        </Text>

      ) : (

        <>
          <FlatList
            data={carrinho}
            keyExtractor={item => item.id.toString()}
            renderItem={renderItem}
          />

          <View style={styles.resumo}>

            <Text style={styles.total}>
              Total: R$ {calcularTotal().toFixed(2)}
            </Text>

            <TouchableOpacity
              style={styles.botao}
              onPress={finalizarPedido}
            >
              <Text style={styles.textoBotao}>
                Finalizar pedido
              </Text>
            </TouchableOpacity>

          </View>
        </>

      )}

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },

  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },

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

  remover: {
    color: 'red',
  },

  vazio: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 30,
  },

  resumo: {
    paddingTop: 15,
  },

  total: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  botao: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },

  textoBotao: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

});