import { AuthProvider } from "@/contexts/AuthContext";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { Stack } from "expo-router";


export default function RootLayout(){
    return(
        <AuthProvider>
            <ThemeProvider>
            <Stack/>
            </ThemeProvider>
            
        </AuthProvider>
    )
}