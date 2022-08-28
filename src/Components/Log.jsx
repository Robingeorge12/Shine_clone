import React from 'react'

import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

import { useNavigate } from 'react-router-dom';
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
} from '@chakra-ui/react';


export default function Log() {
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({ email: "", password: "" })
  const navigate = useNavigate()
  const parseddata = JSON.parse(localStorage.getItem("userdetails")) || {}
  const handleInput = (e) => {
    const { name, value } = e.target
    setData({ ...data, [name]: value })
  };

  const handleSubmit = () => {

    if (parseddata.email !== data.email) { alert("Wrong Account") }
    else if (parseddata.password !== data.password) {
      alert("Password Wrong")
    }
    else if (parseddata.email === data.email && parseddata.password === data.password) {
      // alert("fetching data")
      setTimeout(() => {
        alert("Login Suceessful")
        navigate("/")
      }, 100);
    }
    setData({ email: "", password: "" })
  }

  //  console.log(data)
  // console.log(parseddata)
  return (

    <Flex
      // minH={'100vh'}
      align={'center'}
      justify={'center'}
      >
      <Stack spacing={2} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Box
          rounded={'lg'}
          p={10}>
            
          <Stack spacing={4}>

            <Heading fontSize={'2xl'} textAlign={'center'}>
              Login
            </Heading>


            <FormControl isRequired>
              <FormLabel>Email address</FormLabel>
              <Input

                onChange={handleInput}
                value={data.email}
                name="email"
                autoComplete="off"
                type="email"

              />
            </FormControl>

            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input type={showPassword ? 'text' : 'password'} onChange={handleInput}
                  value={data.password}
                  name="password"
                  autoComplete="off" />
                <InputRightElement h={'full'}>

                  <Button
                    variant={'ghost'}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                type="submit"
                onClick={handleSubmit}
                loadingText="Submitting"
                size="lg"
                bg={'rgb(134,82,255)'}
                color={'white'}
                _hover={{
                  bg: 'red.500',
                }}  >
                Login
              </Button>
            </Stack>
            <Stack pt={6}>
            </Stack>
          </Stack>
          <Text>New to website?
            <Link to="/signup">Signup</Link>
          </Text>
        </Box>
      </Stack>
    </Flex>


  )
}



