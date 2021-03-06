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

export default function SiguroShendetin() {
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
    const [namelastName, setNamelastName] = useState('');
    const [peopleNumber, setPeopleNumber] = useState('');
    const [idNumber, setIdNumber] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [adress, setAdress] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');


    const submitHandler3 = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('accessToken');
        if (!token) return;
        if (namelastName && idNumber && peopleNumber && phone && email && adress && city && country && dateOfBirth) {
            console.log(namelastName, idNumber, peopleNumber, phone, email, adress, city, country, dateOfBirth);
            const res = await axios.post(`${process.env.REACT_APP_API_BASEURL}/api/items/siguroShendetin3`, { namelastName, idNumber, peopleNumber, phone, email, adress, city, country, dateOfBirth}, {
                headers: { 'x-auth-token': token }
            });
            console.log(res);
        }
    };
    const submitHandler1 = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('accessToken');
        if (!token) return;
        if (namelastName && idNumber && phone && email && adress && city && country && dateOfBirth) {
            console.log(namelastName, idNumber, phone, email, adress, city, country, dateOfBirth);
            const res = await axios.post(`${process.env.REACT_APP_API_BASEURL}/api/items/siguroShendetin1`, { namelastName, idNumber, phone, email, adress, city, country, dateOfBirth}, {
                headers: { 'x-auth-token': token }
            });
            console.log(res);
        }
    };
    const submitHandler2 = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('accessToken');
        if (!token) return;
        if (namelastName && idNumber && peopleNumber && phone && email && adress && city && country && dateOfBirth) {
            console.log(namelastName, idNumber, peopleNumber, phone, email, adress, city, country, dateOfBirth);
            const res = await axios.post(`${process.env.REACT_APP_API_BASEURL}/api/items/siguroShendetin2`, { namelastName, idNumber, peopleNumber, phone, email, adress, city, country, dateOfBirth}, {
                headers: { 'x-auth-token': token }
            });
            console.log(res);
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
                                Sh??ndet??sor
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
                            '/IMG/SSH.jpg'
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
                        Sigurimi Individual
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
                        Sigurimi Familjar
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
                        Sigurimi Grupor
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
            <form onSubmit={submitHandler3}>
                <Collapse in={isOpen} animateOpacity>
                    <Heading align={'center'} as="h1" marginTop={'30px'} marginBottom={'30px'} color={'blue.400'}>
                    </Heading>
                    <Flex flexDirection="column" p="2" justifyContent="center" alignItems="center">
                        <Heading align={'center'} as="h1" marginTop={'30px'} marginBottom={'30px'} color={'blue.400'}>K??RKES?? PYET??SOR P??R SIGURIMIN SH??NDETIT
                            <br></br>GRUPOR</Heading>
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
                        <Button p="4" marginTop="20px" marginBottom="20px" width="40%" bg={'blue.400'} color={'white'} type="submit">D??rgo</Button>
                    </Flex>
                </Collapse>
            </form>
            <form onSubmit={submitHandler1}>
                <Collapse in={isOpen2} animateOpacity>
                    <Flex flexDirection="column" p="2" justifyContent="center" alignItems="center">
                        <Heading align={'center'} as="h1" marginTop={'30px'} marginBottom={'30px'} color={'blue.400'}>K??RKES?? PYET??SOR P??R SIGURIMIN SH??NDETIT
                            <br></br> INDIVIDUAL
                        </Heading>
                        <FormControl width="90%">
                            <SimpleGrid columns={2} spacing={5}>
                                <FormLabel padding={'5px'} bg={'gray.100'}>Emri / Mbiemri</FormLabel>
                                <Input p="2" width={'100%'} id="name" type="text" placeholder='' onInput={e => setNamelastName(e.target.value)} />
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
                        <Button p="4" marginTop="20px" marginBottom="20px" width="40%" bg={'blue.400'} color={'white'} type="submit">D??rgo</Button>
                    </Flex>
                </Collapse>
            </form>
            <form onSubmit={submitHandler2}>
                <Collapse in={isOpen3} animateOpacity>
                    <Flex flexDirection="column" p="2" align={'center'} >
                        <Heading align={'center'} as="h1" marginTop={'30px'} marginBottom={'30px'} color={'blue.400'}>K??RKES?? PYET??SOR P??R SIGURIMIN SH??NDETIT
                            <br></br> FAMILJAR
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
                        <Button p="4" marginTop="20px" marginBottom="20px" width="40%" bg={'blue.400'} color={'white'} type="submit">D??rgo</Button>
                    </Flex>
                </Collapse>
            </form>
        </SimpleGrid>
    );
}