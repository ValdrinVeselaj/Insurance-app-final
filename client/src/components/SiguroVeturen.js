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
    SimpleGrid,
    Radio,
    RadioGroup
} from "@chakra-ui/react";
import axios from 'axios';
import { useEffect, useState } from 'react';
import Success from "./Aproved";

export default function SiguroVeturen() {

    const [isNotSmallerScreen] = useMediaQuery("(min-width:768px)");
    const { isOpen, onToggle } = useDisclosure();
    const { isOpen: isOpen2, onToggle: onToggle2 } = useDisclosure();
    const { isOpen: isOpen3, onToggle: onToggle3 } = useDisclosure();
    const { isOpen: isOpen4, onToggle: onToggle4 } = useDisclosure();

    const toggleFirst = () => {
        if (isOpen2 && !isOpen) onToggle2();
        if (isOpen3 && !isOpen) onToggle3();
        if (isOpen4 && !isOpen) onToggle4();
        onToggle();
    };
    const toggleSecond = () => {
        if (isOpen && !isOpen2) onToggle();
        if (isOpen3 && !isOpen2) onToggle3();
        if (isOpen4 && !isOpen2) onToggle4();
        onToggle2();
    };
    const toggleThird = () => {
        if (isOpen && !isOpen3) onToggle();
        if (isOpen2 && !isOpen3) onToggle2();
        if (isOpen4 && !isOpen3) onToggle4();
        onToggle3();
    };
    // const toggleFourth = () => {
    //     if (isOpen && !isOpen4) onToggle();
    //     if (isOpen2 && !isOpen4) onToggle2();
    //     if (isOpen3 && !isOpen4) onToggle3();
    //     onToggle4();
    // };
    const [namelastName, setNamelastName] = useState('');
    const [namelastName2, setNamelastName2] = useState('');
    const [idNumber, setIdNumber] = useState('');
    const [phone, setPhone] = useState('');
    const [phone2, setPhone2] = useState('');
    const [modelType, setModelType] = useState('');
    const [plateNumber, setPlateNumber] = useState('');
    const [travelArea, setTravelArea] = useState('');
    const [coverage, setCoverage] = useState('');
    const [insured, setInsured] = useState('');
    const [adress, setAdress] = useState('');
    const [reprezantive, setReprenzative] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [dateOfBirth2, setDateOfBirth2] = useState('');
    const [profession, setProfession] = useState('');
    const [profession2, setProfession2] = useState('');
    const [deshmiAftesie, setDeshmiAftesie] = useState('');
    const [deshmiAftesie2, setDeshmiAftesie2] = useState('');
    const [gender, setGender] = useState('');
    const [gender2, setGender2] = useState('');
    const [accidents, setAccidents] = useState('');
    const [accidents2, setAccidents2] = useState('');
    const [accidentNumber, setAccidentNumber] = useState('');
    const [accidentNumber2, setAccidentNumber2] = useState('');
    const [fault, setFault] = useState('');
    const [fault2, setFault2] = useState('');
    const [driversLicenceTime, setDriversLicenceTime] = useState('');
    const [driversLicenceTime2, setDriversLicenceTime2] = useState('');
    const [driversLicenceTime3, setDriversLicenceTime3] = useState('');
    const [driversLicenceTime4, setDriversLicenceTime4] = useState('');
    const [carUsage, setCarUsage] = useState('');
    const [carUsage2, setCarUsage2] = useState('');
    const [chassisNumber, setChassisNumber] = useState('');
    const [engineDisplacement, setEngineDisplacement] = useState('');
    const [value, setValue] = useState('');
    const [alarm, setAlarm] = useState('');
    const [rental, setRental] = useState('');
    const [fuelEconomy, setFuelEconomy] = useState('');
    const [kmPerYear, setKmPerYear] = useState('');
    const [brand, setBrand] = useState('');
    const [color, setColor] = useState('');
    const [seats, setSeats] = useState('');
    const [year, setYear] = useState('');
    const [insuredPrice, setInsuredPrice] = useState('');
    const [carParking, setCarParking] = useState('');
    const [fuelType, setFuelType] = useState('');
    const [kmCrosed, setKmCrosed] = useState('');
    const [tplInsurance, setTplInsurance] = useState('');
    const [accidentalDamage, setAccidentalDamage] = useState('');
    const [glassBreaks, setGlassBreaks] = useState('');
    const [fire, setFire] = useState('');
    const [naturalCauses, setNaturalCauses] = useState('');
    const [robery, setRobery] = useState('');
    const [parkingHitAndRun, setParkingHitAndRun] = useState('');
    const [vandalisem, setVandalisem] = useState('');
    const [internacionalInsurance, setInternacionalInsurance] = useState('');
    const [allFilled, setAllFilled] = useState(false);
    const [formSubmited, setFormSubmited] = useState(false);



    const submitHandler2 = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('accessToken');
        if (!token) return;
        setFormSubmited(true);
        if (namelastName && idNumber && modelType && phone && plateNumber && travelArea && coverage) {
            console.log(namelastName, idNumber, modelType, phone, plateNumber, travelArea, coverage);
            const res = await axios.post(`${process.env.REACT_APP_API_BASEURL}/api/items/greenCard`, { namelastName, idNumber, modelType, phone, plateNumber, travelArea, coverage }, {
                headers: { 'x-auth-token': token }
            });
            if (isOpen && !isOpen4) onToggle();
            if (isOpen2 && !isOpen4) onToggle2();
            if (isOpen3 && !isOpen4) onToggle3();
            onToggle4();
            setAllFilled(true);
            console.log(res);
        }
    };
    const submitHandler1 = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('accessToken');
        if (!token) return;
        setFormSubmited(true);
        if (namelastName && idNumber && modelType && phone && plateNumber) {
            console.log(namelastName, idNumber, modelType, phone, plateNumber);
            const res = await axios.post(`${process.env.REACT_APP_API_BASEURL}/api/items/tpl`, { namelastName, idNumber, modelType, phone, plateNumber }, {
                headers: { 'x-auth-token': token }
            });
            if (isOpen && !isOpen4) onToggle();
            if (isOpen2 && !isOpen4) onToggle2();
            if (isOpen3 && !isOpen4) onToggle3();
            onToggle4();
            setAllFilled(true);
            console.log(res);
        }
    };
    const submitHandler3 = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('accessToken');
        if (!token) return;
        setFormSubmited(true);
        if (namelastName && modelType && phone && plateNumber && coverage && insured && adress && reprezantive && dateOfBirth
            && profession && deshmiAftesie && gender && accidents && accidentNumber && fault && driversLicenceTime && carUsage && chassisNumber && engineDisplacement
            && value && alarm && rental && fuelEconomy && kmPerYear && brand && color && seats && year && insuredPrice && carParking && fuelType && kmCrosed
            && tplInsurance && accidentalDamage && glassBreaks && fire && naturalCauses && robery && parkingHitAndRun && vandalisem && internacionalInsurance
            ) {
            console.log(namelastName, modelType, phone, plateNumber, coverage, insured,
                adress, reprezantive, dateOfBirth, profession, deshmiAftesie, gender, accidents, accidentNumber, fault, driversLicenceTime, carUsage, chassisNumber,
                engineDisplacement, value, alarm, rental, fuelEconomy, kmPerYear, brand, color, seats, year, insuredPrice, carParking, fuelType, kmCrosed, tplInsurance,
                accidentalDamage, glassBreaks, fire, naturalCauses, robery, parkingHitAndRun, vandalisem, internacionalInsurance, namelastName2, phone2, dateOfBirth2,
                driversLicenceTime3, driversLicenceTime4, profession2, deshmiAftesie2, gender2, accidents2, accidentNumber2, fault2, driversLicenceTime2, carUsage2);
            const res = await axios.post(`${process.env.REACT_APP_API_BASEURL}/api/items/kasko`, {
                namelastName, modelType, phone, plateNumber, coverage, insured,
                adress, reprezantive, dateOfBirth, profession, deshmiAftesie, gender, accidents, accidentNumber, fault, driversLicenceTime, carUsage, chassisNumber,
                engineDisplacement, value, alarm, rental, fuelEconomy, kmPerYear, brand, color, seats, year, insuredPrice, carParking, fuelType, kmCrosed, tplInsurance,
                accidentalDamage, glassBreaks, fire, naturalCauses, robery, parkingHitAndRun, vandalisem, internacionalInsurance, namelastName2, phone2, dateOfBirth2,
                profession2, deshmiAftesie2, gender2, accidents2, accidentNumber2, fault2, driversLicenceTime2, driversLicenceTime3, driversLicenceTime4, carUsage2
            }, {
                headers: { 'x-auth-token': token }
            });
            if (isOpen && !isOpen4) onToggle();
            if (isOpen2 && !isOpen4) onToggle2();
            if (isOpen3 && !isOpen4) onToggle3();
            onToggle4();
            setAllFilled(true);
            console.log(res);
        }
    };
    return (
        <>
            <SimpleGrid >
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
                                    Sigurimet
                                </Text>
                                <br />{' '}
                                <Text color={'blue.400'} as={'span'}>
                                    Për automjete
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
                                Bleje online
                            </Button>
                        </Stack>
                    </Flex>
                    <Flex flex={1}>
                        <Image
                            alt={'Login Image'}
                            objectFit={'cover'}
                            src={
                                '/IMG/SV.jpg'
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
                            Sigurimi i obligueshëm i automjetit TPL
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
                            Sigurimi i automjetit me karton jeshil për udhëtim jasht vendi
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
                            Sigurimi i automjetit <br /> KASKO
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
                        <Flex flexDirection="column" p="2" justifyContent="center" alignItems="center">
                            <Heading align={'center'} as="h1" marginTop={'30px'} marginBottom={'30px'} color={'blue.400'}>KËRKESË PYETËSOR PËR SIGURIMIN E VETË MJETIT MOTORIK
                                <br></br> KASKO
                            </Heading>
                            <FormControl isInvalid={formSubmited && !insured}>
                                <SimpleGrid columns={2} spacing={5}>
                                    <FormLabel padding={'5px'} height={'69%'} bg={'gray.100'}>I Siguruari</FormLabel>
                                    <Input p="2" marginBottom="20px" width="100%" id="insured" type="text" placeholder='' onInput={e => setInsured(e.target.value)} />
                                </SimpleGrid>
                            </FormControl>
                            <FormControl isInvalid={formSubmited && !adress}>
                                <SimpleGrid columns={2} spacing={5}>
                                    <FormLabel padding={'5px'} height={'69%'} bg={'gray.100'}>Adresa / Tel</FormLabel>
                                    <Input p="2" marginBottom="20px" width="100%" id="adress" type="text" placeholder='' onInput={e => setAdress(e.target.value)} />
                                </SimpleGrid>
                            </FormControl>
                            <FormControl isInvalid={formSubmited && !coverage}>
                                <SimpleGrid columns={2} spacing={5}>
                                    <FormLabel padding={'5px'} height={'69%'} bg={'gray.100'}>Periudha e Sigurimit</FormLabel>
                                    <Input p="2" marginBottom="20px" width="100%" id="coverage" type="text" placeholder='' onInput={e => setCoverage(e.target.value)} />
                                </SimpleGrid>
                            </FormControl>
                            <FormControl isInvalid={formSubmited && !reprezantive}>
                                <SimpleGrid columns={2} spacing={5}>
                                    <FormLabel padding={'5px'} height={'69%'} bg={'gray.100'}>Emri i personit përfaqësues</FormLabel>
                                    <Input p="2" marginBottom="20px" width="100%" id="reprezantive" type="text" placeholder='' onInput={e => setReprenzative(e.target.value)} />
                                </SimpleGrid>
                            </FormControl>
                            <SimpleGrid paddingTop={'40px'} columns={3} spacing={5}>
                                <Heading color={'blue.400'}>TË DHËNAT PËR PËRDORUESIN E MJETIT MOTORIK</Heading>
                                <Heading color={'blue.400'}>Përdoruesi 1</Heading>
                                <Heading color={'blue.400'}>Përdoruesi 2</Heading>
                            </SimpleGrid>
                            <FormControl isInvalid={formSubmited && !namelastName}>
                                <SimpleGrid paddingTop={'40px'} columns={3} spacing={5}>
                                    <FormLabel padding={'5px'} bg={'gray.100'}>Emri / Mbiemri</FormLabel>
                                    <Input p="2" width={'100%'} id="namelastName" type="text" placeholder='' onInput={e => setNamelastName(e.target.value)} />
                                    <FormControl>
                                        <Input p="2" width={'100%'} id="namelastName" type="text" placeholder='' onInput={e => setNamelastName2(e.target.value)} />
                                    </FormControl>
                                </SimpleGrid>
                            </FormControl>
                            <FormControl isInvalid={formSubmited && !dateOfBirth}>
                                <SimpleGrid paddingTop={'40px'} columns={3} spacing={5}>
                                    <FormLabel padding={'5px'} bg={'gray.100'}>Datëlindja</FormLabel>
                                    <Input p="2" width={'100%'} id="dateOfBirth" type="date" onInput={e => setDateOfBirth(e.target.value)} />
                                    <FormControl>
                                        <Input p="2" width={'100%'} id="dateOfBirth" type="date" onInput={e => setDateOfBirth2(e.target.value)} />
                                    </FormControl>
                                </SimpleGrid>
                            </FormControl>
                            <FormControl isInvalid={formSubmited && !profession}>
                                <SimpleGrid paddingTop={'40px'} columns={3} spacing={5}>
                                    <FormLabel padding={'5px'} bg={'gray.100'}>Profesioni</FormLabel>
                                    <Input p="2" width={'100%'} id="profession" type="text" placeholder='' onInput={e => setProfession(e.target.value)} />
                                    <FormControl>
                                        <Input p="2" width={'100%'} id="profession" type="text" placeholder='' onInput={e => setProfession2(e.target.value)} />
                                    </FormControl>
                                </SimpleGrid>
                            </FormControl>
                            <FormControl isInvalid={formSubmited && !phone}>
                                <SimpleGrid paddingTop={'40px'} columns={3} spacing={5}>
                                    <FormLabel padding={'5px'} bg={'gray.100'}>Telefoni</FormLabel>
                                    <Input p="2" width={'100%'} id="phone" type="text" placeholder='' onInput={e => setPhone(e.target.value)} />
                                    <FormControl>
                                        <Input p="2" width={'100%'} id="phone" type="text" placeholder='' onInput={e => setPhone2(e.target.value)} />
                                    </FormControl>
                                </SimpleGrid>
                            </FormControl>
                            <FormControl isInvalid={formSubmited && !deshmiAftesie}>
                                <SimpleGrid paddingTop={'40px'} columns={3} spacing={5}>
                                    <FormLabel padding={'5px'} bg={'gray.100'}>Dëshmi Aftësie dt.</FormLabel>
                                    <Input p="2" width={'100%'} id="deshmiAftesie" type="date" onInput={e => setDeshmiAftesie(e.target.value)} />
                                    <FormControl>
                                        <Input p="2" width={'100%'} id="deshmiAftesie" type="date" onInput={e => setDeshmiAftesie2(e.target.value)} />
                                    </FormControl>
                                </SimpleGrid>
                            </FormControl>
                            <FormControl isInvalid={formSubmited && !gender}>
                                <SimpleGrid paddingTop={'40px'} columns={3} spacing={5}>
                                    <FormLabel padding={'5px'} bg={'gray.100'}>Gjinia</FormLabel>
                                    <Select p="2" width={'100%'} id="gender" type="date" placeholder='' onInput={e => setGender(e.target.value)}>
                                        <option>Zgjidh gjinin</option>
                                        <option>Mashkull</option>
                                        <option>Femër</option>
                                        <option>Tjetër</option>
                                    </Select>
                                    <FormControl>
                                        <Select p="2" width={'100%'} id="gender" type="date" placeholder='' onInput={e => setGender2(e.target.value)} >
                                            <option>Zgjidh gjinin</option>
                                            <option>Mashkull</option>
                                            <option>Femër</option>
                                            <option>Tjetër</option>
                                        </Select>
                                    </FormControl>
                                </SimpleGrid>
                            </FormControl>
                            <FormControl isInvalid={formSubmited && !accidents}>
                                <SimpleGrid paddingTop={'40px'} columns={3} spacing={5}>
                                    <FormLabel padding={'5px'} bg={'gray.100'}>Përfshira në aksidente </FormLabel>
                                    <Select p="2" width="100%" id="accidents" type="date" placeholder='' onInput={e => setAccidents(e.target.value)} >
                                        <option>Përgjigju po ose jo</option>
                                        <option>Po</option>
                                        <option>Jo</option>
                                    </Select>
                                    <FormControl>
                                        <Select p="2" width="100%" id="accidents" type="date" placeholder='' onInput={e => setAccidents2(e.target.value)} >
                                            <option>Përgjigju po ose jo</option>
                                            <option>Po</option>
                                            <option>Jo</option>
                                        </Select>
                                    </FormControl>
                                </SimpleGrid>
                            </FormControl>
                            <FormControl isInvalid={formSubmited && !accidentNumber}>
                                <SimpleGrid paddingTop={'40px'} columns={3} spacing={5}>
                                    <FormLabel padding={'5px'} bg={'gray.100'}>Nëse po sa herë</FormLabel>
                                    <Input p="2" width="100%" id="plateNumber" type="text" onInput={e => setAccidentNumber(e.target.value)} />
                                    <FormControl>
                                    <Input p="2" width="100%" id="plateNumber" type="text" onInput={e => setAccidentNumber2(e.target.value)} />
                                    </FormControl>
                                </SimpleGrid>
                            </FormControl>
                            <FormControl isInvalid={formSubmited && !fault}>
                                <SimpleGrid paddingTop={'40px'} columns={3} spacing={5}>
                                    <FormLabel padding={'5px'} height={'55%'} bg={'gray.100'}>Shkaktar / I dëmtuar</FormLabel>
                                    <Select p="2" width="100%" id="fault" type="date" placeholder='' onInput={e => setFault(e.target.value)}>
                                        <option>Kush është fajtori</option>
                                        <option>Shkaktar</option>
                                        <option>I dëmtuar</option>
                                    </Select>
                                    <FormControl>
                                        <Select p="2" width="100%" id="fault" type="date" placeholder='' onInput={e => setFault2(e.target.value)}>
                                            <option>Kush është fajtori</option>
                                            <option>Shkaktar</option>
                                            <option>I dëmtuar</option>
                                        </Select>
                                    </FormControl>
                                </SimpleGrid>
                            </FormControl>
                            <FormControl isInvalid={formSubmited && !driversLicenceTime}>
                                <SimpleGrid paddingTop={'40px'} columns={3} spacing={5}>
                                    <FormLabel padding={'5px'} height={'40%'} bg={'gray.100'}>Përdorimi i Patentës, koha</FormLabel>
                                    <Stack>
                                        <Input p="2" width="100%" id="driversLicenceTime" type="date" onInput={e => setDriversLicenceTime(e.target.value)} />
                                        <Input p="2" width="100%" id="driversLicenceTime" type="date" onInput={e => setDriversLicenceTime2(e.target.value)} />
                                    </Stack>
                                    <FormControl>
                                        <Stack>
                                            <Input p="2" width="100%" id="driversLicenceTime" type="date" onInput={e => setDriversLicenceTime3(e.target.value)} />
                                            <Input p="2" width="100%" id="driversLicenceTime" type="date" onInput={e => setDriversLicenceTime4(e.target.value)} />
                                        </Stack>
                                    </FormControl>
                                </SimpleGrid>
                            </FormControl>
                            <FormControl isInvalid={formSubmited && !carUsage}>
                                <SimpleGrid paddingTop={'40px'} columns={3} spacing={5}>
                                    <FormLabel padding={'5px'} height={'85%'} bg={'gray.100'}>Përdorimi i mjetit</FormLabel>
                                    <Select p="2" width="100%" id="carUsage" type="date" placeholder='' onInput={e => setCarUsage(e.target.value)} >
                                        <option>Përdorimi i veturës</option>
                                        <option>Familjar</option>
                                        <option>Taksi</option>
                                        <option>Biznes</option>
                                    </Select>
                                    <FormControl>
                                        <Select p="2" width="100%" id="carUsage" type="date" placeholder='' onInput={e => setCarUsage2(e.target.value)} >
                                            <option>Përdorimi i veturës</option>
                                            <option>Familjar</option>
                                            <option>Taksi</option>
                                            <option>Biznes</option>
                                        </Select>
                                    </FormControl>
                                </SimpleGrid>
                            </FormControl>
                            <Divider marginTop="5" />
                            <Heading paddingTop={'20px'} paddingBottom={'20px'} color={'blue.400'}>TË DHËNAT PËR MJETIN MOTORIK</Heading>
                            <FormControl isInvalid={formSubmited && !plateNumber}>
                                <SimpleGrid columns={2} spacing={5}>
                                    <FormLabel padding={'5px'} height={'85%'} bg={'gray.100'}>Targa</FormLabel>
                                    <Input p="2" width="100%" id="plateNumber" type="text" onInput={e => setPlateNumber(e.target.value)} />
                                </SimpleGrid>
                            </FormControl>
                            <FormControl isInvalid={formSubmited && !brand}>
                                <SimpleGrid columns={2} spacing={5}>
                                    <FormLabel padding={'5px'} height={'85%'} bg={'gray.100'}>Marka</FormLabel>
                                    <Input p="2" width="100%" id="brand" type="text" onInput={e => setBrand(e.target.value)} />
                                </SimpleGrid>
                            </FormControl>
                            <FormControl isInvalid={formSubmited && !modelType}>
                                <SimpleGrid columns={2} spacing={5}>
                                    <FormLabel padding={'5px'} height={'85%'} bg={'gray.100'}>Modeli</FormLabel>
                                    <Input p="2" width="100%" id="modelType" type="text" onInput={e => setModelType(e.target.value)} />
                                </SimpleGrid>
                            </FormControl>
                            <FormControl isInvalid={formSubmited && !color}>
                                <SimpleGrid columns={2} spacing={5}>
                                    <FormLabel padding={'5px'} height={'85%'} bg={'gray.100'}>Ngjyra</FormLabel>
                                    <Input p="2" width="100%" id="color" type="text" onInput={e => setColor(e.target.value)} />
                                </SimpleGrid>
                            </FormControl>
                            <FormControl isInvalid={formSubmited && !chassisNumber}>
                                <SimpleGrid columns={2} spacing={5}>
                                    <FormLabel padding={'5px'} height={'85%'} bg={'gray.100'}>Nr. i Shasisë</FormLabel>
                                    <Input p="2" width="100%" id="chassisNumber" type="text" onInput={e => setChassisNumber(e.target.value)} />
                                </SimpleGrid>
                            </FormControl>
                            <FormControl isInvalid={formSubmited && !seats}>
                                <SimpleGrid columns={2} spacing={5}>
                                    <FormLabel padding={'5px'} height={'85%'} bg={'gray.100'}>Nr. vendeve</FormLabel>
                                    <Input p="2" width="100%" id="seats" type="text" onInput={e => setSeats(e.target.value)} />
                                </SimpleGrid>
                            </FormControl>
                            <FormControl isInvalid={formSubmited && !engineDisplacement}>
                                <SimpleGrid columns={2} spacing={5}>
                                    <FormLabel padding={'5px'} height={'85%'} bg={'gray.100'}>Fuqia motorike</FormLabel>
                                    <Input p="2" width="100%" id="engineDisplacement" type="text" onInput={e => setEngineDisplacement(e.target.value)} />
                                </SimpleGrid>
                            </FormControl>
                            <FormControl isInvalid={formSubmited && !year}>
                                <SimpleGrid columns={2} spacing={5}>
                                    <FormLabel padding={'5px'} height={'85%'} bg={'gray.100'}>Viti i Prodh.</FormLabel>
                                    <Input p="2" width="100%" id="year" type="text" onInput={e => setYear(e.target.value)} />
                                </SimpleGrid>
                            </FormControl>
                            <FormControl isInvalid={formSubmited && !value}>
                                <SimpleGrid columns={2} spacing={5}>
                                    <FormLabel padding={'5px'} height={'85%'} bg={'gray.100'}>Vlera e brerjes</FormLabel>
                                    <Input p="2" width="100%" id="value" type="text" onInput={e => setValue(e.target.value)} />
                                </SimpleGrid>
                            </FormControl>
                            <FormControl isInvalid={formSubmited && !insuredPrice}>
                                <SimpleGrid columns={2} spacing={5}>
                                    <FormLabel padding={'5px'} height={'85%'} bg={'gray.100'}>Shuma e siguruar</FormLabel>
                                    <Input p="2" width="100%" id="insuredPrice" type="text" onInput={e => setInsuredPrice(e.target.value)} />
                                </SimpleGrid>
                            </FormControl>
                            <FormControl isInvalid={formSubmited && !alarm}>
                                <SimpleGrid columns={2} spacing={5}>
                                    <FormLabel padding={'5px'} height={'85%'} bg={'gray.100'}>Sistem alarmi</FormLabel>
                                    <Input p="2" width="100%" id="alarm" type="text" onInput={e => setAlarm(e.target.value)} />
                                </SimpleGrid>
                            </FormControl>
                            <FormControl isInvalid={formSubmited && !carParking}>
                                <SimpleGrid columns={2} spacing={5}>
                                    <FormLabel padding={'5px'} height={'85%'} bg={'gray.100'}>Parkimi</FormLabel>
                                    <Input p="2" width="100%" id="carParking" type="text" onInput={e => setCarParking(e.target.value)} />
                                </SimpleGrid>
                            </FormControl>
                            <FormControl isInvalid={formSubmited && !rental}>
                                <SimpleGrid columns={2} spacing={5}>
                                    <FormLabel padding={'5px'} height={'85%'} bg={'gray.100'}>Jepet me qera</FormLabel>
                                    <Input p="2" width="100%" id="rental" type="text" onInput={e => setRental(e.target.value)} />
                                </SimpleGrid>
                            </FormControl>
                            <FormControl isInvalid={formSubmited && !fuelType}>
                                <SimpleGrid columns={2} spacing={5}>
                                    <FormLabel padding={'5px'} height={'85%'} bg={'gray.100'}>Lloji i karburanit</FormLabel>
                                    <Input p="2" width="100%" id="fuelType" type="text" onInput={e => setFuelType(e.target.value)} />
                                </SimpleGrid>
                            </FormControl>
                            <FormControl isInvalid={formSubmited && !fuelEconomy}>
                                <SimpleGrid columns={2} spacing={5}>
                                    <FormLabel padding={'5px'} height={'85%'} bg={'gray.100'}>Konsumi/100km</FormLabel>
                                    <Input p="2" width="100%" id="fuelEconomy" type="text" onInput={e => setFuelEconomy(e.target.value)} />
                                </SimpleGrid>
                            </FormControl>
                            <FormControl isInvalid={formSubmited && !kmCrosed}>
                                <SimpleGrid columns={2} spacing={5}>
                                    <FormLabel padding={'5px'} height={'85%'} bg={'gray.100'}>Kilometrat e përshkruar</FormLabel>
                                    <Input p="2" width="100%" id="kmCrosed" type="text" onInput={e => setKmCrosed(e.target.value)} />
                                </SimpleGrid>
                            </FormControl>
                            <FormControl isInvalid={formSubmited && !kmPerYear}>
                                <SimpleGrid columns={2} spacing={5}>
                                    <FormLabel padding={'5px'} height={'85%'} bg={'gray.100'}>Kilometra/vit</FormLabel>
                                    <Input p="2" width="100%" id="kmPerYear" type="text" onInput={e => setKmPerYear(e.target.value)} />
                                </SimpleGrid>
                            </FormControl>
                            <FormControl isInvalid={formSubmited && !tplInsurance}>
                                <SimpleGrid columns={2} spacing={5}>
                                    <FormLabel padding={'5px'} height={'85%'} bg={'gray.100'}>Sigurimi TPL</FormLabel>
                                    <Input p="2" width="100%" id="tplInsurance" type="text" onInput={e => setTplInsurance(e.target.value)} />
                                </SimpleGrid>
                            </FormControl>
                            <Divider marginTop="5" />
                            <Heading paddingTop={'20px'} paddingBottom={'20px'} color={'blue.400'}>RREZIQET QË DËSHIRONI TË SIGURONI </Heading>
                            <FormControl isInvalid={formSubmited && !fire}>
                                <SimpleGrid columns={2} spacing={5}>
                                    <FormLabel padding={'5px'} bg={'gray.100'}>Zjarr, Rrufe, Eksplozion </FormLabel>
                                    <Select p="2" width="100%" id="fire" type="date" placeholder='' onInput={e => setFire(e.target.value)} >
                                        <option>Përgjigju po ose jo</option>
                                        <option>Po</option>
                                        <option>Jo</option>
                                    </Select>
                                </SimpleGrid>
                            </FormControl>
                            <FormControl isInvalid={formSubmited && !glassBreaks}>
                                <SimpleGrid columns={2} spacing={5}>
                                    <FormLabel padding={'5px'} bg={'gray.100'}>Thyerja Xhamave </FormLabel>
                                    <Select p="2" width="100%" id="glassBreaks" type="date" placeholder='' onInput={e => setGlassBreaks(e.target.value)}  >
                                        <option>Përgjigju po ose jo</option>
                                        <option>Po</option>
                                        <option>Jo</option>
                                    </Select>
                                </SimpleGrid>
                            </FormControl>
                            <FormControl isInvalid={formSubmited && !naturalCauses}>
                                <SimpleGrid columns={2} spacing={5}>
                                    <FormLabel padding={'5px'} bg={'gray.100'}>Katastrofat Natyrore </FormLabel>
                                    <Select p="2" width="100%" id="naturalCauses" type="date" placeholder='' onInput={e => setNaturalCauses(e.target.value)} >
                                        <option>Përgjigju po ose jo</option>
                                        <option>Po</option>
                                        <option>Jo</option>
                                    </Select>
                                </SimpleGrid>
                            </FormControl>
                            <FormControl isInvalid={formSubmited && !robery}>
                                <SimpleGrid columns={2} spacing={5}>
                                    <FormLabel padding={'5px'} bg={'gray.100'}>Vjedhje, tentativë për vjedhje, vjedhje me dhunë</FormLabel>
                                    <Select p="2" width="100%" id="robery" type="date" placeholder='' onInput={e => setRobery(e.target.value)} >
                                        <option>Përgjigju po ose jo</option>
                                        <option>Po</option>
                                        <option>Jo</option>
                                    </Select>
                                </SimpleGrid>
                            </FormControl>
                            <FormControl isInvalid={formSubmited && !parkingHitAndRun}>
                                <SimpleGrid columns={2} spacing={5}>
                                    <FormLabel padding={'5px'} bg={'gray.100'}>Dëmtimi në parkim pa autor </FormLabel>
                                    <Select p="2" width="100%" id="parkingHitAndRun" type="date" placeholder='' onInput={e => setParkingHitAndRun(e.target.value)}>
                                        <option>Përgjigju po ose jo</option>
                                        <option>Po</option>
                                        <option>Jo</option>
                                    </Select>
                                </SimpleGrid>
                            </FormControl>
                            <FormControl isInvalid={formSubmited && !vandalisem}>
                                <SimpleGrid columns={2} spacing={5}>
                                    <FormLabel padding={'5px'} bg={'gray.100'}>Dëmtimi nga akte keqdashëse</FormLabel>
                                    <Select p="2" width="100%" id="vandalisem" type="date" placeholder='' onInput={e => setVandalisem(e.target.value)} >
                                        <option>Përgjigju po ose jo</option>
                                        <option>Po</option>
                                        <option>Jo</option>
                                    </Select>
                                </SimpleGrid>
                            </FormControl>
                            <FormControl isInvalid={formSubmited && !internacionalInsurance}>
                                <SimpleGrid columns={2} spacing={5}>
                                    <FormLabel padding={'5px'} bg={'gray.100'}>Sigurimi jashtë vendit </FormLabel>
                                    <Select p="2" width="100%" id="internacionalInsurance" type="date" placeholder='' onInput={e => setInternacionalInsurance(e.target.value)}>
                                        <option>Përgjigju po ose jo</option>
                                        <option>Po</option>
                                        <option>Jo</option>
                                    </Select>
                                </SimpleGrid>
                            </FormControl>
                            <FormControl isInvalid={formSubmited && !accidentalDamage}>
                                <SimpleGrid columns={2} spacing={5}>
                                    <FormLabel padding={'5px'} bg={'gray.100'}>Dëmtime Aksidentale </FormLabel>
                                    <Select p="2" width="100%" id="accidentalDamage" type="date" placeholder='' onInput={e => setAccidentalDamage(e.target.value)}>
                                        <option>Përgjigju po ose jo</option>
                                        <option>Po</option>
                                        <option>Jo</option>
                                    </Select>
                                </SimpleGrid>
                            </FormControl>
                            <Button p="4" marginTop="20px" marginBottom="20px" width="40%" bg={'blue.400'} color={'white'} type="submit">Dërgo</Button>
                        </Flex>
                    </Collapse>
                </form>
                <form onSubmit={submitHandler1}>
                    <Collapse in={isOpen2} animateOpacity>
                        <Flex flexDirection="column" p="2" justifyContent="center" alignItems="center">
                            <Heading align={'center'} as="h1" marginTop={'30px'} marginBottom={'30px'} color={'blue.400'}>KËRKESË PYETËSOR PËR SIGURIMIN E VETË MJETIT MOTORIK
                                <br></br> TPL
                            </Heading>
                            <FormControl isInvalid={formSubmited && !namelastName}>
                                <SimpleGrid columns={2} spacing={2}>
                                    <FormLabel padding={'8px'} bg={'gray.100'}>Emri / Mbiemri</FormLabel>
                                    <Input p="2" width={'100%'} id="name" type="text" placeholder='' onInput={e => setNamelastName(e.target.value)} />
                                </SimpleGrid>
                            </FormControl>
                            <FormControl isInvalid={formSubmited && !idNumber}>
                                <SimpleGrid columns={2} spacing={2}>
                                    <FormLabel padding={'8px'} bg={'gray.100'}>Nr.personal</FormLabel>
                                    <Input p="2" width={'100%'} id="id" type="text" placeholder='' onInput={e => setIdNumber(e.target.value)} />
                                </SimpleGrid>
                            </FormControl>
                            <FormControl isInvalid={formSubmited && !phone}>
                                <SimpleGrid columns={2} spacing={2}>
                                    <FormLabel padding={'8px'} bg={'gray.100'}>Nr tel</FormLabel>
                                    <Input p="2" width={'100%'} id="phone" type="text" placeholder='' onInput={e => setPhone(e.target.value)} />
                                </SimpleGrid>
                            </FormControl>
                            <FormControl isInvalid={formSubmited && !modelType}>
                                <SimpleGrid columns={2} spacing={2}>
                                    <FormLabel padding={'8px'} bg={'gray.100'}>Lloji I automjetit</FormLabel>
                                    <Input p="2" width={'100%'} id="type" type="text" placeholder='' onInput={e => setModelType(e.target.value)} />
                                </SimpleGrid>
                            </FormControl>
                            <FormControl isInvalid={formSubmited && !plateNumber}>
                                <SimpleGrid columns={2} spacing={2}>
                                    <FormLabel padding={'8px'} bg={'gray.100'}>Nr.i targave</FormLabel>
                                    <Input p="2" width={'100%'} id="plate" type="text" placeholder='' onInput={e => setPlateNumber(e.target.value)} />
                                </SimpleGrid>
                            </FormControl>
                            <Button p="4" marginTop="20px" marginBottom="20px" width="40%" bg={'blue.400'} color={'white'} type="submit">Dërgo</Button>
                        </Flex>
                    </Collapse>
                </form>
                <form onSubmit={submitHandler2}>
                    <Collapse in={isOpen3} animateOpacity>
                        <Flex flexDirection="column" p="2" justifyContent="center" alignItems="center">
                            <Heading align={'center'} as="h1" marginTop={'30px'} marginBottom={'30px'} color={'blue.400'}>KËRKESË PYETËSOR PËR SIGURIMIN E VETË MJETIT MOTORIK ME
                                <br></br> KARTON JESHIL
                            </Heading>
                            <FormControl isInvalid={formSubmited && !namelastName}>
                                <SimpleGrid columns={2} spacing={2}>
                                    <FormLabel padding={'8px'} bg={'gray.100'}>Emri / Mbiemri</FormLabel>
                                    <Input p="2" width={'100%'} id="name" type="text" placeholder='' onInput={e => setNamelastName(e.target.value)} />
                                </SimpleGrid>
                            </FormControl>
                            <FormControl isInvalid={formSubmited && !idNumber}>
                                <SimpleGrid columns={2} spacing={2}>
                                    <FormLabel padding={'8px'} bg={'gray.100'}>Nr.personal</FormLabel>
                                    <Input p="2" width={'100%'} id="id" type="text" placeholder='' onInput={e => setIdNumber(e.target.value)} />
                                </SimpleGrid>
                            </FormControl>
                            <FormControl isInvalid={formSubmited && !phone}>
                                <SimpleGrid columns={2} spacing={2}>
                                    <FormLabel padding={'8px'} bg={'gray.100'}>Nr tel</FormLabel>
                                    <Input p="2" width={'100%'} id="phone" type="text" placeholder='' onInput={e => setPhone(e.target.value)} />
                                </SimpleGrid>
                            </FormControl>
                            <FormControl isInvalid={formSubmited && !modelType}>
                                <SimpleGrid columns={2} spacing={2}>
                                    <FormLabel padding={'8px'} bg={'gray.100'}>Lloji I automjetit</FormLabel>
                                    <Input p="2" width={'100%'} id="type" type="text" placeholder='' onInput={e => setModelType(e.target.value)} />
                                </SimpleGrid>
                            </FormControl>
                            <FormControl isInvalid={formSubmited && !plateNumber}>
                                <SimpleGrid columns={2} spacing={2}>
                                    <FormLabel padding={'8px'} bg={'gray.100'}>Nr.i targave</FormLabel>
                                    <Input p="2" width={'100%'} id="plate" type="text" placeholder='' onInput={e => setPlateNumber(e.target.value)} />
                                </SimpleGrid>
                            </FormControl>
                            <FormControl isInvalid={formSubmited && !travelArea}>
                                <SimpleGrid columns={2} spacing={2}>
                                    <FormLabel padding={'5px'} bg={'gray.100'}>Zona e udhëtimit</FormLabel>
                                    <Select p="2" width="100%" id="area" type="date" placeholder='Zona e udhëtimit' onInput={e => setTravelArea(e.target.value)}>
                                        <option>Për rreth</option>
                                        <option>Gjitha shtetet</option>
                                    </Select>
                                </SimpleGrid>
                            </FormControl>
                            <FormControl isInvalid={formSubmited && !coverage}>
                                <SimpleGrid columns={2} spacing={2}>
                                    <FormLabel padding={'5px'} bg={'gray.100'}>Periudha e sigurimit</FormLabel>
                                    <Select p="2" width="100%" id="coverage" type="date" placeholder='Periudha e sigurimit' onInput={e => setCoverage(e.target.value)}>
                                        <option>15 ditë</option>
                                        <option>30 ditë</option>
                                        <option>60 dittë</option>
                                    </Select>
                                </SimpleGrid>
                            </FormControl>
                            <Button p="4" marginTop="20px" marginBottom="20px" width="40%" bg={'blue.400'} color={'white'} type="submit">Dërgo</Button>
                        </Flex>
                    </Collapse>
                </form>
            </SimpleGrid>
            <SimpleGrid>
                {
                    allFilled &&
                    <Collapse in={isOpen4} animateOpacity>
                        <Success />
                    </Collapse>
                }
            </SimpleGrid>
        </>
    );
}