import { Box, Flex, Grid, Input } from "@chakra-ui/react"
import axios from "axios"
import React, { useState } from "react"
import { Card } from "./Card"

export const SearchMovie = () => {
  const [movie, setMovie] = useState([])
  const [query, setQuery] = useState("")
  // console.log(query)

  const fetchMovie = () => {
    axios
      .get(`https://www.omdbapi.com/?s=${query}&apikey=ab3f2e6a`)
      .then(response => {
        setMovie(response?.data?.Search)
        console.log(response)
      })
  }

  return (
    <Flex w="90%" margin={"0 auto"} py="1rem" flexDirection={"column"}>
      <Box>Search</Box>
      <Box mt="1">
        <Input
          name="query"
          value={query}
          onChange={e => setQuery(e.target.value)}
          onKeyUp={fetchMovie}
          w={"95%"}
          borderColor="grey"
        />

        <Grid
          templateColumns={{
            base: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(5, 1fr)",
          }}
          gap={2}
          py="8"
        >
          {movie?.map((movies, key) => (
            <Card key={key} movies={movies} />
          ))}
        </Grid>
      </Box>
    </Flex>
  )
}
