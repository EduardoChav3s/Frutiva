import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator
} from 'react-native';

import { buscarPedidos } from '../services/storage';

export default function PedidoScreen() {
  const [pedidos, setPedidos] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    carregarPedidos();
  }, []);

  async function carregarPedidos() {
    const dados = await buscarPedidos();

    setPedidos(dados);
    setCarregando(false);
  }

  if (carregando) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
        <Text>Carregando pedido...</Text>
      </View>
    );
  }

  if (pedidos.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>
          Nenhum pedido encontrado
        </Text>
      </View>
    );
  }

  const pedido = pedidos[pedidos.length - 1];

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>
        Meu Pedido
      </Text>

      <View style={styles.card}>

        <Text style={styles.pedido}>
          Pedido #{pedido.id}
        </Text>

        <Text style={styles.total}>
          Total: R$ {pedido.total.toFixed(2)}
        </Text>

        <Text style={styles.statusTitulo}>
          Status do pedido:
        </Text>

        <Text style={styles.status}>
          {pedido.status}
        </Text>

      </View>

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

  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    elevation: 3,
  },

  pedido: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  total: {
    fontSize: 17,
    marginBottom: 20,
  },

  statusTitulo: {
    fontSize: 16,
    marginBottom: 5,
  },

  status: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});