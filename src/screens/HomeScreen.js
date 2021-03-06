import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text style={styles.text}>Hello world!</Text>
      <Button 
        onPress={ () => { navigation.navigate('Components'); }} 
        title="Go to Components Demo" 
      />
      <Button 
        onPress={ () => { navigation.navigate('List'); }} 
        title="Go to List Demo" 
      />
      <Button 
        onPress={ () => { navigation.navigate('Image'); }} 
        title="Go to Image Demo" 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
