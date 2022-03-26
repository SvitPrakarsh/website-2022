import { Box, Flex, Heading, Img, Text } from '@chakra-ui/react'
import React from 'react'
import eventdata from "../../event.json"
function Cyberintrusion() {
  return (

    <Flex flexWrap={'wrap'} justifyContent={'space-around'} mt={[20, 20, 5, 5]}>

      {eventdata && eventdata.map(el => {
        return (
          <>
            {
              el && el.events.map(ele => {
                console.log(ele);
                return (<Flex m={[3, 10, 15]} bg={'#F7F1EC'} maxWidth={'72'}>
                  <Flex bgColor={'#eebbb9'}
                    borderRadius={12}
                    p={[15, 25, 30]}
                    borderRight={'dashed'}
                    borderColor={'#a8908f'}
                    alignItems='center'>
                    <Img src={ele.icon} maxWidth={12} />
                  </Flex>
                  <Box p={10} bgColor={'#eebbb9'} borderRadius={12}
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
  )
}

export default Cyberintrusion