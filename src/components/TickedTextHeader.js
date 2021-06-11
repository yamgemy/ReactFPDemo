import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Tick} from '../assets/index';

export default React.memo(({tabIndex, title, isTicked}) => {
  return (
    <View style={sty.container}>
      <View style={sty.left}>
        <View style={sty.bullet}>
          <Text style={sty.bulletIndex}>{tabIndex + 1}</Text>
        </View>
        <Text style={sty.title}>{title}</Text>
      </View>
      <View style={sty.right}>
        <If condition={isTicked}>
          <Tick tint={'white'} size={33} />
        </If>
      </View>
    </View>
  );
});

const sty = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    backgroundColor: 'purple',
    justifyContent: 'center',
    alignItems: 'center',
    height: 35,
  },
  left: {
    flexDirection: 'row',
    flex: 5,

    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: 20,
  },
  right: {flex: 2},
  bullet: {
    borderRadius: 50,
    backgroundColor: 'black',
    height: 30,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bulletIndex: {
    color: 'white',
    fontWeight: 'bold',
  },
  title: {fontWeight: 'bold', marginLeft: 20, fontSize: 23, color: 'white'},
  tick: {
    height: 30,
    width: 30,
  },
});
