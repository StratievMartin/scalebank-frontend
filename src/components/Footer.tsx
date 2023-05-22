import { Box, Flex } from '@chakra-ui/react'
import { footerStyles } from '../styles/footerStyles'
export default function Footer() {
  return (
    <>
      <Box sx={footerStyles}>
        <Flex justifyContent="end">
          <p>All rights reserved ®2023</p>
        </Flex>
      </Box>
    </>
  )
}
