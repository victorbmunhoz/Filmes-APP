import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';

export default class Filmes extends Component{
    render(){
        const {nome, foto} = this.props.data;
        return(
            <View>
               <View style={styles.card}>
                    <Text style={styles.titulo}>{nome}</Text>
                    <Image 
                    source={{uri: foto}}
                    style={styles.capa}
                    />

                    <View style={styles.areaBtn}>
                        <TouchableOpacity style={styles.btn} onPress={ () => alert(nome)}>
                            <Text style={styles.textoBtn}>LEIA MAIS!</Text>
                        </TouchableOpacity>
                    </View>
               </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    card: {
       shadowColor: '#000',
       backgroundColor: '#FFF', 
       shadowOffset: {width: 0, height: 1},
       shadowOpacity: 0.8,
       margin: 15, 
       shadowRadius: 5, 
       borderRadius: 5, 
       elevation: 3
    },  
    titulo: {
        fontSize: 18, 
        padding: 15
    },
    capa: {
        height: 250,
        zIndex: 2
    },
    areaBtn: {
        alignItems: 'flex-end',
        marginTop: -40,
        zIndex: 9
    },
    btn: {
        width: 100, 
        backgroundColor: '#09a6ff', 
        opacity: 1, 
        padding: 8, 
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5
    }, 
    textoBtn: {
        textAlign: 'center',
        color: '#FFF'
    }
})