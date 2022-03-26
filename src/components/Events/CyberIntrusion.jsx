import { Box, Container, Flex, Heading, Img, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import eventdata from "../../event.json"
function Cyberintrusion() {
  return (

    <Container maxW={'container.xl'}>
      <Flex flexWrap={'wrap'} gap={[4, null, 6]} justifyContent={'space-around'} mt={[20, 20, 5, 5]}>
        {eventdata && eventdata.map(el => {
          return (
            <>
              {
                el && el.events.map(ele => {
                  console.log(ele);
                  return (<Flex w={'full'} bg={'#F7F1EC'}
                    maxWidth={'700px'}>
                    <Flex
                      minH={[42, null, 72]}
                      minW={[42, null, 72]}
                      bgColor={'#eebbb9'}
                      borderRadius={12}
                      p={[6, null, 15]}
                      borderRight={'dashed'}
                      borderColor={'#a8908f'}
                      justify='center'
                      alignItems='center'>
                      <Img
                        width={[24, null, 36]}
                        src={ele.icon} maxWidth={[24, 36, 48]} />
                    </Flex>
                    <Box flex={1} p={10} bgColor={'#eebbb9'} borderRadius={12}
                    >
                      <Heading
                        fontSize={[18, 20, 25]}>{
                          ele.title
                        }</Heading>
                      <Text
                        fontSize={[10, 20, 25]}
                      >{ele.tag}</Text>
                      <Text>
                      </Text>
                    </Box>
                  </Flex >
                  )
                })
              }
            </>
          )
        })}
      </Flex>
    </Container>
  )
}

export default Cyberintrusion