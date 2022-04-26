import { Box } from '@chakra-ui/react';
import videoBackground from '../../assets/video/videoBackground.mp4';
import fondo from '../../assets/video/fondo.mp4';
const Videos = () => {
    return (
        <>
            <Box bg="blue.400">
                <video src={fondo} autoPlay loop muted></video>
            </Box>
        </>
    );
};

export default Videos;
