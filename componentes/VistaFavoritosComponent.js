import React, { Component } from 'react';
import { FlatList, Alert, TouchableHighlight } from 'react-native';
import { ListItem } from 'react-native-elements';
import Swipeout from 'react-native-swipeout';
import { baseUrl } from '../comun/comun';
import { connect } from 'react-redux';
import { IndicadorActividad } from './IndicadorActividadComponent';
import { borrarFavorito } from '../redux/ActionCreators';

const mapStateToProps = state => {
    return {
        excursiones: state.excursiones,
        favoritos: state.favoritos,
    }
}

const mapDispatchToProps = dispatch => ({
    borrarFavorito: (excursionId) => dispatch(borrarFavorito(excursionId)),
})

class VistaFavoritos extends Component {

    borrarFavorito(excursionId) {
        this.props.borrarFavorito(excursionId);
    }

    render() {
        const { navigate } = this.props.navigation;

        const renderFavoritoItem = ({ item, index }) => {

            const Alerta = () => {
                Alert.alert(
                    "¿Borrar excursión favorita?",
                    "Confirme que desea borrar la excursión: " + item.nombre,
                    [
                        {
                            text: "Cancelar",
                            onPress: () => console.log(item.nombre + " Favorito no borrado"),
                            style: "cancel"
                        },
                        { text: "OK", onPress: () => this.borrarFavorito(item.id) }
                    ],
                    { cancelable: false }
                );
            }

            const rightButton = [
                {
                    text: 'Borrar',
                    type: 'delete',
                    onPress: () => Alerta(item.id)
                }
            ];

            return (
                <Swipeout right={rightButton} autoClose={true}>
                    <TouchableHighlight onLongPress={Alerta} onPress={() => navigate('DetalleExcursion', { excursionId: item.id })}>
                        <ListItem
                            key={index}
                            title={item.nombre}
                            subtitle={item.descripcion}
                            hideChevron={true}
                            leftAvatar={{ source: { uri: baseUrl + item.imagen } }}
                        />
                    </TouchableHighlight>
                </Swipeout>
            );
        }

        if (this.props.excursiones.isLoading) {
            return (
                <IndicadorActividad />
            );
        }

        else if (this.props.excursiones.errMess) {
            return (
                <View>
                    <Text>{this.props.excursiones.errMess}</Text>
                </View>
            );
        }
        else {
            return (
                <FlatList
                    data={this.props.excursiones.excursiones.filter((excursion) => this.props.favoritos.includes(excursion.id))}
                    renderItem={renderFavoritoItem}
                    keyExtractor={item => item.id.toString()}
                />
            );
        }

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(VistaFavoritos);