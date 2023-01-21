'use client'

import { Heading, Link, Text, Code, Flex } from '@chakra-ui/react'

import Card from '~/components/Card'

const IndexPage = () => {
  return (
    <Flex
      as="main"
      align="center"
      justify="center"
      direction="column"
      my="auto"
      pt="8"
    >
      <Heading as="h1" size="2xl" mb="2" textAlign="center">
        Welcome to{' '}
        <Link color="teal.500" href="https://nextjs.org">
          Next.js!
        </Link>
      </Heading>

      <Text fontSize="xl" mt="2">
        Get started by editing <Code>pages/index.js</Code>
      </Text>

      <Flex
        flexWrap="wrap"
        alignItems="center"
        justifyContent="center"
        maxW="800px"
        mt="10"
      >
        <Card href="https://nextjs.org/docs">
          <Heading as="h3" size="md" mb="2">
            Documentation &rarr;
          </Heading>
          <Text>Find in-depth information about Next.js features and API.</Text>
        </Card>

        <Card href="https://nextjs.org/learn">
          <Heading as="h3" size="md" mb="2">
            Learn &rarr;
          </Heading>
          <Text>
            Learn about Next.js in an interactive course with quizzes!
          </Text>
        </Card>

        <Card href="https://github.com/vercel/next.js/tree/master/examples">
          <Heading as="h3" size="md" mb="2">
            Examples &rarr;
          </Heading>
          <Text>Discover and deploy boilerplate example Next.js projects.</Text>
        </Card>

        <Card href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app">
          <Heading as="h3" size="md" mb="2">
            Deploy &rarr;
          </Heading>
          <Text>
            Instantly deploy your Next.js site to a public URL with Vercel.
          </Text>
        </Card>
      </Flex>
    </Flex>
  )
}

export default IndexPage
