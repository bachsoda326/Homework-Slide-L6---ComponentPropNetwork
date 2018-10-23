import React,{Component} from 'react';
import {View, Text, StyleSheet, style} from 'react-native';
import api from './api';
import StockButton from './StockButton';

export default class Stock extends Component{
    constructor(props){
        super(props);
        this.state = {price : null, change : null, changePercent : null, nameStock : null, codeStock: null}
        this.changeIndex('FB', 'FACEBOOK');
    }
    changeIndex(codeStock,nameStock){
        api(codeStock).then((data)=>{
            this.setState({...data,nameStock});
        });
    }
    render(){
        let styleColorChangeStock = styles.stockUp;
        if(this.state.change!=null){
            if (this.state.change[0] == '-') styleColorChangeStock = styles.stockDown;
        }
        return(
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.nameStock}>{this.state.nameStock}</Text>
                    <Text style={styles.valueIndex}>{this.state.price}</Text>
                    <Text style={[styles.valueChanged, styleColorChangeStock]}>{this.state.change} ({this.state.changePercent}) </Text>
                </View>
                <View style={styles.body}>
                    <View style={styles.groupButton}>
                        <StockButton name = 'APPLE' code = 'AAPL' onPress = {this.changeIndex.bind(this) }/>
                        <StockButton name = 'GOOGLE' code= 'GOOG' onPress = {this.changeIndex.bind(this) }/>
                        <StockButton name = 'Microsoft' code = 'MSFT' onPress = {this.changeIndex.bind(this)}/>
                        <StockButton name = 'Facebook' code = 'FB' onPress = {this.changeIndex.bind(this)}/>
                        <StockButton name = 'Alibaba' code = 'BABA' onPress = {this.changeIndex.bind(this)}/>
                        <StockButton name = 'Sony' code = 'SNE' onPress = {this.changeIndex.bind(this)}/>
                        <StockButton code = '1810.HKG' name =  'Xiaomi' onPress = {this.changeIndex.bind(this)}/>
                        <StockButton code = 'MU' name = 'Micron' onPress = {this.changeIndex.bind(this)}/>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container:{
      flex:1
  },
  header:{
      backgroundColor: '#FFFF00',
      flex:1,
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center'
  },
  body :{
      flex:1,
      backgroundColor: '#FF99FF'
  },
  groupButton:{
      margin:10,
      flexDirection: 'row',
      flexWrap:'wrap'
  },
  nameStock:{
      fontSize:25
  },
  valueIndex:{
      fontSize:60
  },
  valueChanged:{
      fontSize:30
  },
  textButton:{
      fontSize:18
  },
  stockUp:{
      color: '#32CD32'
  },
  stockDown:{
      color: '#FF0000'
  }
});
