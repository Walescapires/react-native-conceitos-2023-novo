import React from 'react'
import { Text } from 'react-native'
import { Button, Card } from 'react-native-paper'

const Objeto = () => {

    const carros = [

        { marca: 'VW', modelo: 'Fusca', ano: 1978, cor: 'Preto', foto: 'https://img.olx.com.br/images/31/316301199704256.jpg' },
        { marca: 'GM', modelo: 'Celta', ano: 2003, cor: 'Preto', foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzZqyJsvoAnlILDqDXHJnprsLJ2TN7LxdfZSuh9GtPnDHikWn1KrG5clbdHp2Eow6FBk4&usqp=CAU' },
        { marca: 'Fiat', modelo: 'Pálio', ano: 1995, cor: 'Azul', foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLgB8826qU4MXyuYivIpKA8TpiYaohVN0rWQ&usqp=CAU' },
        { marca: 'VW', modelo: 'Gol', ano: 2010, cor: 'Vermelho', foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs-rDrfEcbg3qyeCeeHD159yeOAWf2h3YeCg&usqp=CAU' },
        { marca: 'Ford', modelo: 'Ka', ano: 2020, cor: 'Prata', foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJKGNaFZUnrerbaJllViR5mY-Yr2ylD18zMQ&usqp=CAU' }
    ]

    const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

    return (

        <>

            {carros.map(item => (
                <>

                    <Card>
                        <Card.Cover source={{ uri: item.foto }} />
                        <Card.Content>
                            <Text variant="Marca">Marca: {item.marca}</Text>
                            <Text variant="Ano">Ano: {item.ano}</Text>
                            <Text variant="Cor">Cor: {item.cor}</Text>
                        </Card.Content>
                        <Card.Actions>
                            <Button>Cancel</Button>
                            <Button>Ok</Button>
                        </Card.Actions>
                    </Card>
                </>

            ))}

        </>
    )
}

export default Objeto