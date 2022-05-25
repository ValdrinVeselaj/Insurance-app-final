import {
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useBreakpointValue,
    SimpleGrid,
  } from '@chakra-ui/react';
  
  
  export default function SplitScreen() {
    
    return (
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
                Siguro
              </Text>
              <br />{' '}
              <Text color={'blue.400'} as={'span'}>
                Dhe Ndjehu I Sigurtë
              </Text>{' '}
            </Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
            Askushë nuk mundë ta parashikoj të ardhmen por ne mund ta mbrojmë.
            </Text>
            <SimpleGrid columns={2} spacing={10}>
              <Button
                as={'a'}
                href={'/OnlineShop'}
                rounded={'full'}
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Blej online
              </Button>
              <Button
                as={'a'}
                href={'/RaportoDem '}
                rounded={'full'}
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Raporto dëm
              </Button>
            </SimpleGrid>
            <SimpleGrid columns={2} spacing={10}>
              <Button
                as={'a'}
                href={'/Ofertat'}
                rounded={'full'}
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Ofertat online
              </Button>
              <Button
                as={'a'}
                href={'/Kontakti'}
                rounded={'full'}
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Kontaktoni
              </Button>
            </SimpleGrid>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            alt={'Login Image'}
            objectFit={'cover'}
            src={
              'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
            }
          />
        </Flex>
      </Stack>
    );
  }