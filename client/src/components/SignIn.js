import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  FormErrorMessage,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


export default function SimpleCard() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    if( email && password) {
      console.log( email, password);
      const { data } = await axios.post(`${process.env.REACT_APP_API_BASEURL}/api/auth/login`, { email, password });
      if(data.success) {
        const { accessToken, user } = data.data;
        localStorage.setItem('accessToken', accessToken);
        setTimeout(() => {
          navigate("/LandingPage");
          navigate(0);
        }, 1500);
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
          <Heading fontSize={'4xl'}>Hapeni konton tuaj</Heading>
          {/*<Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
            </Text>*/}
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel htmlFor='email'>Email adresa</FormLabel>
                <Input type="email" onInput={e => setEmail(e.target.value)} />
              </FormControl>
            <FormControl id="password">
              <FormLabel>Fjal  kalimi</FormLabel>
              <Input type={showPassword ? 'text' : 'password'} onInput={e => setPassword(e.target.value)} />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Më mbajë në mend</Checkbox>
                <Link as={'a'} href={'/Signin/Fp'} color={'blue.400'}>Keni harruar fjal kalimin?</Link>
                <Link as={'a'} href={'/Signup'} color={'blue.400'}>Hap konto të re?</Link>
              </Stack>
              <Button
                  type="submit"
                  size="lg"
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Hyr
                </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
    </form>
  );
}