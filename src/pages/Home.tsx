import { AspectRatio, Box, Flex, Spacer, Image } from '@chakra-ui/react';
import NavbarComponent from '../shared/components/NavbarComponent';
import Videos from '../shared/components/Videos';
const Home = () => {
    return (
        <>
            <NavbarComponent />
            <Box w="full" h={300}>
                <AspectRatio w="full" h={500}>
                    <Image src="https://freesvg.org/img/scala-personas-scala.png" alt="naruto" objectFit="cover" />
                </AspectRatio>
            </Box>
            <Flex mt={10}>
                <Box p="4" bg="red.400">
                    Box 1
                </Box>
                <Spacer />
                <Box p="4" bg="green.400">
                    Box 2
                </Box>
            </Flex>
        </>
    );
};

export default Home;
