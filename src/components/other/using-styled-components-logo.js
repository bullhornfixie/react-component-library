import styled from 'styled-components'
import { Flex, Box, Text, Image } from 'rebass'

// https://styled-components.com/

const Logo = styled(Image)`
  position: fixed;
  top: 30px;
  width: 140px;
  left: calc(50vw - 70px);
  object-fit: contain;
  z-index: 5;
`
const RenderingLogoExample = () => {
  return (
  <Flex
    flexDirection="column"
    width={1}
    alignItems="center"
    justifyContent="center"
  >
    <Logo alt="Logo" mx="auto" src="./wax-logo.jpeg" />
  </Flex>
)}

export default RenderingLogoExample