import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TextInput, Button } from 'react-native';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            codigo:"",
            nip:"",
        };
    }

    render() {


        const btnclick = () =>{ 

            let _this=this;
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                   // Typical action to be performed when the document is ready:
                   console.log(xhttp.responseText);
                   if(xhttp.responseText===0)
                   {
                    //error
                   }else{
                    var resultado=xhttp.responseText;
                    var datos= resultado.split(",");
                    console.log(datos[1]);
                    console.log(datos[2]);
                    _this.props.navigation.navigate("Pantalla2",{nombre:datos[2],codigo:datos[1]});
                   }
                }
            };
            xhttp.open("GET", "http://148.202.152.33/ws_claseaut.php?codigo="+ this.state.codigo+"&nip="+ this.state.nip+"", true);
            xhttp.send();
        }


        return (
            <View>
                <Text style={styles.textoudg}> Login </Text>
                <Image style={styles.logo} source={require("./IMAGENES/logo.png")} />
                <TextInput style={styles.input} placeholder="codigo" 
                onChangeText={codigo => this.setState({codigo})}
                />

                <TextInput style={styles.input} placeholder="Nip"
                 onChangeText={nip  => this.setState({nip})}
                 secureTextEntry={true}
                />

                <View style={styles.btn}>

                    <Button title="Entrar" onPress={btnclick}> </Button>
                </View>

            </View>

        );
    }

}
const styles = StyleSheet.create({

    btn:
    {
        width: 100,
        height: 50,
        marginLeft: 150,


    },
    input: {
        borderWidth: 2,
        fontSize: 30,

    },
    logo: {
        width: 200,
        height: 300,
        resizeModel: "center",
        marginLeft: 100,
    },


    textoudg: {
        fontSize: 30,
        Color: "orange",
        textAlign: "center",
        marginLeft: 150,

    },

});
