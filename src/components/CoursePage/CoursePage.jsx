import { Box, Grid, Heading, Text, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import Loader from '../Layout/Loader/Loader';


const CoursePage = () => {
    const [lectureNumber, setLectureNumber] = useState(0);
    const loading = false
    const lectures = [
        {
            _id: "sjsj",
            video: {
                url: "https://www.youtube.com/watch?v=7SGvD4k7AO8"
            },
            description: "skwkws",
            title: "title 1"
        },
        {
            _id: "sjsj",
            video: {
                url: "https://youtu.be/UUv0MgCNSA0?t=6"
            },
            description: "skwkws",
            title: "title 2"
        }, {
            _id: "sjsj",
            video: {
                url: "https://youtu.be/UUv0MgCNSA0?t=6"
            },
            description: "skwkws",
            title: "title 3"
        }]


    return loading ? (
        <Loader />
    ) : (
        <Grid minH={'90vh'} templateColumns={['1fr', '3fr 1fr']}>
            {lectures && lectures.length > 0 ? (
                <>
                    <Box>
                        <video
                            width={'100%'}
                            controls
                            controlsList="nodownload noremoteplayback"
                            disablePictureInPicture
                            disableRemotePlayback
                            src={lectures[lectureNumber].video.url}
                        ></video>

                        <Heading
                            m="4"
                            children={`#${lectureNumber + 1} ${lectures[lectureNumber].title
                                }`}
                        />

                        <Heading m="4" children="Description" />
                        <Text m="4" children={lectures[lectureNumber].description} />
                    </Box>

                    <VStack>
                        {lectures.map((element, index) => (
                            <button
                                onClick={() => setLectureNumber(index)}
                                key={element._id}
                                style={{
                                    width: '100%',
                                    padding: '1rem',
                                    textAlign: 'center',
                                    margin: 0,
                                    borderBottom: '1px solid rgba(0,0,0,0.2)',
                                }}
                            >
                                <Text noOfLines={1}>
                                    #{index + 1} {element.title}
                                </Text>
                            </button>
                        ))}
                    </VStack>
                </>
            ) : (
                <Heading children="No Lectures" />
            )}
        </Grid>
    );
};

export default CoursePage;
