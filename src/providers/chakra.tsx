'use client'

import { ReactNode } from 'react'

import { ThemeProvider, theme, CSSReset } from '@chakra-ui/react'

const ChakraProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />

      {children}
    </ThemeProvider>
  )
}

export default ChakraProvider
