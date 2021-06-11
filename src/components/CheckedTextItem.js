import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {Tick} from '../assets';

export default React.memo(({title, isChecked, onCheckBoxClicked}) => {
  return (
    <View style={sty.container}>
      <View style={sty.left}>
        <View style={sty.box}>
          <TouchableOpacity onPress={onCheckBoxClicked}>
            <Tick tint={isChecked ? 'black' : 'transparent'} size={22} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={sty.right}>
        <Text style={sty.itemText}>{title}</Text>
      </View>
    </View>
  );
});

const sty = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    marginTop: 3,
  },
  left: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  right: {
    flex: 7,
    alignItems: 'flex-start',
  },
  box: {
    height: 25,
    width: 25,
    borderWidth: 2,
    borderColor: 'black',
  },
  itemText: {
    color: 'gray',
    alignItems: 'center',
  },
});
