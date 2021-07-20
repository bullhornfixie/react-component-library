import { Flex, Box, Heading, Text, Image } from 'rebass'
import { useRouter } from 'next/router'
import { Link } from 'react-scroll'
import ScrollLock from 'react-scrolllock'
import { font, colors, sizes, layout } from '@styles/variables'
import TickerText from '@common/ticker'
import styled from 'styled-components'

const TextLink = styled(Text)`
  margin: 10px;
  font-weight: ${font.weight.medium};
  line-height: 1;
  cursor: pointer;
`

const LinkWrapper = styled(Flex)`
  img {
   opacity: 0;
   transition: opacity 200ms;
  }
  a.active {
    img {
      display: block;
    }
  }
`

const SchoolsMenu = ({ isActive, handleClick }) => {
  const router = useRouter()
  const { asPath } = router

  return (
    isActive && (
      <>
        <ScrollLock isActive={true} />
        <Flex
          width="100%"
          height="calc(100vh - 152px)"
          bg={colors.overlayDark1}
          justifyContent="flex-start"
          sx={{
            position: 'absolute',
            top: 96,
            left: 0,
            zIndex: 2,
            overflowY: 'auto',
          }}
          onClick={handleClick}
          mb="20px"
          flexDirection="column"
        >
          <LinkWrapper flexDirection="column" py="48px" width="100%">
            <Link
              to="creative-challenge"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              activeClass="active"
              spy={true}
            >
              <Flex
                width="100%"
                alignItems="center"
                justifyContent="center"
                sx={{ position: 'relative' }}
                onClick={handleClick}
              >
                <Box width="100%" maxWidth={layout.maxWidth} pl={['40px', 0]}>
                  <TextLink
                    fontFamily={font.family.body}
                    fontSize={[sizes.xl, sizes.xxxl]}
                    color={colors.white}
                    letterSpacing={0}
                    my="20px"
                    sx={{ ':hover': { img: { opacity: 1 } } }}
                  >
                    <Image
                      src="/menuIcon.svg"
                      sx={{ position: 'absolute', left: 0 }}
                    />
                    The Creative Challenge 
                  </TextLink>
                </Box>
              </Flex>
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              activeClass="active"
              spy={true}
            >
              <Flex
                width="100%"
                alignItems="center"
                justifyContent="center"
                sx={{ position: 'relative' }}
                onClick={handleClick}
              >
                <Box width="100%" maxWidth={layout.maxWidth} pl={['40px', 0]}>
                  <TextLink
                    fontFamily={font.family.body}
                    fontSize={[sizes.xl, sizes.xxxl]}
                    color={colors.white}
                    letterSpacing={0}
                    my="20px"
                    sx={{ ':hover': { img: { opacity: 1 } } }}
                  >
                    <Image
                      src="/menuIcon.svg"
                      sx={{ position: 'absolute', left: 0 }}
                    />
                    About this Resource 
                  </TextLink>
                </Box>
              </Flex>
            </Link>
            <Link
              to="video"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              activeClass="active"
              spy={true}
            >
              <Flex
                width="100%"
                alignItems="center"
                justifyContent="center"
                sx={{ position: 'relative' }}
                onClick={handleClick}
              >
                <Box width="100%" maxWidth={layout.maxWidth} pl={['40px', 0]}>
                  <TextLink
                    fontFamily={font.family.body}
                    fontSize={[sizes.xl, sizes.xxxl]}
                    color={colors.white}
                    letterSpacing={0}
                    my="20px"
                    sx={{ ':hover': { img: { opacity: 1 } } }}
                  >
                    <Image
                      src="/menuIcon.svg"
                      sx={{ position: 'absolute', left: 0 }}
                    />
                    Video Brief
                  </TextLink>
                </Box>
              </Flex>
            </Link>
            <Link
              to="resources"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              activeClass="active"
              spy={true}
            >
              <Flex
                width="100%"
                alignItems="center"
                justifyContent="center"
                sx={{ position: 'relative' }}
                onClick={handleClick}
              >
                <Box width="100%" maxWidth={layout.maxWidth} pl={['40px', 0]}>
                  <TextLink
                    fontFamily={font.family.body}
                    fontSize={[sizes.xl, sizes.xxxl]}
                    color={colors.white}
                    letterSpacing={0}
                    my="20px"
                    sx={{ ':hover': { img: { opacity: 1 } } }}
                  >
                    <Image
                      src="/menuIcon.svg"
                      sx={{ position: 'absolute', left: 0 }}
                    />
                    Classroom Resources
                  </TextLink>
                </Box>
              </Flex>
            </Link>
          </LinkWrapper>
          <Link href="/submit-athlete">
            <Box bg={colors.yellow} width="100%" mb="20px">
              <TickerText text="– SUBMIT AN INTERGALACTIC ATHLETE" />
            </Box>
          </Link>
        </Flex>
      </>
    )
  )
}

export default SchoolsMenu
