import CustomInput from "@/components/CustomInput";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {Button, Text, TextInput, TouchableOpacity, View, StyleSheet } from "react-native";

export default function HomeScreen(){
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

    return(
        <View style={styles.container}>
           <View style={styles.content}>
            <CustomInput
            label="Correo Electronico"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            validationRule={(text) => text.includes('@')}
            errorMessage="Correo invalido"
            />

            <CustomInput
            label="Contraseña"
            value={password}
            onChangeText={setPassword}
            keyboardType="default"
            //validationRule={(text) => text.includes('@')}
            errorMessage="Contraseña invalido"
            secureTextEntry={true}
            />
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#4C6EF5',
    },
    content:{
        backgroundColor: '#fff',
    },
    header:{
        backgroundColor: '364FC7',
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerIcon:{
        margin: 10
    },
    headerText:{
        color: '#fff',
        fontSize: 18,
    }
});