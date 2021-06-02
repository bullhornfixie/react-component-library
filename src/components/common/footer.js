import { Flex, Box, Text } from 'rebass'
import { font, colors, sizes } from 'styles/variables'

const Footer = () => (
  <Box sx={{ position: 'relative' }}>
    <Flex py="30px" alignItems="left" justifyContent="space-around" bg={colors.snow}>
      <Text
        fontFamily={font.family.mono}
        color={colors.black}
        fontSize={sizes.sm}
      >
        <a
          href="http://localhost:3000"
          target="_blank"
          rel="noreferrer nofollower"
        >
          Intergalatic Athletes 2021
        </a>
      </Text>
    </Flex>
  </Box>
)

export default Footer
