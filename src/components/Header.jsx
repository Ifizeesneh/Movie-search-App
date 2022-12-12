import { Box, Flex } from "@chakra-ui/react"
import React from "react"

export const Header = () => {
  return (
    <Flex
      w="100%"
      bg={"#292929"}
      color="#ffffff"
      // h="140px"
      alignItems={"center"}
      padding="2rem"
      justifyContent={{base:'center',md:'center',lg:'flex-start'}}
    >
      <Box border={'1px solid #ffffff'} padding='0.4rem'>MyTestApp</Box>
    </Flex>
  )
}
