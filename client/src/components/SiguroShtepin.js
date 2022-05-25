import {
  Image,
  useBreakpointValue,
  Link,
  useColorModeValue,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  FormControl,
  Divider,
  FormLabel,
  Input,
  Heading,
  Stack,
  Checkbox,
  Flex,
  Select,
  NumberInput,
  NumberInputField,
  NumberIncrementStepper,
  NumberInputStepper,
  NumberDecrementStepper,
  Text,
  Textarea,
  Button,
  Box,
  useMediaQuery,
  useDisclosure,
  Collapse,
  SimpleGrid
} from "@chakra-ui/react";
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function SiguroShtepin() {
  const [isNotSmallerScreen] = useMediaQuery("(min-width:768px)");
  const { isOpen, onToggle } = useDisclosure();
  const { isOpen: isOpen2, onToggle: onToggle2 } = useDisclosure();
  const { isOpen: isOpen3, onToggle: onToggle3 } = useDisclosure();

  const toggleFirst = () => {
    if (isOpen2 && !isOpen) onToggle2();
    if (isOpen3 && !isOpen) onToggle3();
    onToggle();
  };
  const toggleSecond = () => {
    if (isOpen && !isOpen2) onToggle();
    if (isOpen3 && !isOpen2) onToggle3();
    onToggle2();
  };
  const toggleThird = () => {
    if (isOpen && !isOpen3) onToggle();
    if (isOpen2 && !isOpen3) onToggle2();
    onToggle3();
  };

  const [constructionCategory, setConstructionCategory] = useState('');
  const [object, setObject] = useState('');
  const [seizmikZone, setSeizmikZone,] = useState('');
  const [value, setValue] = useState('');
  const [gadgeets, setGagets] = useState('');
  const [lived, setLived] = useState('');
  const [clientFee, setClientFee] = useState('');
  const [earhquace, setEarthquace] = useState('');
  const [earthquaceFee, setEarthquaceFee] = useState('');
  const [heavyDoors, setHeavyDoors] = useState('');
  const [otherInsurance, setOtherInsurance] = useState('');
  const [insuranceStart, setInsuranceStart] = useState('');

  const submitHandler1 = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('accessToken');
    if (!token) return;
    if (constructionCategory && object && seizmikZone && value && gadgeets && lived && clientFee && earhquace && earthquaceFee && heavyDoors && otherInsurance && insuranceStart) {
      console.log(constructionCategory, object, seizmikZone, value, gadgeets, lived, clientFee, earhquace, earthquaceFee, heavyDoors, otherInsurance, insuranceStart);
      const res = await axios.post(`${process.env.REACT_APP_API_BASEURL}/api/items/siguroShtepin3`, { constructionCategory, object, seizmikZone, value, gadgeets, lived, clientFee, earhquace, earthquaceFee, heavyDoors, otherInsurance, insuranceStart}, {
        headers: { 'x-auth-token': token }
      })
      console.log('gfhgfhgfhgfgfg-----==>>>>>   ', res);
    }
  };
  const submitHandler2 = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('accessToken');
    if (!token) return;
    if (constructionCategory && object && seizmikZone && value && gadgeets && lived && clientFee && earhquace && earthquaceFee && heavyDoors && otherInsurance && insuranceStart) {
      console.log(constructionCategory, object, seizmikZone, value, gadgeets, lived, clientFee, earhquace, earthquaceFee, heavyDoors, otherInsurance, insuranceStart);
      const res = await axios.post(`${process.env.REACT_APP_API_BASEURL}/api/items/siguroShtepin1`, { constructionCategory, object, seizmikZone, value, gadgeets, lived, clientFee, earhquace, earthquaceFee, heavyDoors, otherInsurance, insuranceStart}, {
        headers: { 'x-auth-token': token }
      })
      console.log('gfhgfhgfhgfgfg-----==>>>>>   ', res);
    }
  };
  const submitHandler3 = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('accessToken');
    if (!token) return;
    if (constructionCategory && object && seizmikZone && value && gadgeets && lived && clientFee && earhquace && earthquaceFee && heavyDoors && otherInsurance && insuranceStart) {
      console.log(constructionCategory, object, seizmikZone, value, gadgeets, lived, clientFee, earhquace, earthquaceFee, heavyDoors, otherInsurance, insuranceStart);
      const res = await axios.post(`${process.env.REACT_APP_API_BASEURL}/api/items/siguroShtepin2`, { constructionCategory, object, seizmikZone, value, gadgeets, lived, clientFee, earhquace, earthquaceFee, heavyDoors, otherInsurance, insuranceStart}, {
        headers: { 'x-auth-token': token }
      })
      console.log('gfhgfhgfhgfgfg-----==>>>>>   ', res);
    }
  };

  return (
    <SimpleGrid>
      <Stack bg="gray.100" minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={6} w={'full'} maxW={'lg'}>
            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
              <Text
                as={'span'}
                position={'relative'}
                _after={{
                  content: "''",
                  width: 'full',
                  height: useBreakpointValue({ base: '20%', md: '30%' }),
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  bg: 'blue.400',
                  zIndex: -1,
                }}>
                Sigurimi
              </Text>
              <br />{' '}
              <Text color={'blue.400'} as={'span'}>
                Shtëpiak
              </Text>{' '}
            </Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
              The project board is an exclusive resource for contract work. It's
              perfect for freelancers, agencies, and moonlighters.
            </Text>
            <Button
              rounded={'full'}
              bg={'blue.400'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}>
              Blej online
            </Button>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            alt={'Login Image'}
            objectFit={'cover'}
            src={
              '/IMG/SS.jpg'
            }
          />
        </Flex>
      </Stack>
      <Stack minH={'auto'} direction={{ base: 'column', md: 'row' }}>

        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          marginTop={{ base: '3', sm: '0' }}>
          <Heading marginTop="1" paddingTop="10px" paddingLeft="10px" paddingRight="10px" paddingBottom="10px" align="center" color="blue.400">
            PAKO BAZË
          </Heading>
          <Text
            paddingLeft="10px"
            paddingRight="10px"
            paddingBottom="10px"
            as="p"
            marginTop="2"
            marginLeft="4"
            marginRight="4"
            marginBottom="2"
            color={useColorModeValue('gray.700', 'gray.200')}
            fontSize="lg">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Text>
          <Table variant='simple'>
            <TableCaption>Imperial to metric conversion factors</TableCaption>
            <Thead>
              <Tr>
                <Th>To convert</Th>
                <Th>into</Th>
                <Th isNumeric>multiply by</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>inches</Td>
                <Td>millimetres (mm)</Td>
                <Td isNumeric>25.4</Td>
              </Tr>
              <Tr>
                <Td>feet</Td>
                <Td>centimetres (cm)</Td>
                <Td isNumeric>30.48</Td>
              </Tr>
              <Tr>
                <Td>yards</Td>
                <Td>metres (m)</Td>
                <Td isNumeric>0.91444</Td>
              </Tr>
            </Tbody>
            <Tfoot>
              <Tr>
                <Th>To convert</Th>
                <Th>into</Th>
                <Th isNumeric>multiply by</Th>
              </Tr>
            </Tfoot>
          </Table>
          <Box align="center">
            <Button
              as={'button'}
              onClick={toggleSecond}
              rounded={'full'}
              marginBottom="20px"
              bg={'blue.400'}
              color={'white'}
              width="40%"
              _hover={{
                bg: 'blue.500',
              }}>
              Siguro
            </Button>
            <Divider marginTop="5" />
          </Box>
        </Box>
        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          marginTop={{ base: '3', sm: '0' }}>
          <Heading marginTop="1" paddingTop="10px" paddingLeft="10px" paddingRight="10px" paddingBottom="10px" align="center" color="blue.400">
            PAKO STANDARDE
          </Heading>
          <Text
            paddingLeft="10px"
            paddingRight="10px"
            paddingBottom="10px"
            as="p"
            marginTop="2"
            marginLeft="4"
            marginRight="4"
            marginBottom="2"
            color={useColorModeValue('gray.700', 'gray.200')}
            fontSize="lg">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Text>
          <Table variant='simple'>
            <TableCaption>Imperial to metric conversion factors</TableCaption>
            <Thead>
              <Tr>
                <Th>To convert</Th>
                <Th>into</Th>
                <Th isNumeric>multiply by</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>inches</Td>
                <Td>millimetres (mm)</Td>
                <Td isNumeric>25.4</Td>
              </Tr>
              <Tr>
                <Td>feet</Td>
                <Td>centimetres (cm)</Td>
                <Td isNumeric>30.48</Td>
              </Tr>
              <Tr>
                <Td>yards</Td>
                <Td>metres (m)</Td>
                <Td isNumeric>0.91444</Td>
              </Tr>
            </Tbody>
            <Tfoot>
              <Tr>
                <Th>To convert</Th>
                <Th>into</Th>
                <Th isNumeric>multiply by</Th>
              </Tr>
            </Tfoot>
          </Table>
          <Box align="center">
            <Button
              as={'button'}
              onClick={toggleThird}
              rounded={'full'}
              marginBottom="20px"
              bg={'blue.400'}
              color={'white'}
              width="40%"
              _hover={{
                bg: 'blue.500',
              }}>
              Siguro
            </Button>
            <Divider marginTop="5" />
          </Box>
        </Box>
        <Box
          display="flex"
          flex="1"
          flexDirection="column"

          marginTop={{ base: '3', sm: '0' }}>
          <Heading marginTop="1" paddingTop="10px" paddingLeft="10px" paddingRight="10px" paddingBottom="10px" align="center" color="blue.400">
            PAKO LUKSOZE
          </Heading>
          <Text
            paddingLeft="10px"
            paddingRight="10px"
            paddingBottom="10px"
            as="p"
            marginTop="2"
            marginLeft="4"
            marginRight="4"
            marginBottom="2"
            color={useColorModeValue('gray.700', 'gray.200')}
            fontSize="lg">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Text>
          <Table variant='simple'>
            <TableCaption>Imperial to metric conversion factors</TableCaption>
            <Thead>
              <Tr>
                <Th>To convert</Th>
                <Th>into</Th>
                <Th isNumeric>multiply by</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>inches</Td>
                <Td>millimetres (mm)</Td>
                <Td isNumeric>25.4</Td>
              </Tr>
              <Tr>
                <Td>feet</Td>
                <Td>centimetres (cm)</Td>
                <Td isNumeric>30.48</Td>
              </Tr>
              <Tr>
                <Td>yards</Td>
                <Td>metres (m)</Td>
                <Td isNumeric>0.91444</Td>
              </Tr>
            </Tbody>
            <Tfoot>
              <Tr>
                <Th>To convert</Th>
                <Th>into</Th>
                <Th isNumeric>multiply by</Th>
              </Tr>
            </Tfoot>
          </Table>
          <Box>
          </Box>
          <Box align="center">
            <Button
              as={'button'}
              onClick={toggleFirst}
              rounded={'full'}
              marginBottom="20px"
              bg={'blue.400'}
              color={'white'}
              width="40%"
              _hover={{
                bg: 'blue.500',
              }}>
              Siguro
            </Button>
            <Divider marginTop="5" />
          </Box>
        </Box>
      </Stack>
      <form onSubmit={submitHandler1}>
        <Collapse in={isOpen} animateOpacity>
          <Heading align={'center'} as="h1" marginTop={'30px'} marginBottom={'30px'} color={'blue.400'}>
          </Heading>
          <Flex flexDirection="column" p="2" justifyContent="center" alignItems="center">
            <Heading align={'center'} as="h1" marginTop={'30px'} marginBottom={'30px'} color={'blue.400'}>KËRKESË PYETËSOR PËR PAKO
              <br></br>LUKSOZE</Heading>
            <FormControl width="90%">
              <SimpleGrid columns={2} spacing={5}>
                <FormLabel padding={'5px'} bg={'gray.100'}>Kategoria e ndërtimit</FormLabel>
                <Input p="2" width={'100%'} id="constructionCategory" type="text" placeholder='' onInput={e => setConstructionCategory(e.target.value)} />
                <FormLabel padding={'5px'} bg={'gray.100'}>Objekti që do të sigurohet</FormLabel>
                <Input p="2" width={'100%'} id="object" type="text" placeholder='' onInput={e => setObject(e.target.value)} />
                <FormLabel padding={'5px'} bg={'gray.100'}>Zona seizmike</FormLabel>
                <Input p="2" width={'100%'} id="seizmikZone" type="text" placeholder='' onInput={e => setSeizmikZone(e.target.value)} />
                <FormLabel padding={'5px'} bg={'gray.100'}>Vlera</FormLabel>
                <Input p="2" width={'100%'} id="value" type="text" placeholder='' onInput={e => setValue(e.target.value)} />
                <FormLabel padding={'5px'} bg={'gray.100'}>Pajisje</FormLabel>
                <Input p="2" width={'100%'} id="gadgeets" type="text" placeholder='' onInput={e => setGagets(e.target.value)} />
                <FormLabel padding={'5px'} bg={'gray.100'} htmlFor='email'>Banuar</FormLabel>
                <Input p="2" width={'100%'} id='lived' type='text' placeholder='' onInput={e => setLived(e.target.value)} />
                <FormLabel padding={'5px'} bg={'gray.100'}>Pjesëmarrja e klientit ne dëme (në euro)</FormLabel>
                <Input p="2" width={'100%'} id="clientFee" type="text" placeholder='' onInput={e => setClientFee(e.target.value)} />
                <FormLabel padding={'5px'} bg={'gray.100'}>Tërmet</FormLabel>
                <Input p="2" width={'100%'} id="earhquace" type="text" placeholder='' onInput={e => setEarthquace(e.target.value)} />
                <FormLabel padding={'5px'} bg={'gray.100'}>Përqindja e pjesëmarrjes së klientit në dëme si pasojë e tërmetit</FormLabel>
                <Input p="2" width={'100%'} id="earthquaceFee" type="text" placeholder='' onInput={e => setEarthquaceFee(e.target.value)} />
                <FormLabel padding={'5px'} bg={'gray.100'}>Dyer të blinduara</FormLabel>
                <Input p="2" width={'100%'} id="heavyDoors" type="text" placeholder='' onInput={e => setHeavyDoors(e.target.value)} />
                <FormLabel padding={'5px'} bg={'gray.100'}>Tjetër kompani sigurimesh</FormLabel>
                <Input p="2" width={'100%'} id="otherInsurance" type="text" placeholder='' onInput={e => setOtherInsurance(e.target.value)} />
                <FormLabel padding={'5px'} bg={'gray.100'}>Data e fillimit të sigurimit</FormLabel>
                <Input p="2" width={'100%'} id="insuranceStart" type="text" placeholder='' onInput={e => setInsuranceStart(e.target.value)} />
              </SimpleGrid>
            </FormControl>
            <Button p="4" marginTop="20px" marginBottom="20px" width="40%" bg={'blue.400'} color={'white'} type={'submit'}>Dërgo</Button>
          </Flex>
        </Collapse>
      </form>
      <form onSubmit={submitHandler2}>
        <Collapse in={isOpen2} animateOpacity>
          <Flex flexDirection="column" p="2" justifyContent="center" alignItems="center">
            <Heading align={'center'} as="h1" marginTop={'30px'} marginBottom={'30px'} color={'blue.400'}>KËRKESË PYETËSOR PËR PAKO
              <br></br>BAZË</Heading>
            <FormControl width="90%">
              <SimpleGrid columns={2} spacing={5}>
              <FormLabel padding={'5px'} bg={'gray.100'}>Kategoria e ndërtimit</FormLabel>
                <Input p="2" width={'100%'} id="constructionCategory" type="text" placeholder='' onInput={e => setConstructionCategory(e.target.value)} />
                <FormLabel padding={'5px'} bg={'gray.100'}>Objekti që do të sigurohet</FormLabel>
                <Input p="2" width={'100%'} id="object" type="text" placeholder='' onInput={e => setObject(e.target.value)} />
                <FormLabel padding={'5px'} bg={'gray.100'}>Zona seizmike</FormLabel>
                <Input p="2" width={'100%'} id="seizmikZone" type="text" placeholder='' onInput={e => setSeizmikZone(e.target.value)} />
                <FormLabel padding={'5px'} bg={'gray.100'}>Vlera</FormLabel>
                <Input p="2" width={'100%'} id="value" type="text" placeholder='' onInput={e => setValue(e.target.value)} />
                <FormLabel padding={'5px'} bg={'gray.100'}>Pajisje</FormLabel>
                <Input p="2" width={'100%'} id="gadgeets" type="text" placeholder='' onInput={e => setGagets(e.target.value)} />
                <FormLabel padding={'5px'} bg={'gray.100'} htmlFor='email'>Banuar</FormLabel>
                <Input p="2" width={'100%'} id='lived' type='text' placeholder='' onInput={e => setLived(e.target.value)} />
                <FormLabel padding={'5px'} bg={'gray.100'}>Pjesëmarrja e klientit ne dëme (në euro)</FormLabel>
                <Input p="2" width={'100%'} id="clientFee" type="text" placeholder='' onInput={e => setClientFee(e.target.value)} />
                <FormLabel padding={'5px'} bg={'gray.100'}>Tërmet</FormLabel>
                <Input p="2" width={'100%'} id="earhquace" type="text" placeholder='' onInput={e => setEarthquace(e.target.value)} />
                <FormLabel padding={'5px'} bg={'gray.100'}>Përqindja e pjesëmarrjes së klientit në dëme si pasojë e tërmetit</FormLabel>
                <Input p="2" width={'100%'} id="earthquaceFee" type="text" placeholder='' onInput={e => setEarthquaceFee(e.target.value)} />
                <FormLabel padding={'5px'} bg={'gray.100'}>Dyer të blinduara</FormLabel>
                <Input p="2" width={'100%'} id="heavyDoors" type="text" placeholder='' onInput={e => setHeavyDoors(e.target.value)} />
                <FormLabel padding={'5px'} bg={'gray.100'}>Tjetër kompani sigurimesh</FormLabel>
                <Input p="2" width={'100%'} id="otherInsurance" type="text" placeholder='' onInput={e => setOtherInsurance(e.target.value)} />
                <FormLabel padding={'5px'} bg={'gray.100'}>Data e fillimit të sigurimit</FormLabel>
                <Input p="2" width={'100%'} id="insuranceStart" type="text" placeholder='' onInput={e => setInsuranceStart(e.target.value)} />
              </SimpleGrid>
            </FormControl>
            <Button p="4" marginTop="20px" marginBottom="20px" width="40%" bg={'blue.400'} color={'white'} type={'submit'}>Dërgo</Button>
          </Flex>
        </Collapse>
      </form>
      <form onSubmit={submitHandler3}>
        <Collapse in={isOpen3} animateOpacity>
          <Flex flexDirection="column" p="2" align={'center'} >
            <Heading align={'center'} as="h1" marginTop={'30px'} marginBottom={'30px'} color={'blue.400'}>KËRKESË PYETËSOR PËR PAKO
              <br></br>STANDARDE</Heading>
            <FormControl width="90%">
              <SimpleGrid columns={2} spacing={5}>
              <FormLabel padding={'5px'} bg={'gray.100'}>Kategoria e ndërtimit</FormLabel>
                <Input p="2" width={'100%'} id="constructionCategory" type="text" placeholder='' onInput={e => setConstructionCategory(e.target.value)} />
                <FormLabel padding={'5px'} bg={'gray.100'}>Objekti që do të sigurohet</FormLabel>
                <Input p="2" width={'100%'} id="object" type="text" placeholder='' onInput={e => setObject(e.target.value)} />
                <FormLabel padding={'5px'} bg={'gray.100'}>Zona seizmike</FormLabel>
                <Input p="2" width={'100%'} id="seizmikZone" type="text" placeholder='' onInput={e => setSeizmikZone(e.target.value)} />
                <FormLabel padding={'5px'} bg={'gray.100'}>Vlera</FormLabel>
                <Input p="2" width={'100%'} id="value" type="text" placeholder='' onInput={e => setValue(e.target.value)} />
                <FormLabel padding={'5px'} bg={'gray.100'}>Pajisje</FormLabel>
                <Input p="2" width={'100%'} id="gadgeets" type="text" placeholder='' onInput={e => setGagets(e.target.value)} />
                <FormLabel padding={'5px'} bg={'gray.100'} htmlFor='email'>Banuar</FormLabel>
                <Input p="2" width={'100%'} id='lived' type='text' placeholder='' onInput={e => setLived(e.target.value)} />
                <FormLabel padding={'5px'} bg={'gray.100'}>Pjesëmarrja e klientit ne dëme (në euro)</FormLabel>
                <Input p="2" width={'100%'} id="clientFee" type="text" placeholder='' onInput={e => setClientFee(e.target.value)} />
                <FormLabel padding={'5px'} bg={'gray.100'}>Tërmet</FormLabel>
                <Input p="2" width={'100%'} id="earhquace" type="text" placeholder='' onInput={e => setEarthquace(e.target.value)} />
                <FormLabel padding={'5px'} bg={'gray.100'}>Përqindja e pjesëmarrjes së klientit në dëme si pasojë e tërmetit</FormLabel>
                <Input p="2" width={'100%'} id="earthquaceFee" type="text" placeholder='' onInput={e => setEarthquaceFee(e.target.value)} />
                <FormLabel padding={'5px'} bg={'gray.100'}>Dyer të blinduara</FormLabel>
                <Input p="2" width={'100%'} id="heavyDoors" type="text" placeholder='' onInput={e => setHeavyDoors(e.target.value)} />
                <FormLabel padding={'5px'} bg={'gray.100'}>Tjetër kompani sigurimesh</FormLabel>
                <Input p="2" width={'100%'} id="otherInsurance" type="text" placeholder='' onInput={e => setOtherInsurance(e.target.value)} />
                <FormLabel padding={'5px'} bg={'gray.100'}>Data e fillimit të sigurimit</FormLabel>
                <Input p="2" width={'100%'} id="insuranceStart" type="text" placeholder='' onInput={e => setInsuranceStart(e.target.value)} />
              </SimpleGrid>
            </FormControl>
            <Button p="4" marginTop="20px" marginBottom="20px" width="40%" bg={'blue.400'} color={'white'} type={'submit'}>Dërgo</Button>
          </Flex>
        </Collapse>
      </form>
    </SimpleGrid>
  );
}