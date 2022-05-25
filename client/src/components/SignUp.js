import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
  } from '@chakra-ui/react';
  import { useState } from 'react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
  import axios from 'axios';
  import { useNavigate } from "react-router-dom";

  
  export default function SignupCard() {
    const [showPassword, setShowPassword] = useState(false);
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    let navigate = useNavigate();


    const submitHandler = (e) => {
      e.preventDefault();
      if(name && lastName && email && password) {
        if( email && password) {
          console.log(email, password);
          axios.post(`${process.env.REACT_APP_API_BASEURL}/api/auth/register`, { name, lastName, email, password })
            .then(res => {
              console.log(res);
              console.log(res.data);
              navigate("/Signin");
            });
        }
      }
    };
    
    return (
      <form onSubmit={submitHandler}>
        <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={'center'}>
              Regjistrohuni
            </Heading>
            {/*<Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool features ✌️
    </Text>*/}
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>Emri</FormLabel>
                    <Input type="text" onInput={e => setName(e.target.value)} />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName">
                    <FormLabel>Mbiemri</FormLabel>
                    <Input type="text" onInput={e => setLastName(e.target.value)} />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel>Email adresa</FormLabel>
                <Input type="email" onInput={e => setEmail(e.target.value)} />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Fjal kalimi</FormLabel>
                <InputGroup>
                  <Input type={showPassword ? 'text' : 'password'} onInput={e => setPassword(e.target.value)} />
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
                  size="lg"
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Regjistrohuni
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={'center'}>
                  Keni konto? <Link as={'a'} href={'/Signup/Li'} color={'blue.400'}>Hyr</Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
      </form>
    );
  }