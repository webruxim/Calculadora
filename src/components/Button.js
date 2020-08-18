import React from 'react';
import { StyleSheet, Text, Dimensions, TouchableOpacity } from 'react-native';

export default (props) => {
  // Criando um array com apenas 1 estino embutido (styles.button)
  const stylesButton = [styles.button];
  // Se for passado uma propriedade double para o botao vai ser adicionado ao
  // array o stilo (styles.double)
  if (props.double) stylesButton.push(styles.buttonDouble);
  if (props.triple) stylesButton.push(styles.buttonTriple);
  if (props.operation) stylesButton.push(styles.operationButton);
  return (
    // passando uma função onClick como props quando o onPress desse botao for clicado
    <TouchableOpacity
      // Na função onClick ja estou passando a propriedade label do botao
      onPress={() => {
        props.onClick(props.label);
      }}
    >
      {/* Passo como props no stylo meu array */}
      <Text style={stylesButton}>{props.label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    fontSize: 30,
    // altura do botão vai ser sua tela (get.window) dividido por 4
    height: Dimensions.get('window').width / 4,
    width: Dimensions.get('window').width / 4,
    textAlignVertical: 'center',
    backgroundColor: '#f0f0f0',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#888',
  },
  operationButton: {
    color: '#fff',
    backgroundColor: '#fa8231',
  },
  buttonDouble: {
    width: (Dimensions.get('window').width / 4) * 2,
  },
  buttonTriple: {
    width: (Dimensions.get('window').width / 4) * 3,
  },
});
