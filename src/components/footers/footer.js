// footer-with-links-&&-logos

<Flex 
  bg={colors.overlayDark1}
  width="100%" 
  mt={sizes.xl} 
  minHeight='250px' 
  fontFamily='Helvetica' 
  fontSize={sizes.sm0}
  minWidth={layout.maxWidth}
>
<Flex
   flexDirection='row'
   width='60%'
   justifyContent='flex-end'
 >
    <Flex flexDirection='column' justifyContent='center' alignItems='center' paddingBottom='68px'> 
      <Text color={colors.white}>A project by </Text>
      <Image src='tripleDoubleLight.svg' />
    </Flex>
    <Flex flexDirection='column' justifyContent='center' alignItems='center' paddingLeft='180px'> 
      <Text color={colors.white}>Supported by </Text>
      <Image src='creditLogos.svg' />
    </Flex>
</Flex>
<Flex
   flexDirection='column'
   width='40%'
   justifyContent='flex-start'
   paddingLeft='180px'
   paddingTop='15px'
 >
   <Text color={colors.grey} mb={sizes.xs}>Want to know more classified information? </Text>
   <Text color={colors.white} fontWeight={font.weight.bold}><a className='a2' href="mailto:hello@intergalactic-athletes.io">hello@intergalactic-athletes.io</a></Text>
   <Text color={colors.grey} mt={sizes.sm} mb={sizes.sm}>Follow us</Text>
   <a href="https://www.instagram.com/"><FaInstagram color={colors.white} size={25} /> </a>
   <Text color={colors.grey} mt={sizes.sm}>Web Design: <a href="https://tripledoublestudio.com/">Triple Double</a></Text>
   <Text color={colors.grey} >Web Build: <a href="https://www.midnightstudio.io/">Midnight Studio</a></Text>
   <Text color={colors.grey} >Privacy</Text>
</Flex>
</Flex>
