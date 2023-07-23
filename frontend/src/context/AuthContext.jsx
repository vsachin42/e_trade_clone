import { useToast } from "@chakra-ui/react";
import { createContext, useState } from "react";

export  const AuthContext=createContext()

function AuthContextProvider({children}){

  //isLoggedIn will determined whether user is login or not

    const[isLoggedIn,setIsLoggedIn]=useState(false)
    const[name,setName]=useState("")

    const toast=useToast()
   
    //when user login sucessfully called the login function
    const logIn=()=>{
        setIsLoggedIn(true)
    }
 
    ////when user logout sucessfully called the logout function
    const logOut=()=>{
     
        setIsLoggedIn(false)
        // localStorage.setItem('isAuth',isLoggedIn)
       
            toast({
              title: "LogOut successful",
              status: "success",
              duration: 5000,
              isClosable: true,
              position:"top-right"
            });
    }
  
    return (
        <>
        <AuthContext.Provider value={{isLoggedIn,logIn,logOut,name,setName}} >
          {children}

        </AuthContext.Provider>
        
        
        </>
    )
}
export {AuthContextProvider}