import { StatusBar } from 'expo-status-bar';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import Card from './components/Card';
import { Botoes } from './components/Botoes';


export default function App() {


  return (
    <ScrollView style={{ margin: 10 }}>

      <Botoes />

      <Card titulo="Sem conteúdo" />
      <Card titulo="Mobile">
        <Text>React native</Text>
      </Card>

      <Card titulo="Pincipal" nome="Walesca">
        <Text>Parágrafo 1</Text>
        <Text>Parágrafo 2</Text>
        <Text>Parágrafo 3</Text>
        <Button title="Detalhes" />
      </Card>

      <Card titulo="Flamengo Cheirinho"></Card>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    borderColor: 'red',
    borderStyle: 'solid',
    borderWidth: 2,
    marginBottom: 20
  },
  titulo: {
    color: 'white',
    fontSize: 30,
    padding: 10,
    marginBottom: 20,
    borderBottomColor: 'red',
    borderBottomStyle: 'solid',
    borderBottomWidth: 2,
    textAlign: 'center',
    backgroundColor: 'red',
  },
  paragrafo: {
    fontSize: 20
  }
});
