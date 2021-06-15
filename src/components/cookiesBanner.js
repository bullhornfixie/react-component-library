import { Flex, Box, Heading, Text } from 'rebass'
import { font, colors, sizes } from '../../styles/variables'

const CookiesBanner = () => {

  return (
    <Flex
      flexDirection={['row', 'column']}
      alignItems="center"
      width="100%"
      bg={colors.yellow}
    >
      <Box
        m='20px'
        width='90%'
        height='150px'
        bg={colors.black}
        sx={{textAlign: 'center'}}
      >
        <Text
          fontSize={sizes.md}
          color={colors.black}
          bg={colors.smoke}
          width='50%'
          mx='auto'
          sx={{textAlign: 'center'}}
        >
          COOKIES BANNER
        </Text>
      </Box>
    </Flex>
  )}
export default CookiesBanner 

