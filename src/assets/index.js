import React from 'react';
import {Image, StyleSheet} from 'react-native';

export const Tick = ({tint, size}) => {
  const styles = sty(size);
  return (
    <Image
      source={require('../assets/tick1.png')}
      tintColor={tint}
      resizeMode={'contain'}
      style={styles.tick}
    />
  );
};

export const BackArrow = () => {
  const styles = sty();
  return (
    <Image
      source={require('../assets/back.png')}
      tintColor={'white'}
      resizeMode={'center'}
      style={styles.back}
    />
  );
};

const sty = (size = 10) =>
  StyleSheet.create({
    tick: {
      height: size,
      width: size,
    },
    back: {
      height: 15,
      width: 15,
    },
  });
