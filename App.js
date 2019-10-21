import React from 'react';
import {View, Button} from 'react-native';
import Share from 'react-native-share';
import { image } from './mock.json'; // image in base64

export default () => (
  <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    <Button title="Share" onPress={() => Share.open({filename: 'meuarquivo', url: image})} />
  </View>
);
