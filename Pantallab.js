import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';

export default class Pantallab extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  
  componentDidMount(){
    let _this=this;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
           // Typical action to be performed when the document is ready:
           var myArr=JSON.parse(this.responseText);
           _this.setState({users:myArr});
        }
    };
    xhttp.open("GET", "https://programaciondeinternet17.000webhostapp.com/consulta.php", true);
    xhttp.send();
  }

  render() {
    const renderUser=({item})=>{
      return(
        <View style={{margin:10,borderWidth:0.5,padding:10}}>
          <Text style={{color:'black',fontSize:16,fontWeight:'bold'}}>
            User{item.id}
          </Text>
          <Text style={{color:'black'}}>Nombre: {item.nombre}</Text>
          <Text style={{color:'black'}}>Codigo: {item.codigo}</Text>
          <Text style={{color:'black'}}>Tarea: {item.tarea}</Text>
        </View>
      );
    };


    return (
      <View>
        <Text style={{fontSize:20}}> Bienvenido: {this.props.route.params.nombre},codigo:{' '}{this.props.route.params.codigo} </Text>
        <FlatList
          data={this.state.users}
          renderItem={renderUser}
          keyExtractor={(item,index)=>index.toString()}
        />
      </View>
    );
  }
}
