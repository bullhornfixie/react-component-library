import { Flex, Box, Heading, Text, Image } from 'rebass'
import { useRouter } from 'next/router'
import ScrollLock from 'react-scrolllock'
import styled from 'styled-components'
import Link from 'next/link'
import { font, colors, sizes, spacing, layout } from '@styles/variables'
import TickerText from '@common/ticker'

const TextLink = styled(Text)`
  margin: 10px;
  font-size: ${[sizes.xl, sizes.xxxl]}px;
  font-weight: ${font.weight.medium};
  cursor: pointer;
`

const Menu = ({ isActive, handleClick }) => {
  const router = useRouter()
  const { asPath } = router

  return (
    isActive && (
      <>
        <ScrollLock isActive={true} />
        <Flex
          width="100%"
          height="100vh"
          bg={colors.overlayDark1}
          justifyContent="center"
          py={spacing.base}
          sx={{ position: 'fixed', top: 0, left: 0 }}
          onClick={handleClick}
          flexDirection="column"
        >
          <Image
            sx={{
              position: 'absolute',
              left: 0,
              top: '4px',
            }}
            src={'closeIcon.svg'}
          />
          <Box bg={colors.yellow} width="100%" mb={['40px', '20px']}>
            <TickerText text="– SUBMIT AN INTERGALACTIC ATHLETE" />
          </Box>
          <Flex flexDirection="column" width="100%">
            <Link href="/" passHref>
              <Flex
                width="100%"
                alignItems="center"
                justifyContent="center"
                sx={{ position: 'relative' }}
              >
                {asPath === '/' && (
                  <Image
                    src="/menuIcon.svg"
                    sx={{ position: 'absolute', left: 0 }}
                  />
                )}
                <Box width="100%" maxWidth={layout.maxWidth} pl={['40px', 0]}>
                  <TextLink
                    fontFamily={font.family.body}
                    fontSize={[sizes.xl, sizes.xxxl]}
                    color={colors.white}
                    letterSpacing={0}
                  >
                    Home
                  </TextLink>
                </Box>
              </Flex>
            </Link>
            <Link href="/schools" passHref>
              <Flex
                width="100%"
                alignItems="center"
                justifyContent="center"
                sx={{ position: 'relative' }}
              >
                {asPath === '/schools' && (
                  <Image
                    src="/menuIcon.svg"
                    sx={{ position: 'absolute', left: 0 }}
                  />
                )}
                <Box width="100%" maxWidth={layout.maxWidth} pl={['40px', 0]}>
                  <TextLink
                    fontFamily={font.family.body}
                    fontSize={[sizes.xl, sizes.xxxl]}
                    color={colors.white}
                    letterSpacing={0}
                  >
                    IA for Schools
                  </TextLink>
                </Box>
              </Flex>
            </Link>

            <Link href="/students" passHref>
              <Flex
                width="100%"
                alignItems="center"
                justifyContent="center"
                sx={{ position: 'relative' }}
              >
                {asPath === '/students' && (
                  <Image
                    src="/menuIcon.svg"
                    sx={{ position: 'absolute', left: 0 }}
                  />
                )}
                <Box width="100%" maxWidth={layout.maxWidth} pl={['40px', 0]}>
                  <TextLink
                    fontFamily={font.family.body}
                    fontSize={[sizes.xl, sizes.xxxl]}
                    color={colors.white}
                    letterSpacing={0}
                  >
                    IA for Students
                  </TextLink>
                </Box>
              </Flex>
            </Link>
            <Link href="/gallery" passHref>
              <Flex
                width="100%"
                alignItems="center"
                justifyContent="center"
                sx={{ position: 'relative' }}
              >
                {asPath === '/gallery' && (
                  <Image
                    src="/menuIcon.svg"
                    sx={{ position: 'absolute', left: 0 }}
                  />
                )}
                <Box width="100%" maxWidth={layout.maxWidth} pl={['40px', 0]}>
                  <TextLink
                    fontFamily={font.family.body}
                    fontSize={[sizes.xl, sizes.xxxl]}
                    color={colors.white}
                    letterSpacing={0}
                  >
                    Gallery
                  </TextLink>
                </Box>
              </Flex>
            </Link>
            <Link href="/about" passHref>
              <Flex
                width="100%"
                alignItems="center"
                justifyContent="center"
                sx={{ position: 'relative' }}
              >
                {asPath === '/about' && (
                  <Image
                    src="/menuIcon.svg"
                    sx={{ position: 'absolute', left: 0 }}
                  />
                )}
                <Box width="100%" maxWidth={layout.maxWidth} pl={['40px', 0]}>
                  <TextLink
                    fontFamily={font.family.body}
                    fontSize={[sizes.xl, sizes.xxxl]}
                    color={colors.white}
                    letterSpacing={0}
                  >
                    About
                  </TextLink>
                </Box>
              </Flex>
            </Link>
          </Flex>
        </Flex>
      </>
    )
  )
}

export default Menu
