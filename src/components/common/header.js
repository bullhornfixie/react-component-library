import styled from 'styled-components'
import { Flex, Box, Text } from 'rebass'
import { font, colors, sizes } from 'styles/variables'

const Header = () => (
  <Box sx={{ position: 'relative' }}>
    <Flex py="30px" alignItems="center" justifyContent="space-around" bg={colors.black}>
      <Text
        fontFamily={font.family.mono}
        color={colors.white}
        fontSize={sizes.sm}
      >
        I'm a header
      </Text>
  </Flex>
</Box>
)

export default Header