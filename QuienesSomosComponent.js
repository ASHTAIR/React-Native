import React, { Component } from 'react';
import { Text, ScrollView, View } from 'react-native';
import { Card } from 'react-native-elements';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { ACTIVIDADES } from './../comun/actividades';

function Historia() {
    let Hist = null;
    Hist = (
        <Card
            title='Un poco de historia'
        >
            <Text style={{ margin: 10 }}>
                El nacimiento del club de montaña Gaztaroa se remonta a la primavera de 1976 cuando jóvenes aficionados a la montaña y pertenecientes a un club juvenil decidieron crear la sección montañera de dicho club. Fueron unos comienzos duros debido sobre todo a la situación política de entonces. Gracias al esfuerzo económico de sus socios y socias se logró alquilar una bajera. Gaztaroa ya tenía su sede social.                </Text>
            <Text style={{ margin: 10 }}>
                Desde aquí queremos hacer llegar nuestro agradecimiento a todos los montañeros y montañeras que alguna vez habéis pasado por el club aportando vuestro granito de arena.                </Text>
            <Text style={{ margin: 10 }}>
                Gracias!
            </Text>
        </Card>
    );
    return (Hist);
}

class QuienesSomos extends Component {

    constructor(props) {
        super(props);
        this.state = {
            actividades: ACTIVIDADES,
            historia: null,
        };
    }

    render() {
        const renderActividadItem = ({ item, index }) => {
            return (
                <ListItem
                    key={index}
                    title={item.nombre}
                    subtitle={item.descripcion}
                    hideChevron={true}
                    leftAvatar={{ source: require('./imagenes/40Años.png') }}
                />
            );
        }

        const historia = Historia();
        
        return (

            <ScrollView>
                {historia}
                <Card title='Actividades y recursos'>
                    <FlatList
                        data={this.state.actividades}
                        renderItem={renderActividadItem}
                        keyExtractor={item => item.id.toString()}
                    />
                </Card>

            </ScrollView>
        );

    };
}

export default QuienesSomos;