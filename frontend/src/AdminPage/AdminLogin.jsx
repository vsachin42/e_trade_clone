import React, { useState } from 'react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Button,
    Input,
    Box,
    Text,
    useToast
  } from '@chakra-ui/react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export const AdminLogin = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const toast = useToast()
    let navigate =  useNavigate()

    let handleSubmit =  () => {
        const postadmin = {
            email,
            password
        }
        
          axios.post("https://anxious-lamb-fez.cyclic.app/admin/login",postadmin)
        .then((res)=>{

            // let result = res?.data
            // let data = result.filter((ele)=>{
            //     if(ele.email === email && ele.password === password){
            //         return true
            //     }
            // })

            // if(data.length > 0){
            //     localStorage.setItem("adminAuth", true)
            //     toast({
            //         title: 'WELCOME ADMIN',
            //         description: "Redirecting to admin page",
            //         status: 'success',
            //         duration: 2000,
            //         isClosable: true,
            //       })
                 
            //         navigate("/admin-home")
                

            // }
            // else{
            //     toast({
            //         title: 'WRONG CREDENTIALS',
            //         status: 'error',
            //         duration: 2000,
            //         position:"top-right",
            //         isClosable: true,
            //       })
            // }
            console.log(res.data.token)
            localStorage.setItem("adminToken",res.data.token)
        })
        .catch((err) => {
            console.log(err)
        })

        if(localStorage.getItem("adminToken")){
            navigate("/admin-home")
        }else{
            alert("Admin NOt FOund")
        }
        
    }


  return (
    <div style={{display:"grid", placeItems:"center", padding:"50px"}}>

       
        <Box padding={"50px"} boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;"} w="45%" backgroundColor={"#E3CFED"} borderRadius={"10px"}>
            <FormControl >
                <FormLabel textAlign={"center"}>Email</FormLabel>
                <Input  mt={2} type='text' placeholder='Email' id="1" value={email} onChange={(e)=>setEmail(e.target.value)} />
                <FormLabel textAlign={"center"} mt={4} >Password</FormLabel>
                <Input mt={2} type='password'  placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)} />
                <br />
                <Button onClick={handleSubmit} ml="220px" mt={6} backgroundColor={"#7DD963"} _hover={{backgroundColor:"#7DD963"}}>Submit</Button>
            </FormControl>
        </Box>

    </div>
  )
}
