import { Box, Stack } from "@chakra-ui/react"
import React from "react"

export const Card = ({ key, movies }) => {
  console.log(movies, "moviessss")
  return (
    <>
      <Stack>
        <Box>{movies?.Type}</Box>
        <Box
          key={key}
          w={{ base: "100%", md: "100%", lg: "100%" }}
          h="200px"
          bg="#000"
          px={4}
          color="white"
          display={"flex"}
          alignItems="center"
          justifyContent={"center"}
          borderRadius='12px'
        >
          {movies?.Title}
        </Box>
      </Stack>
    </>
  )
}
