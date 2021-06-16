import { useState, useEffect } from 'react'
import { Flex, Box, Heading, Text, Button } from 'rebass'
import { colors, layout, sizes, font } from '~/styles/variables'
import Cookies from 'universal-cookie'

const CookiesBanner = () => {

  const [loaded, setLoaded] = useState(true)
  const cookies = new Cookies()
  const seenCookieBanner = cookies.get('cookieBanner')

  const trackUser = () => {
    setLoaded(false)
    const cookies = new Cookies()
    cookies.set('cookieBanner', 'accepted', { path: '/'})
    console.log("executed")
  }

  useEffect(() => {
    if (seenCookieBanner === 'accepted' )
      setLoaded(false)
  }, [])


  return !loaded ? null : (
    <Flex
      flexDirection={['column', 'row']}
      width="100%"
      bg={colors.orange}
      justifyContent={['flex-end', null]}
      alignItems={['center', null]}
      sx={{position: 'fixed', bottom: '0', zIndex: 3 }}
    >
      <Box
        mt={['20px', '-10px']}
        ml={['-0px', '40px']}
        mb={['20px', '0px']}
        width={['100%', '75%']}
        height='10px'
        sx={{textAlign: 'center'}}
      >
        <Text
          fontSize={[sizes.xs, sizes.sm]}
          fontStyle='italic'
          color={colors.white}
          my='auto'
          sx={{textAlign: ['center', 'left']}}

        >
          Our site uses cookies to help give you a better experience. By continuing to use it you consent to the use of cookies as set out in our privacy policy.
        </Text>
        </Box>
        <Box
          m='10px'
          width='25%'
          height='75px'
          sx={{textAlign: 'center'}}
        >
          <Button 
            mt='14px'
            bg={colors.black} 
            width='120px' 
            height='50px'
            onClick={() => {trackUser()}}
          > 
            <Text 
              fontFamily={font.family.bold} 
              fontSize={sizes.sm} 
              color={colors.white}>
              Close
            </Text>
          </Button>
        </Box>
  </Flex>

)}

export default CookiesBanner

