import React from 'react'
import { useMediaQuery } from '@chakra-ui/media-query';
import { Box, Flex, Text } from '@chakra-ui/layout';
import { Wrap, WrapItem, Center } from '@chakra-ui/react'
import Icon from '@chakra-ui/icon';
import { FaHouseUser, FaHandshake, FaBandAid } from 'react-icons/fa';
import { AiFillCar, } from "react-icons/ai";
import { GiHeartBeats, } from "react-icons/gi";
import { MdLuggage } from "react-icons/md";






function OnlineShop() {

    const [isNotSmallerScreen] = useMediaQuery("(min-width:768px)");
    return (

        <Box align="center">
            <Box align="center" alignSelf="center" px="32" py="16">
                <Text align="center" fontWeight="bold" fontSize="2xl">Ndjehu i sigurt në gjdo hap përpara.</Text>
                <Flex align="center" justifyContent="center" direction={isNotSmallerScreen ? "row" : "column"} mt={8} >
                    <Flex as={'a'}  href={'/SiguroVeturen'} align='center' rounded="xl" direction="column" mt={4} ml={isNotSmallerScreen ? 4 : 0}
                        bg="gray.100" h="30vh" w="30vh" justify="flex-end" _hover={{ bg: "blue.400", }}>
                        <Icon color="black" p="4" as={AiFillCar} w="24" h="24" />
                        <Wrap spacing='30px' align='center'>
                            <WrapItem>
                                <Center w='200px'>
                                    <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
                                        Siguro veturën
                                    </Text>
                                </Center>
                            </WrapItem>
                        </Wrap>
                    </Flex>
                    <Flex as={'a'}  href={'/SiguroShtepin'} align='center' rounded="xl" direction="column" mt={4} ml={isNotSmallerScreen ? 4 : 0}
                        bg="gray.100" h="30vh" w="30vh" justify="flex-end" _hover={{ bg: "teal.400", }}>
                        <Icon color="black" p="4" as={FaHouseUser} w="24" h="24" />
                        <Wrap spacing='30px' align='center'>
                            <WrapItem>
                                <Center w='200px'>
                                    <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
                                        Siguro shtëpinë
                                    </Text>
                                </Center>
                            </WrapItem>
                        </Wrap>
                    </Flex>
                    <Flex as={'a'}  href={'/SiguroShendetin'} align='center' rounded="xl" direction="column" mt={4} ml={isNotSmallerScreen ? 4 : 0}
                        bg="gray.100" h="30vh" w="30vh" justify="flex-end"
                        _hover={{ bg: "pink.400", }}>
                        <Icon as={GiHeartBeats} p="4" w="24" h="24" color="black" />
                        <Wrap spacing='30px' align='center'>
                            <WrapItem>
                                <Center w='200px'>
                                    <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
                                        Siguro shëndetin
                                    </Text>
                                </Center>
                            </WrapItem>
                        </Wrap>
                    </Flex>
                </Flex>
            </Box>
            <Box mt={-40} align="center" alignSelf="center" px="32" py="16">
                <Flex as={'a'}  href={'/SiguroBiznesin'} align="center" justifyContent="center" direction={isNotSmallerScreen ? "row" : "column"} mt={8} >
                    <Flex align='center' rounded="xl" direction="column" mt={4} ml={isNotSmallerScreen ? 4 : 0}
                        bg="gray.100" h="30vh" w="30vh" justify="flex-end" _hover={{ bg: "red.400", }}>
                        <Icon color="black" p="4" as={FaHandshake} w="24" h="24" />

                        <Wrap spacing='30px' align='center'>
                            <WrapItem>
                                <Center w='200px'>
                                    <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
                                        Siguro biznesin
                                    </Text>
                                </Center>
                            </WrapItem>
                        </Wrap>
                    </Flex>
                    <Flex as={'a'}  href={'/SiguroUdhetimin'} align='center' rounded="xl" direction="column" mt={4} ml={isNotSmallerScreen ? 4 : 0}
                        bg="gray.100" h="30vh" w="30vh" justify="flex-end" _hover={{ bg: "orange.400", }}>
                        <Icon color="black" p="4" as={MdLuggage} w="24" h="24" />
                        <Wrap spacing='30px' align='center'>
                            <WrapItem>
                                <Center w='200px'>
                                    <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
                                        Siguro shëndetin në udhëtim
                                    </Text>
                                </Center>
                            </WrapItem>
                        </Wrap>
                    </Flex>
                    <Flex as={'a'}  href={'/SiguroVeteveten'} align='center' rounded="xl" direction="column" mt={4} ml={isNotSmallerScreen ? 4 : 0}
                        bg="gray.100" h="30vh" w="30vh" justify="flex-end"
                        _hover={{ bg: "blue.400", }}>
                        <Icon as={FaBandAid} p="4" w="24" h="24" color="black" />
                        <Wrap spacing='30px' align='center'>
                            <WrapItem>
                                <Center w='200px'>
                                    <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
                                        Siguro vetëveten
                                    </Text>
                                </Center>
                            </WrapItem>
                        </Wrap>
                    </Flex>
                </Flex>
            </Box>
        </Box>
    )
}

export default OnlineShop