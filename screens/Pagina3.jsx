import React from 'react'
import { Avatar, Button, Card } from 'react-native-paper'

const Pagina3 = () => {

    const LeftContent = props => <Avatar.Icon {...props} icon="account-heart-outline" />

    return (
        <>

        
            <Card style={{ marginBottom: 20 }}>
                <Card.Title title="Walesca Pires" subtitle="Card Subtitle" left={LeftContent} />
            </Card>
            <Card style={{ marginBottom: 20 }}>
                <Card.Title title="Maria Jose" subtitle="Card Subtitle" left={LeftContent} />
            </Card>
            <Card style={{ marginBottom: 20 }}>
                <Card.Title title="Paulo Eduardo" subtitle="Card Subtitle" left={LeftContent} />
            </Card>
            <Card style={{ marginBottom: 20 }}>
                <Card.Title title="José Silva" subtitle="Card Subtitle" left={LeftContent} />
            </Card>

        </>
    )
}

export default Pagina3