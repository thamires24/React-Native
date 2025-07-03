import { StatusBar } from 'expo-status-bar';
import { useEffect, useRef } from 'react';
import { Animated, SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const larAnimada = useRef(new Animated.Value(150)).current;
  const altAnimada = useRef(new Animated.Value(150)).current;

  //Animated.sequence executa de forma sequencial
  //Animated.parallel executa tudo junto
  //Animated.loop deixa a animação em looping

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(altAnimada, {
          toValue: 300,
          duration: 3000,
          useNativeDriver: false,
        }),
        Animated.timing(larAnimada, {
          toValue: 300,
          duration: 3000,
          useNativeDriver: false,
        }),
      ])
    ).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        style={{ width: larAnimada, height: altAnimada, backgroundColor: "#416901", justifyContent: "center", borderRadius: 50, }}>
        <Text style={{ textAlign: "center", fontSize: 22 }}>Carregando......</Text>
        <StatusBar style="auto" />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
