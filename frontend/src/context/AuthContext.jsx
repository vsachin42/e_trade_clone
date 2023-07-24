





import { createContext, useEffect, useState } from "react";
import { useToast } from "@chakra-ui/react";

export const AuthContext = createContext();

function AuthContextProvider({ children }) {
  // isLoggedIn will determine whether the user is logged in or not

  const initialIsLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const [isLoggedIn, setIsLoggedIn] = useState(initialIsLoggedIn);

 
  const [name, setName] = useState(""); // You can set a default value for name here if needed

  const toast = useToast();

  // when the user logs in successfully, call the login function
  const logIn = () => {
    setIsLoggedIn(true);
  };

  // when the user logs out successfully, call the logout function
  const logOut = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("token"); // Remove the token from local storage
    localStorage.removeItem("name"); // Remove the name from local storage

    toast({
      title: "Logout successful",
      status: "success",
      duration: 5000,
      isClosable: true,
      position: "top-right",
    });
  };
  useEffect(() => {
    localStorage.setItem('isLoggedIn', isLoggedIn);
  }, [isLoggedIn]);

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, logIn, logOut, name, setName }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContextProvider };
