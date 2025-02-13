import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "expo-router";
import {Button, Text, View} from "react-native";


export default function HomeScreen(){
    const router = useRouter();
    const {user, logout} = useAuth();

    return (
        <View>
            <Text> Bienvenido, {user?.email || 'Desconocido'}</Text>
            <Button title="Cerrar Sesion" onPress={()=> {logout(); router.replace('/login') }}/>
            <Button title = "Ir al perfil " onPress={()=>{router.push('/tabs/profile')}}/>
            <Button title="Ir al inventario " onPress={()=>{router.push('/inventario')}}/>
        </View>
    )
}