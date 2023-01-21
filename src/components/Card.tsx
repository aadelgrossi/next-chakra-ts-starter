'use client'

import { ReactNode } from 'react'

import { Box, LinkProps } from '@chakra-ui/react'

interface CardProps extends Pick<LinkProps, 'href'> {
  children: ReactNode
}

const Card = ({ children, ...props }: CardProps) => {
  return (
    <Box
      as="a"
      p="6"
      m="4"
      borderWidth="2px"
      borderColor="gray.200"
      rounded="lg"
      flexBasis={['auto', '45%']}
      transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
      _hover={{
        borderColor: 'teal.500'
      }}
      {...props}
    >
      {children}
    </Box>
  )
}

export default Card
