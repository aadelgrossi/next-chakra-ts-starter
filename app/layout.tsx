'use client'

import { ReactNode } from 'react'

import { Flex } from '@chakra-ui/react'

import Footer from '~/components/Footer'
import ChakraProvider from '~/providers/chakra'

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <ChakraProvider>
      <Flex
        justify="center"
        align="center"
        minHeight="100vh"
        direction="column"
      >
        {children}
        <Footer />
      </Flex>
    </ChakraProvider>
  )
}

export default Layout
