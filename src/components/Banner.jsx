import { Flex, Text } from "@chakra-ui/react"
import React from "react"

export const Banner = () => {
  return (
    <Flex
      className="banner"
      alignItems={"center"}
      padding="3rem"
      justifyContent={{ base: "center", md: "center", lg: "flex-start" }}
    >
      <Text
        maxWidth={{ base: "60%", md: "25%", lg: "10%" }}
        color={"#ffffff"}
        textAlign={{ base: "center", md: "center", lg: "left" }}
        fontSize={{ base: "18px", md: "24px", lg: "27px" }}
        fontWeight={700}
      >
        Watch something incredible.
      </Text>
    </Flex>
  )
}
