'use client'

import { Flex, Image } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Flex
      as="footer"
      width="100%"
      height="16"
      justify="center"
      align="center"
      borderTop="1px"
      borderColor="gray.300"
    >
      <Flex
        as="a"
        align="center"
        direction="row"
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{' '}
        <Image
          ml="2"
          height="1em"
          src="/vercel.svg"
          alt="Vercel Logo"
          className="logo"
        />
      </Flex>
    </Flex>
  )
}

export default Footer
