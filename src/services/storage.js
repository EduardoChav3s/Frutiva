import AsyncStorage from '@react-native-async-storage/async-storage';

const CARRINHO_KEY = '@frutiva_carrinho';
const USUARIO_KEY = '@frutiva_usuario';
const PEDIDOS_KEY = '@frutiva_pedidos';

// SALVAR CARRINHO
export async function salvarCarrinho(carrinho) {
  try {
    await AsyncStorage.setItem(
      CARRINHO_KEY,
      JSON.stringify(carrinho)
    );
  } catch (error) {
    console.log('Erro ao salvar carrinho:', error);
  }
}

// BUSCAR CARRINHO
export async function buscarCarrinho() {
  try {
    const dados = await AsyncStorage.getItem(CARRINHO_KEY);

    return dados ? JSON.parse(dados) : [];
  } catch (error) {
    console.log('Erro ao buscar carrinho:', error);
    return [];
  }
}

// SALVAR USUÁRIO
export async function salvarUsuario(usuario) {
  try {
    await AsyncStorage.setItem(
      USUARIO_KEY,
      JSON.stringify(usuario)
    );
  } catch (error) {
    console.log('Erro ao salvar usuário:', error);
  }
}

// BUSCAR USUÁRIO
export async function buscarUsuario() {
  try {
    const dados = await AsyncStorage.getItem(USUARIO_KEY);

    return dados ? JSON.parse(dados) : null;
  } catch (error) {
    console.log('Erro ao buscar usuário:', error);
    return null;
  }
}

// SALVAR PEDIDOS
export async function salvarPedidos(pedidos) {
  try {
    await AsyncStorage.setItem(
      PEDIDOS_KEY,
      JSON.stringify(pedidos)
    );
  } catch (error) {
    console.log('Erro ao salvar pedidos:', error);
  }
}

// BUSCAR PEDIDOS
export async function buscarPedidos() {
  try {
    const dados = await AsyncStorage.getItem(PEDIDOS_KEY);

    return dados ? JSON.parse(dados) : [];
  } catch (error) {
    console.log('Erro ao buscar pedidos:', error);
    return [];
  }