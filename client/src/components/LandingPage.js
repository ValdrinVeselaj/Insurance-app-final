import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
  useDisclosure,
  Collapse,
  Container,
  Box,
  Heading,
  SimpleGrid,
} from '@chakra-ui/react';
import { AspectRatio } from '@chakra-ui/react'
import { CheckCircleIcon } from '@chakra-ui/icons';

export default function WithBackgroundImage() {

  const { isOpen, onToggle } = useDisclosure();
  const { isOpen: isOpen2, onToggle: onToggle2 } = useDisclosure();

  const toggleFirst = () => {
    if (isOpen2 && !isOpen) onToggle2();
    onToggle();
  };
  const toggleSecond = () => {
    if (isOpen && !isOpen2) onToggle();
    onToggle2();
  };

  const StatsText = ({ children }) => (
    <Text as={'span'} fontWeight={700} color={'black'}>
      {children}
    </Text>
  );

  const stats = [
    {
      title: '10+',
      content: (
        <>
          <StatsText>Software modules</StatsText> for detailed monitoring and
          real-time analytics
        </>
      ),
    },
    {
      title: '24/7',
      content: (
        <>
          <StatsText>Analytics</StatsText> enabled right in your dashboard without
          history limitations
        </>
      ),
    },
    {
      title: '13%',
      content: (
        <>
          <StatsText>Farms</StatsText> in North America has chosen NewLife™ as
          their management solution
        </>
      ),
    },
    {
      title: '250M+',
      content: (
        <>
          <StatsText>Plants</StatsText> currently connected and monitored by the
          NewLife™ software
        </>
      ),
    },
  ];


  return (
    <Box>
      <Flex
        w={'full'}
        h={'100vh'}
        backgroundImage={
          'url(https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)'
        }
        backgroundSize={'cover'}
        backgroundPosition={'center center'}>
        <VStack
          w={'full'}
          justify={'center'}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
          <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
            <Text
              color={'white'}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
              eiusmod tempor
            </Text>
            <Stack direction={'row'}>
              <Button
                as={'button'}
                bg={'blue.400'}
                rounded={'full'}
                width={'150px'}
                color={'white'}
                onClick={toggleFirst}
                _hover={{ bg: 'blue.500' }}>
                Rreth Nesh
              </Button>
              <Button
                as={'button'}
                bg={'black.300'}
                rounded={'full'}
                width={'150px'}
                color={'white'}
                onClick={toggleSecond}
                _hover={{ bg: 'black.500' }}>
                Si Funksionon
              </Button>
            </Stack>
          </Stack>
        </VStack>
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <Box bg={'white.800'} margin={'+100px'} boxShadow='outline' rounded='50px' position={'relative'}>
          <Flex
            flex={1}
            zIndex={0}
            display={{ base: 'none', lg: 'flex' }}
            backgroundImage="url('/templates/stats-grid-with-image.png')"
            backgroundSize={'cover'}
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            position={'absolute'}
            width={'50%'}
            insetY={0}
            right={0}>
          </Flex>
          <Container maxW={'7xl'} zIndex={10} position={'relative'}>
            <Stack>
              <Stack
                flex={1}
                color={'blue.400'}
                justify={{ lg: 'center' }}
                py={{ base: 4, md: 20, xl: 60 }}>
                <Box mb={{ base: 8, md: 20 }}>
                  <Text
                    fontFamily={'heading'}
                    fontWeight={700}
                    textTransform={'uppercase'}
                    mb={3}
                    fontSize={'xl'}
                    color={'blue.500'}>
                    Technology
                  </Text>
                  <Heading
                    color={'black'}
                    mb={5}
                    fontSize={{ base: '3xl', md: '5xl' }}>
                    21st century agriculture
                  </Heading>
                  <Text fontSize={'xl'} color={'blue.400'}>
                    The NewLife™ technology allows you to monitor your crops and get
                    complete insights at real time. The proprietary
                    software/hardware ecosystem prevents your plants from getting
                    neglected.
                  </Text>
                </Box>
                <SimpleGrid align={"center"} columns={2} spacing={5}>
                  <Stack spacing={10}>
                    {stats.map((stat) => (
                      <Box key={stat.title}>
                        <Text
                          fontFamily={'heading'}
                          fontSize={'3xl'}
                          color={'black'}
                          mb={3}>
                          {stat.title}
                        </Text>
                        <Text fontSize={'xl'} color={'blue.400'}>
                          {stat.content}
                        </Text>
                      </Box>
                    ))}
                  </Stack>
                  <Stack spacing={10}>
                    <Container>
                      <AspectRatio paddingTop={'100px'} align={'center'} maxW='560px' ratio={1}>
                        <iframe
                          title='tutorial'
                          src="https://www.youtube.com/embed/?v=xcJtL7QggTI"
                          allowFullScreen
                        />
                      </AspectRatio>
                    </Container>
                  </Stack>
                </SimpleGrid>
              </Stack>
              <Flex flex={1} />
            </Stack>
          </Container>
        </Box>
      </Collapse >
      <Collapse in={isOpen2} animateOpacity>
        <Flex  align={'center'} bg={'white.800'} margin={'+100px'} boxShadow='outline' rounded='50px' position={'relative'}>
          <Container align={'center'}>
            <AspectRatio margin={'+100px'} align={'center'} maxW='560px' ratio={1}>
              <iframe
                title='tutorial'
                src="https://www.youtube.com/embed/?v=xcJtL7QggTI"
                allowFullScreen
              />
            </AspectRatio>
          </Container>
        </Flex>
      </Collapse>
    </Box >
  );
}