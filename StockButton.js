import React, {Component} from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';

export default class StockButton extends Component {
    render() {
        return(
              <TouchableOpacity style = {styles.stockButton}
                  onPress = {() => {
                    this.props.onPress(this.props.code,this.props.name)
                    }
              }>
                  <Text style={styles.textButton}>{this.props.name}</Text>
              </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
  stockButton:{
      borderWidth:2,
      borderRadius:15,
      backgroundColor: '#D3D3D3',
      width:90,
      height:50,
      justifyContent: 'center',
      alignItems:'center',
      margin:10
  }
});
