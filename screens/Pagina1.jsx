import React from 'react'
import { Button, Text } from 'react-native'
import Card from '../components/Card'


const Pagina1 = ({ navigation }) => {

  return (
    <>

      <Button title='Pagina 2' onPress={() => navigation.navigate('pagina2')} />
      <Button title='Pagina 3' onPress={() => navigation.navigate('pagina3')} />

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


    </>
  )
}

export default Pagina1