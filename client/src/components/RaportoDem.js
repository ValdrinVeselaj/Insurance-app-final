import React from 'react'
import { useMediaQuery } from '@chakra-ui/media-query';
import {
    Box,
    Flex,
    Text,
    Heading,
    useDisclosure,
    Button,
    Collapse,
    FormControl,
    FormLabel,
    Divider,
    Input,
    Stack,
    Checkbox,
    Select,
    Textarea,
    SimpleGrid,
    Wrap,
    WrapItem,
    Center
} from '@chakra-ui/react';
import Icon from '@chakra-ui/icon';
import { AiFillCar, } from "react-icons/ai";
import { GiHeartBeats, } from "react-icons/gi";
import axios from 'axios';
import { useEffect, useState } from 'react';
import Success from "./Aproved";


function RPD() {
    const [isNotSmallerScreen] = useMediaQuery("(min-width:768px)");
    const { isOpen, onToggle } = useDisclosure();
    const { isOpen: isOpen2, onToggle: onToggle2 } = useDisclosure();
    const { isOpen: isOpen3, onToggle: onToggle3 } = useDisclosure();

    const toggleFirst = () => {
        if (isOpen2 && !isOpen) onToggle2();
        onToggle();
    };
    const toggleSecond = () => {
        if (isOpen && !isOpen2) onToggle();
        onToggle2();
    };

    const [namelastName, setNamelastName] = useState('');
    const [email, setEmail] = useState('');
    const [idNumber, setIdNumber] = useState('');
    const [phone, setPhone] = useState('');
    const [organisation, setOrganisation] = useState('');
    const [namelastName2, setNamelastName2] = useState('');
    const [familyTies, setFamilyTies] = useState('');
    const [sex, setSex] = useState('');
    const [otherInsurance, setOtherInsurance] = useState('');
    const [coverage, setCoverage] = useState('');
    const [insuranceId, setInsuranceId] = useState('');
    const [thirdParty, setThirdParty] = useState('');
    const [total, setTotal] = useState('');
    const [bankAccount, setBankAccount] = useState('');
    const [bankAdress, setBankAdress] = useState('');
    const [accountName, setAccountName] = useState('');
    const [admissionDate, setAdmissionDate] = useState('');
    const [diagnisis, setDiagnisis] = useState('');
    const [treatemeent, setTreatement] = useState('');
    const [discharge, setDischargee] = useState('');
    const [allFilled, setAllFilled] = useState(false);
    const [formSubmited, setFormSubmited] = useState(false);

    const submitHandler1 = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('accessToken');
        if (!token) return;
        setFormSubmited(true);
        if (namelastName && email && phone && organisation && idNumber) {
            console.log(namelastName, email, phone, organisation);
            const res = await axios.post(`${process.env.REACT_APP_API_BASEURL}/api/items/rpdAP`, { namelastName, email, phone, organisation }, {
                headers: { 'x-auth-token': token }
            });
            if (isOpen && !isOpen3) onToggle();
            if (isOpen2 && !isOpen3) onToggle2()
            onToggle3();
            setAllFilled(true);
            console.log(res);
        }
    };
    const submitHandler2 = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('accessToken');
        if (!token) return;
        setFormSubmited(true);
        if (namelastName && email && phone && organisation && idNumber && namelastName2 && familyTies && sex && otherInsurance && coverage
            && insuranceId && thirdParty && total && bankAccount && bankAdress && accountName && admissionDate && diagnisis && treatemeent && discharge) {
            console.log(namelastName, email, phone, organisation, idNumber, namelastName2, familyTies, sex, otherInsurance, coverage, insuranceId,
                thirdParty, total, bankAccount, bankAdress, accountName, admissionDate, diagnisis, treatemeent, discharge);
            const res = await axios.post(`${process.env.REACT_APP_API_BASEURL}/api/items/rpdSH`, {
                namelastName, email, phone, organisation, idNumber, namelastName2, familyTies, sex, otherInsurance, coverage, insuranceId,
                thirdParty, total, bankAccount, bankAdress, accountName, admissionDate, diagnisis, treatemeent, discharge
            }, {
                headers: { 'x-auth-token': token }
            });
            if (isOpen && !isOpen3) onToggle();
            if (isOpen2 && !isOpen3) onToggle2();
            onToggle3();
            setAllFilled(true);
            console.log(res);
        }
    };

    return (
        <>
            <SimpleGrid>
                <Flex direction={"column"}>
                    <Heading align="center" paddingTop={'100px'} fontWeight="bold" widht="100%" color={'blue.400'}>Raporto demin.</Heading>
                    <Flex alignItems={'center'} justifyContent="center" flexWrap="wrap" minH={'55vh'} >
                        <Flex align="center" justifyContent="center" direction={isNotSmallerScreen ? "row" : "column"} mt={8} >
                            <Flex as={'button'} onClick={toggleSecond} align='center' rounded="xl" direction="column" mt={4} ml={isNotSmallerScreen ? 4 : 0}
                                bg="gray.100" h="30vh" w="30vh" justify="flex-end" _hover={{ bg: "blue.400", }}>
                                <Icon color="black" p="4" as={AiFillCar} w="24" h="24" />
                                <Wrap spacing='30px' align='center'>
                                    <WrapItem>
                                        <Center w='200px'>
                                            <Text align={'center'} color="black" p="4" fontSize="xl" fontWeight="semibold">
                                                Demet per autopergjegjesi
                                            </Text>
                                        </Center>
                                    </WrapItem>
                                </Wrap>
                            </Flex>
                        </Flex>
                        <Flex align="center" justifyContent="center" direction={isNotSmallerScreen ? "row" : "column"} mt={8} >
                            <Flex as={'button'} onClick={toggleFirst} align='center' rounded="xl" direction="column" mt={4} ml={isNotSmallerScreen ? 4 : 0}
                                bg="gray.100" h="30vh" w="30vh" justify="flex-end" _hover={{ bg: "blue.400", }}>
                                <Icon color="black" p="4" as={GiHeartBeats} w="24" h="24" />
                                <Wrap spacing='30px' align='center'>
                                    <WrapItem>
                                        <Center w='200px'>
                                            <Text align={'center'} color="black" p="4" fontSize="xl" fontWeight="semibold">
                                                Kompenzimet shëndetësore
                                            </Text>
                                        </Center>
                                    </WrapItem>
                                </Wrap>
                            </Flex>
                        </Flex>
                    </Flex>
                    <form onSubmit={submitHandler1}>
                        <Collapse in={isOpen} animateOpacity>
                            <Flex flexDirection="column" p="2" justifyContent="center" alignItems="center">
                                <Heading as="h1" marginTop={'30px'} marginBottom={'30px'} color="blue.400">Paraqit një kërkesë
                                </Heading>
                                <Heading paddingTop={'30px'} align={'left'} color={'blue.400'}>I PUNËSUARI </Heading>
                                <FormControl isInvalid={formSubmited && !idNumber}>
                                    <SimpleGrid columns={2} spacing={2}>
                                        <FormLabel padding={'8px'} bg={'gray.100'}>Emri / Mbiemri</FormLabel>
                                        <Input p="2" width={'100%'} id="id" type="text" placeholder='' onInput={e => setIdNumber(e.target.value)} />
                                    </SimpleGrid>
                                </FormControl>
                                <FormControl isInvalid={formSubmited && !idNumber}>
                                    <SimpleGrid columns={2} spacing={2}>
                                        <FormLabel padding={'8px'} bg={'gray.100'}>E-mail</FormLabel>
                                        <Input p="2" width={'100%'} id="id" type="text" placeholder='' onInput={e => setIdNumber(e.target.value)} />
                                    </SimpleGrid>
                                </FormControl>
                                <FormControl isInvalid={formSubmited && !idNumber}>
                                    <SimpleGrid columns={2} spacing={2}>
                                        <FormLabel padding={'8px'} bg={'gray.100'}>Nr.personal</FormLabel>
                                        <Input p="2" width={'100%'} id="id" type="text" placeholder='' onInput={e => setIdNumber(e.target.value)} />
                                    </SimpleGrid>
                                </FormControl>
                                <FormControl isInvalid={formSubmited && !idNumber}>
                                    <SimpleGrid columns={2} spacing={2}>
                                        <FormLabel padding={'8px'} bg={'gray.100'}>Nr. tel</FormLabel>
                                        <Input p="2" width={'100%'} id="id" type="text" placeholder='' onInput={e => setIdNumber(e.target.value)} />
                                    </SimpleGrid>
                                </FormControl>
                                <FormControl isInvalid={formSubmited && !idNumber}>
                                    <SimpleGrid columns={2} spacing={2}>
                                        <FormLabel padding={'8px'} bg={'gray.100'}>Organizata</FormLabel>
                                        <Input p="2" width={'100%'} id="id" type="text" placeholder='' onInput={e => setIdNumber(e.target.value)} />
                                    </SimpleGrid>
                                </FormControl>
                                <Heading paddingTop={'30px'} align={'left'} color={'blue.400'}>PACIENTI </Heading>
                                    <FormControl isInvalid={formSubmited && !idNumber}>
                                        <SimpleGrid columns={2} spacing={2}>
                                            <FormLabel padding={'8px'} bg={'gray.100'}>Emri / Mbiemri</FormLabel>
                                            <Input p="2" width={'100%'} id="id" type="text" placeholder='' onInput={e => setIdNumber(e.target.value)} />
                                        </SimpleGrid>
                                    </FormControl>
                                    <FormControl isInvalid={formSubmited && !idNumber}>
                                        <SimpleGrid columns={2} spacing={2}>
                                            <FormLabel padding={'5px'} bg={'gray.100'}>Lidhja Familjare </FormLabel>
                                            <Select select={'Lidhja  familjare'} paddingTop={'-0px'} width={'100%'} id="date" type="date" placeholder=''>
                                                <option>Lidhja Familjare </option>
                                                <option>Vetë </option>
                                                <option>Bashkëshortja</option>
                                                <option>Fëmiu </option>
                                                <option>Prindërit </option>
                                            </Select>
                                        </SimpleGrid>
                                    </FormControl>
                                    <FormControl isInvalid={formSubmited && !idNumber}>
                                        <SimpleGrid columns={2} spacing={2}>
                                            <FormLabel padding={'5px'} bg={'gray.100'}>Gjinia</FormLabel>
                                            <Select width={'100%'} paddingTop={'-0px'} id="date" type="date" placeholder=''>
                                                <option>Gjinia</option>
                                                <option>Mashkull</option>
                                                <option>Femër</option>
                                                <option>Tjetër</option>
                                            </Select>
                                        </SimpleGrid>
                                    </FormControl>
                                    <FormControl isInvalid={formSubmited && !idNumber}>
                                        <SimpleGrid columns={2} spacing={2}>
                                            <FormLabel padding={'8px'} bg={'gray.100'}>Emri / Mbiemri</FormLabel>
                                            <Input p="2" width={'100%'} id="id" type="text" placeholder='' onInput={e => setIdNumber(e.target.value)} />
                                        </SimpleGrid>
                                    </FormControl>
                                    <FormControl isInvalid={formSubmited && !idNumber}>
                                        <SimpleGrid columns={2} spacing={5}>
                                            <FormLabel padding={'5px'} bg={'gray.100'}>Sigurimi jashtë vendit </FormLabel>
                                            <Select p="2" width="100%" id="internacionalInsurance" type="date" placeholder='' onInput={e => setIdNumber(e.target.value)}>
                                                <option>Përgjigju po ose jo</option>
                                                <option>Po</option>
                                                <option>Jo</option>
                                            </Select>
                                        </SimpleGrid>
                                    </FormControl>
                                    <FormControl isInvalid={formSubmited && !idNumber}>
                                        <SimpleGrid columns={2} spacing={2}>
                                            <FormLabel padding={'8px'} bg={'gray.100'}>Emri / Mbiemri</FormLabel>
                                            <Input p="2" width={'100%'} id="id" type="text" placeholder='' onInput={e => setIdNumber(e.target.value)} />
                                        </SimpleGrid>
                                    </FormControl>
                                    <FormControl isInvalid={formSubmited && !idNumber}>
                                        <SimpleGrid columns={2} spacing={2}>
                                            <FormLabel padding={'8px'} bg={'gray.100'}>Emri / Mbiemri</FormLabel>
                                            <Input p="2" width={'100%'} id="id" type="text" placeholder='' onInput={e => setIdNumber(e.target.value)} />
                                        </SimpleGrid>
                                    </FormControl>
                                    <FormControl isInvalid={formSubmited && !idNumber}>
                                        <SimpleGrid columns={2} spacing={5}>
                                            <FormLabel padding={'5px'} bg={'gray.100'}>Sigurimi jashtë vendit </FormLabel>
                                            <Select p="2" width="100%" id="internacionalInsurance" type="date" placeholder='' onInput={e => setIdNumber(e.target.value)}>
                                                <option>Përgjigju po ose jo</option>
                                                <option>Po</option>
                                                <option>Jo</option>
                                            </Select>
                                        </SimpleGrid>
                                    </FormControl>
                                <Heading paddingTop={'30px'} align={'left'} color={'blue.400'}>SHUMA E KËRKUAR NGA VALUTA</Heading>
                                <SimpleGrid paddingTop={'40px'} columns={3} spacing={5}>
                                    <FormLabel padding={'5px'} bg={'gray.100'}>Valuta </FormLabel>
                                    <FormLabel padding={'5px'} bg={'gray.100'}>Shuma e shpenzimeve </FormLabel>
                                    <FormLabel padding={'5px'} bg={'gray.100'}>Lloji i shpenzimeve </FormLabel>
                                    <Select width={'100%'} paddingTop={'-0px'} id="date" type="date" placeholder=''>
                                        <option>EURO</option>
                                        <option>CHF</option>
                                        <option>USD</option>
                                        <option>LEK</option>
                                    </Select>
                                    <Input p="2" width={'100%'} id="date" type="text" placeholder='' />
                                    <Input p="2" width={'100%'} id="date" type="text" placeholder='' />
                                    <Select width={'100%'} paddingTop={'-0px'} id="date" type="date" placeholder=''>
                                        <option>EURO</option>
                                        <option>CHF</option>
                                        <option>USD</option>
                                        <option>LEK</option>
                                    </Select>
                                    <Input p="2" width={'100%'} id="date" type="text" placeholder=' ' />
                                    <Input p="2" width={'100%'} id="date" type="text" placeholder='' />
                                    <Select width={'100%'} paddingTop={'-0px'} id="date" type="date" placeholder=''>
                                        <option>EURO</option>
                                        <option>CHF</option>
                                        <option>USD</option>
                                        <option>LEK</option>
                                    </Select>
                                    <Input p="2" width={'100%'} id="date" type="text" placeholder=' ' />
                                    <Input p="2" width={'100%'} id="date" type="text" placeholder='' />
                                    <Select width={'100%'} paddingTop={'-0px'} id="date" type="date" placeholder=''>
                                        <option>EURO</option>
                                        <option>CHF</option>
                                        <option>USD</option>
                                        <option>LEK</option>
                                    </Select>
                                    <Input p="2" width={'100%'} id="date" type="text" placeholder='' />
                                    <Input p="2" width={'100%'} id="date" type="text" placeholder='' />
                                    <FormLabel padding={'5px'} bg={'gray.100'}>Gjithsejt / Total</FormLabel>
                                    <Input p="2" width={'100%'} id="date" type="text" placeholder='Totali' />
                                </SimpleGrid>
                                <Heading paddingTop={'30px'} align={'left'} color={'blue.400'}>MËNYRA E PAGESËS </Heading>
                                <SimpleGrid paddingTop={'40px'} columns={2} spacing={5}>
                                    <FormLabel padding={'5px'} bg={'gray.100'}>Transferim në xhirollogarinë bankare</FormLabel>
                                    <Input p="2" width={'100%'} id="date" type="text" placeholder='' />
                                    <FormLabel padding={'5px'} bg={'gray.100'}>Data e lindjes </FormLabel>
                                    <Input p="2" width={'100%'} id="date" type="date" placeholder='' />
                                    <FormLabel padding={'5px'} bg={'gray.100'}>Nr. I xhirollogarisë</FormLabel>
                                    <Input p="2" width={'100%'} id="date" type="text" placeholder='' />
                                    <FormLabel padding={'5px'} bg={'gray.100'}>Emri i plotë i bankës dhe adresa</FormLabel>
                                    <Input p="2" width={'100%'} id="date" type="text" placeholder='' />
                                    <FormLabel padding={'5px'} bg={'gray.100'}>Emri i mbajtësit të xhirollogarisë</FormLabel>
                                    <Input p="2" width={'100%'} id="date" type="text" placeholder='' />
                                </SimpleGrid>
                                <Heading paddingTop={'30px'} align={'left'} color={'blue.400'}>DEKLARATA   </Heading>
                                <SimpleGrid paddingTop={'40px'} columns={1} spacing={5}>
                                    <Text align={'left'} width={'auto'}>Unë dëshmoj që informatat e ofruara nga unë në mbështetje të kësaj kërkese, për aq sa di dhe besoj, janë të drejta dhe të vërteta.
                                        Unë me vullnetin tim të lirë jap pëlqimin shprehimor për KS Illyria sh.a, të marrë, ruajë, përpunojë, procesojë dhe transferojë të dhënat e mia personale dhe të dhënat e ndjeshme personale (biometrike, gjenetike, shëndetësore) në formë elektronike dhe/ose të shtypur për qëllimet e vlerësimit dhe trajtimit të kësajë kërkese.
                                        (Ligjit për Mbrojtjen e të Dhënave Përsonale Nr. 06/L-082).
                                    </Text>
                                </SimpleGrid>
                                <Heading paddingTop={'30px'} align={'left'} color={'blue.400'}>HOSPITALIZIMI  </Heading>
                                <SimpleGrid paddingTop={'40px'} columns={2} spacing={5}>
                                    <FormLabel padding={'5px'} bg={'gray.100'}>Data hyrjes</FormLabel>
                                    <Input p="2" width={'100%'} id="date" type="date" placeholder='' />
                                    <FormLabel padding={'5px'} bg={'gray.100'}>Diagnoza </FormLabel>
                                    <Input p="2" width={'100%'} id="date" type="text" placeholder='' />
                                    <FormLabel padding={'5px'} bg={'gray.100'}>Tretmani ose operacioni </FormLabel>
                                    <Input p="2" width={'100%'} id="date" type="email" placeholder='' />
                                    <FormLabel padding={'5px'} bg={'gray.100'}>Data daljes</FormLabel>
                                    <Input p="2" width={'100%'} id="date" type="date" placeholder='' />
                                </SimpleGrid>
                                <Button p="4" marginBottom="20px" marginTop="20px" width="80%" colorScheme='red'>Paraqit</Button>
                            </Flex>
                        </Collapse>
                    </form>
                    <form onSubmit={submitHandler2}>
                        <Collapse in={isOpen2} animateOpacity>
                            <Flex flexDirection="column" p="2" justifyContent="center" alignItems="center">
                                <Heading as="h1" marginTop={'30px'} marginBottom={'30px'} color="blue.400">Paraqit një kërkesë
                                </Heading>
                                <FormControl width="90%" align={'center'}>
                                    <FormLabel paddingBottom="5" htmlFor="date">Data dhe koha e incidentit:</FormLabel>
                                    <Input p="2" marginBottom="20px" width="100%" id="date" type="date" />
                                    <Input p="4" width="100%" type="text" placeholder='Vendodhja e incidencës' />
                                    <FormLabel paddingBottom="5" paddingTop="20" htmlFor="details">Detajet e automjetit që shkaktoi incidentin:</FormLabel>
                                    <Input p="4" marginBottom="20px" width="100%" type="text" placeholder='Numri i targës' />
                                    <Input p="4" marginBottom="20px" width="100%" type="text" placeholder='Emri dhe mbiemri' />
                                    <FormLabel paddingBottom="5" paddingTop="20" htmlFor="details">Gruoi DL</FormLabel>
                                    <Select p="4" marginBottom="20px" width="100%" placeholder='---Zgjidhni---' size='sm' />
                                    <Textarea p="4" marginBottom="20px" width="100%" placeholder='Përshkrimi i incidentit' />
                                    <FormLabel paddingBottom="5" paddingTop="20" htmlFor="details">Njerëzit në makinë?</FormLabel>
                                    <Select p="4" marginBottom="20px" width="100%" placeholder='---Zgjidhni---' size='sm' />
                                    <Input p="4" width="100%" type="text" placeholder='Vendodhja e automjetit' />
                                    <FormLabel paddingBottom="5" paddingTop="20" htmlFor="details">Unë kërkoj:</FormLabel>
                                    <Select p="4" marginBottom="20px" width="100%" placeholder='---Zgjidhni---' size='sm' />
                                    <FormLabel paddingBottom="5" htmlFor="date">Ngrarko foto:</FormLabel>
                                    <SimpleGrid align={'center'} columns={2} spacing={5}>
                                        <Button p="4" marginBottom="20px" _hover={{ bg: 'blue.500', }} bgColor={'blue.400'} color={'white'}>Ngarko imazhin</Button>
                                        <Button p="4" marginBottom="20px" _hover={{ bg: 'blue.500', }} bgColor={'blue.400'} color={'white'}>Ngarko imazhin</Button>
                                        <Button p="4" marginBottom="20px" _hover={{ bg: 'blue.500', }} bgColor={'blue.400'} color={'white'}>Ngarko imazhin</Button>
                                        <Button p="4" marginBottom="20px" _hover={{ bg: 'blue.500', }} bgColor={'blue.400'} color={'white'}>Ngarko imazhin</Button>
                                    </SimpleGrid>
                                    <FormLabel paddingBottom="5" paddingTop="20" htmlFor="details"></FormLabel>
                                    <Checkbox defaultChecked>Më kontrolloni</Checkbox>
                                    <FormLabel paddingBottom="5" paddingTop="20" htmlFor="details"></FormLabel>
                                    <Divider marginTop="5" />
                                    <Button p="4" marginBottom="20px" marginTop="20px" width="80%" colorScheme='red'>Paraqit</Button>
                                </FormControl>
                            </Flex>
                        </Collapse>
                    </form>
                </Flex>
            </SimpleGrid>
            <SimpleGrid>
                {
                    allFilled &&
                    <Collapse in={isOpen3} animateOpacity>
                        <Success />
                    </Collapse>
                }
            </SimpleGrid>

        </>
    )
}

export default RPD