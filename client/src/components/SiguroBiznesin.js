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

export default function SiguroBiznesin() {
    const [isNotSmallerScreen] = useMediaQuery("(min-width:768px)");
    const { isOpen, onToggle } = useDisclosure();
    const { isOpen: isOpen2, onToggle: onToggle2 } = useDisclosure();
    const { isOpen: isOpen3, onToggle: onToggle3 } = useDisclosure();
    const { isOpen: isOpen4, onToggle: onToggle4 } = useDisclosure();
    const { isOpen: isOpen5, onToggle: onToggle5 } = useDisclosure();
    const { isOpen: isOpen6, onToggle: onToggle6 } = useDisclosure();

    const toggleFirst = () => {
        if (isOpen2 && !isOpen) onToggle2();
        if (isOpen3 && !isOpen) onToggle3();
        if (isOpen4 && !isOpen) onToggle4();
        if (isOpen5 && !isOpen) onToggle5();
        if (isOpen6 && !isOpen) onToggle6();
        onToggle();
    };
    const toggleSecond = () => {
        if (isOpen && !isOpen2) onToggle();
        if (isOpen3 && !isOpen2) onToggle3();
        if (isOpen4 && !isOpen2) onToggle4();
        if (isOpen5 && !isOpen2) onToggle5();
        if (isOpen6 && !isOpen2) onToggle6();
        onToggle2();
    };
    const toggleThird = () => {
        if (isOpen && !isOpen3) onToggle();
        if (isOpen2 && !isOpen3) onToggle2();
        if (isOpen4 && !isOpen3) onToggle4();
        if (isOpen5 && !isOpen3) onToggle5();
        if (isOpen6 && !isOpen3) onToggle6();
        onToggle3();
    };
    const toggleFourth = () => {
        if (isOpen && !isOpen4) onToggle();
        if (isOpen2 && !isOpen4) onToggle2();
        if (isOpen3 && !isOpen4) onToggle3();
        if (isOpen5 && !isOpen4) onToggle5();
        if (isOpen6 && !isOpen4) onToggle6();
        onToggle4();
    };
    const toggleFith = () => {
        if (isOpen && !isOpen5) onToggle();
        if (isOpen2 && !isOpen5) onToggle2();
        if (isOpen3 && !isOpen5) onToggle3();
        if (isOpen4 && !isOpen5) onToggle4();
        if (isOpen6 && !isOpen5) onToggle6();
        onToggle5();
    };
    const toggleSixth = () => {
        if (isOpen && !isOpen6) onToggle();
        if (isOpen2 && !isOpen6) onToggle2();
        if (isOpen3 && !isOpen6) onToggle3();
        if (isOpen4 && !isOpen6) onToggle4();
        if (isOpen5 && !isOpen6) onToggle5();
        onToggle6();
    };
    const [namelastName, setNamelastName] = useState('');
    const [peopleNumber, setPeopleNumber] = useState('');
    const [idNumber, setIdNumber] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [adress, setAdress] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');

    const submitHandler1 = (e) => {
        e.preventDefault();
        if (namelastName && idNumber && peopleNumber && phone && email && adress && city && country && dateOfBirth) {
            console.log(namelastName, idNumber, peopleNumber, phone, email, adress, city, country, dateOfBirth);
            axios.post(`https://jsonplaceholder.typicode.com/users`, { namelastName, idNumber, peopleNumber, phone, email, adress, city, country, dateOfBirth })
                .then(res => {
                    console.log(res);
                    console.log(res.data);
                });
        }
    };
    const submitHandler2 = (e) => {
        e.preventDefault();
        if (namelastName && idNumber && peopleNumber && phone && email && adress && city && country && dateOfBirth) {
            console.log(namelastName, idNumber, peopleNumber, phone, email, adress, city, country, dateOfBirth);
            axios.post(`https://jsonplaceholder.typicode.com/users`, { namelastName, idNumber, peopleNumber, phone, email, adress, city, country, dateOfBirth })
                .then(res => {
                    console.log(res);
                    console.log(res.data);
                });
        }
    };
    const submitHandler3 = (e) => {
        e.preventDefault();
        if (namelastName && idNumber && peopleNumber && phone && email && adress && city && country && dateOfBirth) {
            console.log(namelastName, idNumber, peopleNumber, phone, email, adress, city, country, dateOfBirth);
            axios.post(`https://jsonplaceholder.typicode.com/users`, { namelastName, idNumber, peopleNumber, phone, email, adress, city, country, dateOfBirth })
                .then(res => {
                    console.log(res);
                    console.log(res.data);
                });
        }
    };
    const submitHandler4 = (e) => {
        e.preventDefault();
        if (namelastName && idNumber && peopleNumber && phone && email && adress && city && country && dateOfBirth) {
            console.log(namelastName, idNumber, peopleNumber, phone, email, adress, city, country, dateOfBirth);
            axios.post(`https://jsonplaceholder.typicode.com/users`, { namelastName, idNumber, peopleNumber, phone, email, adress, city, country, dateOfBirth })
                .then(res => {
                    console.log(res);
                    console.log(res.data);
                });
        }
    };
    const submitHandler5 = (e) => {
        e.preventDefault();
        if (namelastName && idNumber && peopleNumber && phone && email && adress && city && country && dateOfBirth) {
            console.log(namelastName, idNumber, peopleNumber, phone, email, adress, city, country, dateOfBirth);
            axios.post(`https://jsonplaceholder.typicode.com/users`, { namelastName, idNumber, peopleNumber, phone, email, adress, city, country, dateOfBirth })
                .then(res => {
                    console.log(res);
                    console.log(res.data);
                });
        }
    };
    const submitHandler6 = (e) => {
        e.preventDefault();
        if (namelastName && idNumber && peopleNumber && phone && email && adress && city && country && dateOfBirth) {
            console.log(namelastName, idNumber, peopleNumber, phone, email, adress, city, country, dateOfBirth);
            axios.post(`https://jsonplaceholder.typicode.com/users`, { namelastName, idNumber, peopleNumber, phone, email, adress, city, country, dateOfBirth })
                .then(res => {
                    console.log(res);
                    console.log(res.data);
                });
        }
    };
    return (
        <Box>
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
                                Sigurimet për
                            </Text>
                            <br />{' '}
                            <Text color={'blue.400'} as={'span'}>
                                Biznes
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
                            '/IMG/SB.jpg'
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
                    Sigurimi i <br>
                    </br>Garancioneve
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
                <Box
                    display="flex"
                    flex="1"
                    flexDirection="column"
                    marginTop={{ base: '3', sm: '0' }}>
                    <Heading marginTop="1" paddingTop="10px" paddingLeft="10px" paddingRight="10px" paddingBottom="10px" align="center" color="blue.400">
                    Sigurimi i kontraktorëve nga të gjitha rreziqet (CAR & EAR)
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
                    Sigurimet e <br>
                    </br>Pergjegjësisë
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
            </Stack>
            <form onSubmit={submitHandler1}>
                <Collapse in={isOpen} animateOpacity>
                    <Flex flexDirection="column" p="2" align={'center'} >
                        <Heading align={'center'} as="h1" marginTop={'30px'} marginBottom={'30px'} color={'blue.400'}>KËRKESË PYETËSOR PËR SIGURIMIN E
                            <br></br> GARANCIONEV
                        </Heading>
                        <FormControl width="90%">
                            <SimpleGrid columns={2} spacing={5}>
                                <FormLabel padding={'5px'} bg={'gray.100'}>Emri / Mbiemri</FormLabel>
                                <Input p="2" width={'100%'} id="name" type="text" placeholder='' onInput={e => setNamelastName(e.target.value)} />
                                <FormLabel padding={'5px'} bg={'gray.100'}>Nr.personav</FormLabel>
                                <Input p="2" width={'100%'} id="personnumber" type="text" placeholder='' onInput={e => setPeopleNumber(e.target.value)} />
                                <FormLabel padding={'5px'} bg={'gray.100'}>Data lindjes</FormLabel>
                                <Input p="2" width={'100%'} id="date" type="date" placeholder='' onInput={e => setDateOfBirth(e.target.value)} />
                                <FormLabel padding={'5px'} bg={'gray.100'}>Nr.personal</FormLabel>
                                <Input p="2" width={'100%'} id="id" type="text" placeholder='' onInput={e => setIdNumber(e.target.value)} />
                                <FormLabel padding={'5px'} bg={'gray.100'}>Nr. tel</FormLabel>
                                <Input p="2" width={'100%'} id="phone" type="text" placeholder='' onInput={e => setPhone(e.target.value)} />
                                <FormLabel padding={'5px'} bg={'gray.100'} htmlFor='email'>Email</FormLabel>
                                <Input p="2" width={'100%'} id='email' type='email' placeholder='' onInput={e => setEmail(e.target.value)} />
                                <FormLabel padding={'5px'} bg={'gray.100'}>Adresa</FormLabel>
                                <Input p="2" width={'100%'} id="adress" type="text" placeholder='' onInput={e => setAdress(e.target.value)} />
                                <FormLabel padding={'5px'} bg={'gray.100'}>Qyteti</FormLabel>
                                <Input p="2" width={'100%'} id="city" type="text" placeholder='' onInput={e => setCity(e.target.value)} />
                                <FormLabel padding={'5px'} bg={'gray.100'}>Shteti</FormLabel>
                                <Input p="2" width={'100%'} id="country" type="text" placeholder='' onInput={e => setCountry(e.target.value)} />
                            </SimpleGrid>
                        </FormControl>
                        <Button p="4" marginTop="20px" marginBottom="20px" width="40%" bg={'blue.400'} color={'white'} type="submit">Dërgo</Button>
                    </Flex>
                </Collapse>
            </form>
            <form onSubmit={submitHandler2}>
                <Collapse in={isOpen2} animateOpacity>
                    <Flex flexDirection="column" p="2" align={'center'} >
                        <Heading align={'center'} as="h1" marginTop={'30px'} marginBottom={'30px'} color={'blue.400'}>KËRKESË PYETËSOR PËR SIGURIMIN 
                            <br></br>CAR & EAR
                        </Heading>
                        <FormControl width="90%">
                            <SimpleGrid columns={2} spacing={5}>
                                <FormLabel padding={'5px'} bg={'gray.100'}>Emri / Mbiemri</FormLabel>
                                <Input p="2" width={'100%'} id="name" type="text" placeholder='' onInput={e => setNamelastName(e.target.value)} />
                                <FormLabel padding={'5px'} bg={'gray.100'}>Nr.personav</FormLabel>
                                <Input p="2" width={'100%'} id="personnumber" type="text" placeholder='' onInput={e => setPeopleNumber(e.target.value)} />
                                <FormLabel padding={'5px'} bg={'gray.100'}>Data lindjes</FormLabel>
                                <Input p="2" width={'100%'} id="date" type="date" placeholder='' onInput={e => setDateOfBirth(e.target.value)} />
                                <FormLabel padding={'5px'} bg={'gray.100'}>Nr.personal</FormLabel>
                                <Input p="2" width={'100%'} id="id" type="text" placeholder='' onInput={e => setIdNumber(e.target.value)} />
                                <FormLabel padding={'5px'} bg={'gray.100'}>Nr. tel</FormLabel>
                                <Input p="2" width={'100%'} id="phone" type="text" placeholder='' onInput={e => setPhone(e.target.value)} />
                                <FormLabel padding={'5px'} bg={'gray.100'} htmlFor='email'>Email</FormLabel>
                                <Input p="2" width={'100%'} id='email' type='email' placeholder='' onInput={e => setEmail(e.target.value)} />
                                <FormLabel padding={'5px'} bg={'gray.100'}>Adresa</FormLabel>
                                <Input p="2" width={'100%'} id="adress" type="text" placeholder='' onInput={e => setAdress(e.target.value)} />
                                <FormLabel padding={'5px'} bg={'gray.100'}>Qyteti</FormLabel>
                                <Input p="2" width={'100%'} id="city" type="text" placeholder='' onInput={e => setCity(e.target.value)} />
                                <FormLabel padding={'5px'} bg={'gray.100'}>Shteti</FormLabel>
                                <Input p="2" width={'100%'} id="country" type="text" placeholder='' onInput={e => setCountry(e.target.value)} />
                            </SimpleGrid>
                        </FormControl>
                        <Button p="4" marginTop="20px" marginBottom="20px" width="40%" bg={'blue.400'} color={'white'} type="submit">Dërgo</Button>
                    </Flex>
                </Collapse>
            </form>
            <form onSubmit={submitHandler3}>
                <Collapse in={isOpen3} animateOpacity>
                    <Flex flexDirection="column" p="2" align={'center'} >
                        <Heading align={'center'} as="h1" marginTop={'30px'} marginBottom={'30px'} color={'blue.400'}>KËRKESË PYETËSOR PËR SIGURIMIN E
                            <br></br>PËRGJEGJËSIVE
                        </Heading>
                        <FormControl width="90%">
                            <SimpleGrid columns={2} spacing={5}>
                                <FormLabel padding={'5px'} bg={'gray.100'}>Emri / Mbiemri</FormLabel>
                                <Input p="2" width={'100%'} id="name" type="text" placeholder='' onInput={e => setNamelastName(e.target.value)} />
                                <FormLabel padding={'5px'} bg={'gray.100'}>Nr.personav</FormLabel>
                                <Input p="2" width={'100%'} id="personnumber" type="text" placeholder='' onInput={e => setPeopleNumber(e.target.value)} />
                                <FormLabel padding={'5px'} bg={'gray.100'}>Data lindjes</FormLabel>
                                <Input p="2" width={'100%'} id="date" type="date" placeholder='' onInput={e => setDateOfBirth(e.target.value)} />
                                <FormLabel padding={'5px'} bg={'gray.100'}>Nr.personal</FormLabel>
                                <Input p="2" width={'100%'} id="id" type="text" placeholder='' onInput={e => setIdNumber(e.target.value)} />
                                <FormLabel padding={'5px'} bg={'gray.100'}>Nr. tel</FormLabel>
                                <Input p="2" width={'100%'} id="phone" type="text" placeholder='' onInput={e => setPhone(e.target.value)} />
                                <FormLabel padding={'5px'} bg={'gray.100'} htmlFor='email'>Email</FormLabel>
                                <Input p="2" width={'100%'} id='email' type='email' placeholder='' onInput={e => setEmail(e.target.value)} />
                                <FormLabel padding={'5px'} bg={'gray.100'}>Adresa</FormLabel>
                                <Input p="2" width={'100%'} id="adress" type="text" placeholder='' onInput={e => setAdress(e.target.value)} />
                                <FormLabel padding={'5px'} bg={'gray.100'}>Qyteti</FormLabel>
                                <Input p="2" width={'100%'} id="city" type="text" placeholder='' onInput={e => setCity(e.target.value)} />
                                <FormLabel padding={'5px'} bg={'gray.100'}>Shteti</FormLabel>
                                <Input p="2" width={'100%'} id="country" type="text" placeholder='' onInput={e => setCountry(e.target.value)} />
                            </SimpleGrid>
                        </FormControl>
                        <Button p="4" marginTop="20px" marginBottom="20px" width="40%" bg={'blue.400'} color={'white'} type="submit">Dërgo</Button>
                    </Flex>
                </Collapse>
            </form>
            <Stack minH={'auto'} direction={{ base: 'column', md: 'row' }}>

                <Box
                    display="flex"
                    flex="1"
                    flexDirection="column"
                    marginTop={{ base: '3', sm: '0' }}>
                    <Heading marginTop="1" paddingTop="10px" paddingLeft="10px" paddingRight="10px" paddingBottom="10px" align="center" color="blue.400">
                    Sigurimi i <br>
                    </br>Pronës
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
                            onClick={toggleFourth}
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
                    Sigurimi i parave në kasafortë dhe gjatë transportit (CIS & CIT)
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
                            onClick={toggleFith}
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
                    Sigurimi <br>
                    </br>Cargo
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
                            onClick={toggleSixth}
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
            <form onSubmit={submitHandler4}>
                <Collapse in={isOpen4} animateOpacity>
                    <Flex flexDirection="column" p="2" align={'center'} >
                        <Heading align={'center'} as="h1" marginTop={'30px'} marginBottom={'30px'} color={'blue.400'}>KËRKESË PYETËSOR PËR SIGURIMIN E
                            <br></br>PRONËS
                        </Heading>
                        <FormControl width="90%">
                            <SimpleGrid columns={2} spacing={5}>
                                <FormLabel padding={'5px'} bg={'gray.100'}>Emri / Mbiemri</FormLabel>
                                <Input p="2" width={'100%'} id="name" type="text" placeholder='' onInput={e => setNamelastName(e.target.value)} />
                                <FormLabel padding={'5px'} bg={'gray.100'}>Nr.personav</FormLabel>
                                <Input p="2" width={'100%'} id="personnumber" type="text" placeholder='' onInput={e => setPeopleNumber(e.target.value)} />
                                <FormLabel padding={'5px'} bg={'gray.100'}>Data lindjes</FormLabel>
                                <Input p="2" width={'100%'} id="date" type="date" placeholder='' onInput={e => setDateOfBirth(e.target.value)} />
                                <FormLabel padding={'5px'} bg={'gray.100'}>Nr.personal</FormLabel>
                                <Input p="2" width={'100%'} id="id" type="text" placeholder='' onInput={e => setIdNumber(e.target.value)} />
                                <FormLabel padding={'5px'} bg={'gray.100'}>Nr. tel</FormLabel>
                                <Input p="2" width={'100%'} id="phone" type="text" placeholder='' onInput={e => setPhone(e.target.value)} />
                                <FormLabel padding={'5px'} bg={'gray.100'} htmlFor='email'>Email</FormLabel>
                                <Input p="2" width={'100%'} id='email' type='email' placeholder='' onInput={e => setEmail(e.target.value)} />
                                <FormLabel padding={'5px'} bg={'gray.100'}>Adresa</FormLabel>
                                <Input p="2" width={'100%'} id="adress" type="text" placeholder='' onInput={e => setAdress(e.target.value)} />
                                <FormLabel padding={'5px'} bg={'gray.100'}>Qyteti</FormLabel>
                                <Input p="2" width={'100%'} id="city" type="text" placeholder='' onInput={e => setCity(e.target.value)} />
                                <FormLabel padding={'5px'} bg={'gray.100'}>Shteti</FormLabel>
                                <Input p="2" width={'100%'} id="country" type="text" placeholder='' onInput={e => setCountry(e.target.value)} />
                            </SimpleGrid>
                        </FormControl>
                        <Button p="4" marginTop="20px" marginBottom="20px" width="40%" bg={'blue.400'} color={'white'} type="submit">Dërgo</Button>
                    </Flex>
                </Collapse>
            </form>
            <form onSubmit={submitHandler5}>
                <Collapse in={isOpen5} animateOpacity>
                    <Flex flexDirection="column" p="2" align={'center'} >
                        <Heading align={'center'} as="h1" marginTop={'30px'} marginBottom={'30px'} color={'blue.400'}>KËRKESË PYETËSOR PËR SIGURIMIN 
                            <br></br>CIS & CIT
                        </Heading>
                        <FormControl width="90%">
                            <SimpleGrid columns={2} spacing={5}>
                                <FormLabel padding={'5px'} bg={'gray.100'}>Emri / Mbiemri</FormLabel>
                                <Input p="2" width={'100%'} id="name" type="text" placeholder='' onInput={e => setNamelastName(e.target.value)} />
                                <FormLabel padding={'5px'} bg={'gray.100'}>Nr.personav</FormLabel>
                                <Input p="2" width={'100%'} id="personnumber" type="text" placeholder='' onInput={e => setPeopleNumber(e.target.value)} />
                                <FormLabel padding={'5px'} bg={'gray.100'}>Data lindjes</FormLabel>
                                <Input p="2" width={'100%'} id="date" type="date" placeholder='' onInput={e => setDateOfBirth(e.target.value)} />
                                <FormLabel padding={'5px'} bg={'gray.100'}>Nr.personal</FormLabel>
                                <Input p="2" width={'100%'} id="id" type="text" placeholder='' onInput={e => setIdNumber(e.target.value)} />
                                <FormLabel padding={'5px'} bg={'gray.100'}>Nr. tel</FormLabel>
                                <Input p="2" width={'100%'} id="phone" type="text" placeholder='' onInput={e => setPhone(e.target.value)} />
                                <FormLabel padding={'5px'} bg={'gray.100'} htmlFor='email'>Email</FormLabel>
                                <Input p="2" width={'100%'} id='email' type='email' placeholder='' onInput={e => setEmail(e.target.value)} />
                                <FormLabel padding={'5px'} bg={'gray.100'}>Adresa</FormLabel>
                                <Input p="2" width={'100%'} id="adress" type="text" placeholder='' onInput={e => setAdress(e.target.value)} />
                                <FormLabel padding={'5px'} bg={'gray.100'}>Qyteti</FormLabel>
                                <Input p="2" width={'100%'} id="city" type="text" placeholder='' onInput={e => setCity(e.target.value)} />
                                <FormLabel padding={'5px'} bg={'gray.100'}>Shteti</FormLabel>
                                <Input p="2" width={'100%'} id="country" type="text" placeholder='' onInput={e => setCountry(e.target.value)} />
                            </SimpleGrid>
                        </FormControl>
                        <Button p="4" marginTop="20px" marginBottom="20px" width="40%" bg={'blue.400'} color={'white'} type="submit">Dërgo</Button>
                    </Flex>
                </Collapse>
            </form>
            <form onSubmit={submitHandler6}>
                <Collapse in={isOpen6} animateOpacity>
                    <Flex flexDirection="column" p="2" align={'center'} >
                        <Heading align={'center'} as="h1" marginTop={'30px'} marginBottom={'30px'} color={'blue.400'}>KËRKESË PYETËSOR PËR SIGURIMIN
                            <br></br>CARGO
                        </Heading>
                        <FormControl width="90%">
                            <SimpleGrid columns={2} spacing={5}>
                                <FormLabel padding={'5px'} bg={'gray.100'}>Emri / Mbiemri</FormLabel>
                                <Input p="2" width={'100%'} id="name" type="text" placeholder='' onInput={e => setNamelastName(e.target.value)} />
                                <FormLabel padding={'5px'} bg={'gray.100'}>Nr.personav</FormLabel>
                                <Input p="2" width={'100%'} id="personnumber" type="text" placeholder='' onInput={e => setPeopleNumber(e.target.value)} />
                                <FormLabel padding={'5px'} bg={'gray.100'}>Data lindjes</FormLabel>
                                <Input p="2" width={'100%'} id="date" type="date" placeholder='' onInput={e => setDateOfBirth(e.target.value)} />
                                <FormLabel padding={'5px'} bg={'gray.100'}>Nr.personal</FormLabel>
                                <Input p="2" width={'100%'} id="id" type="text" placeholder='' onInput={e => setIdNumber(e.target.value)} />
                                <FormLabel padding={'5px'} bg={'gray.100'}>Nr. tel</FormLabel>
                                <Input p="2" width={'100%'} id="phone" type="text" placeholder='' onInput={e => setPhone(e.target.value)} />
                                <FormLabel padding={'5px'} bg={'gray.100'} htmlFor='email'>Email</FormLabel>
                                <Input p="2" width={'100%'} id='email' type='email' placeholder='' onInput={e => setEmail(e.target.value)} />
                                <FormLabel padding={'5px'} bg={'gray.100'}>Adresa</FormLabel>
                                <Input p="2" width={'100%'} id="adress" type="text" placeholder='' onInput={e => setAdress(e.target.value)} />
                                <FormLabel padding={'5px'} bg={'gray.100'}>Qyteti</FormLabel>
                                <Input p="2" width={'100%'} id="city" type="text" placeholder='' onInput={e => setCity(e.target.value)} />
                                <FormLabel padding={'5px'} bg={'gray.100'}>Shteti</FormLabel>
                                <Input p="2" width={'100%'} id="country" type="text" placeholder='' onInput={e => setCountry(e.target.value)} />
                            </SimpleGrid>
                        </FormControl>
                        <Button p="4" marginTop="20px" marginBottom="20px" width="40%" bg={'blue.400'} color={'white'} type="submit">Dërgo</Button>
                    </Flex>
                </Collapse>
            </form>
        </Box>


    );
}