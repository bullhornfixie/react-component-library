import { Flex, Box, Heading, Text, Image } from 'rebass'
import { useRouter } from 'next/router'
import ScrollLock from 'react-scrolllock'
import styled from 'styled-components'
import Link from 'next/link'
import { font, colors, sizes, spacing, layout } from '@styles/variables'
import TickerText from '@common/ticker'
import { FaInstagram } from 'react-icons/fa'

    <Flex
        width="100%"
        mt={sizes.xl}
        minHeight="180px"
        fontFamily={"Helvetica"}
        fontSize={sizes.sm0}
        minWidth={layout.maxWidth}
        flexDirection="row"
        lineHeight="2"
    >  
    <Flex flexDirection="column" width="20%" alignItems="center">
    <Text color={colors.grey} mb="-20px">A project by </Text>
    <Image src="tripleDoubleLight.svg" />
    </Flex>
    <Flex flexDirection="column" width="60%" alignItems="center">
    <Text color={colors.grey} >
        Want to know more classified information?{' '}
        <Text color={colors.white} fontFamily={font.family.heading}>
        <a className="a2" href="mailto:hello@intergalactic-athletes.io">
            hello@intergalactic-athletes.io
        </a>
        <Text color={colors.grey} mt={sizes.sm} mb={sizes.sm}>
        Follow us
        </Text>
        <a href="https://www.instagram.com/">
        <FaInstagram color={colors.white} size={30} />
        </a>
    </Text>
    </Text>
    </Flex>
    <Flex flexDirection="column" width="20%">
    <Text color={colors.grey}>
        Web Design:{' '}
        <a href="https://tripledoublestudio.com/">Triple Double</a>
    </Text>
    <Text color={colors.grey}>
        Web Build:{' '}
        <a href="https://www.midnightstudio.io/">Midnight Studio</a>
    </Text>
    <Text color={colors.grey}>Privacy</Text>
    </Flex>
</Flex>
      