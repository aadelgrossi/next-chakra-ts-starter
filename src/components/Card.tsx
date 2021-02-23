import { Box } from '@chakra-ui/react'

const Card: React.FC<{ href: string }> = ({ children, ...props }) => {
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
