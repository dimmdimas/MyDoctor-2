import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {colors, fonts} from '../../../utils';
import {Tombol} from '../../atoms';

const InputChat = ({onChangeText, value, onButtonPress}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Tulis Pesan"
        value={value}
        onChangeText={onChangeText}
      />
      <Tombol
        type="btn-icon-send"
        onPress={onButtonPress}
        disable={value.length < 1}
      />
    </View>
  );
};

export default InputChat;

const styles = StyleSheet.create ({
  container: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white
  },
  input: {
    backgroundColor: colors.disable,
    padding: 14,
    flex: 1,
    marginRight: 10,
    borderRadius: 10,
    fontSize: 14,
    fontFamily: fonts.primary.normal,
    maxHeight: 45,
  },
});
