import { Box, Button, Checkbox, FormControl, FormLabel, Heading, HStack, Input, Text, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import { useForm } from 'react-hook-form';

const Login = () => {
    return (
        <Box w={['full', 'md']} p={[8, 10]} mt={[20, '10vh']} mx={['auto']} border={['none', '1px']} borderColor={['', 'gray.300']} borderRadius={10}>
            <VStack spacing={4} align={'flex-start'} w={'full'}>
                <VStack spacing={1} align={['flex-start', 'center']} w={'full'}>
                    <Heading>Login</Heading>
                    <Text>Enter your Email and password to login</Text>
                </VStack>
                <FormControl>
                    <FormLabel>Email Address</FormLabel>
                    <Input rounded="none" variant="filled"></Input>
                </FormControl>
                <FormControl>
                    <FormLabel>Password</FormLabel>
                    <Input rounded="none" variant="filled" type="password"></Input>
                </FormControl>
                <HStack w="full" justify="space-between">
                    <Checkbox>Remember me.</Checkbox>
                    <Button variant="link" colorScheme="blue">
                        Forgot Password?
                    </Button>
                </HStack>
                <Link to="home">
                    <Button rounded="none" colorScheme="blue" w={['full', 'auto']} alignSelf="flex-end">
                        Login
                    </Button>
                </Link>
            </VStack>
        </Box>
    );
};

export default Login;
