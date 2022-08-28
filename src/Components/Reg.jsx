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
  Container,
  VStack,
  Image,
} from '@chakra-ui/react';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';

export default function Reg() {
  const [showPassword, setShowPassword] = useState(false);
  //
  const [data, setData] = useState({ username: "", email: "", phone: "", password: "", id: "" })
  const navigate = useNavigate()


  const handleInput = (e) => {
    const { name, value } = e.target
    setData({ ...data, [name]: value, id: new Date().getTime() })
  };
  //   console.log(data)
  // let localarr=[]
  const handleSubmit = (e) => {
    e.preventDefault()
    // localarr.push(data)
    localStorage.setItem("userdetails", JSON.stringify(data))
    setData({ username: "", email: "", phone: "", password: "", id: "" })
    navigate("/login")
  }
  return (
    <Flex
      // minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={'white'} >

      <Container spacing={1} mx={'auto'} maxW={'900px'} py={6} px={6} bg={'aliceblue'}>
        <Container
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={0} maxW={'900px'} maxH={'500px'}>
          <Flex >
            <VStack spacing={4} p={10} alignItems="flex-start" w="full" h="full" >

              <Heading fontSize={'2xl'} textAlign={'center'}>
                Sign up
              </Heading>

              <Box>
                <FormControl id="Name" isRequired>
                  <FormLabel>Name</FormLabel>
                  <Input
                    id="name"
                    onChange={handleInput}
                    value={data.username}
                    name="username"
                    autoComplete="off"
                    type="text"
                  />
                </FormControl>
              </Box>

              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input
                  id="email"
                  onChange={handleInput}
                  value={data.email}
                  name="email"
                  autoComplete="off"
                  type="email"

                />
              </FormControl>
              {/* <Box>
                <FormControl id="lastName">
                  <FormLabel>Phone Number</FormLabel>
                  <Input
                    id="phone"
                    onChange={handleInput}
                    value={data.phone}
                    name="phone"
                    autoComplete="off"
                    type="number"

                  />
                </FormControl>
              </Box> */}
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
                    bg: 'blue.500',
                  }}>
                  Sign up
                </Button>
                
              </Stack>
              <Stack pt={6}>
              </Stack>
            </VStack>

            <VStack spacing={10} p={10} alignItems="flex-start" w="full" h="full">

              <Box boxShadow='lg' w={300} p={5}>
               <label> <Image boxSize='30px' src="" alt="pic3" />  </label>
               <Text mt="-7">Sign-In with Goole</Text>
              </Box >
              <Box boxShadow='lg' w={300} p={5}>
               <label> <Image boxSize='30px' src="" alt="pic1" /></label>
               <Text mt="-7">Sign-In with LinkedIn</Text>
              </Box>

              <Box flex-direction='row' boxShadow='lg' w={300} p={5}>
               <span direction='row' display="flex"> <Image boxSize='30px' src="data:image/jpeg;base64,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" alt="pic" /></span>
               <Text mt="-7">Sign-In with Facebook</Text>
              </Box>
            </VStack>

          </Flex>
        </Container>
      </Container>
    </Flex>
  );
}


// data:image/png;base64,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
//data:image/jpeg;base64,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
//data:image/png;base64,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