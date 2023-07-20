import { useToast } from "@chakra-ui/react";
import { createContext, useState } from "react";

export  const AuthContext=createContext()

function AuthContextProvider({children}){

    const[isLoggedIn,setIsLoggedIn]=useState(false)
    const[username,setUserName]=useState("")
    const toast=useToast()
    const logIn=()=>{
        setIsLoggedIn(true)
    }

    const logOut=()=>{
        setIsLoggedIn(false)
       
            toast({
              title: "LogOut successful",
              status: "success",
              duration: 3000,
              isClosable: true,
            });
    }
  
    return (
        <>
        <AuthContext.Provider value={{isLoggedIn,logIn,logOut,username,setUserName}} >
          {children}

        </AuthContext.Provider>
        
        
        </>
    )
}
export {AuthContextProvider}