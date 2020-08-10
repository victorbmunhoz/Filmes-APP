import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, TouchableOpacity, Switch, ActivityIndicator } from 'react-native';

import Slider from '@react-native-community/slider'
import api from './src/services/api'
import Filmes from './src/Filmes'

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
     filmes: [], 
     loading: true
    }

  }

  async componentDidMount(){
    const response = await api.get('r-api/?api=filmes')
    this.setState({
      filmes: response.data, 
      loading: false
    })
  }

  render(){
  
    if(this.state.loading){
      return(
        <View style={{alignItems: "center", justifyContent: "center", flex: 1}}>
          <ActivityIndicator color="#09A6FF" size={80}/>
        </View>
      )
    } else {
      return(
        <View style={styles.container}>

        <FlatList 
        data={this.state.filmes}
        keyExtractor={item => item.id.toString()}
        renderItem={ ({item}) => <Filmes data={item} />}
        />
        
      </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }, 
})