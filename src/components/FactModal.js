import React from 'react';
import {View, Text, TouchableOpacity, Modal, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

export default ({isVisible, payload, closeModal}) => {
  return (
    <Modal onRequestClose={() => {}} visible={isVisible} transparent>
      <View style={sty.container}>
        <View style={sty.content}>
          <ScrollView contentContainerStyle={sty.scrolllView}>
            <Text style={sty.jsonText}>{payload}</Text>
          </ScrollView>
          <TouchableOpacity style={sty.duh} onPress={closeModal}>
            <Text>Whatever</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const sty = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: 'transparent',
    flex: 1,
  },
  content: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 10,
    marginVertical: 100,
    marginHorizontal: 40,
    overflow: 'hidden',
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrolllView: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 35,
  },
  jsonText: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  duh: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#c7eb4c',
    width: '100%',
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
