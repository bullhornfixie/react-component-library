import { Flex, Heading, Text } from 'rebass'
import styled from 'styled-components'
import { colors, font, sizes, spacing } from '@styles/variables'
import BlockWrapper from '@components/blocks/blockWrapper'
import Line from '@common/line'
import isEmpty from 'lodash/isEmpty'
import Btn from '@common/button'
import Link from 'next/link'

const ContactText = styled(Text)`
  margin-top: ${spacing.sm};
  font-weight: ${font.weight.regular};
  color: ${colors.pvBlue};
  text-align: left;
`

const ContactBlock = ({ title, contact }) => (
  <BlockWrapper backgroundColor={colors.pvLightGrey}>
    <Heading my={spacing.md} color={colors.pvBlue} fontSize={sizes.xxl}>
      {title}
    </Heading>
    <Line />
   
      {!isEmpty(contact) &&
        contact.map((content, i ) => (

        // child element 
        // each child (created on render) is given a unique key
        // the key is the index of array element on each iteration 
        <div key={i.toString()}>
          <Flex
            my={spacing.md}
            flexWrap='wrap'
            height='auto'
            mx='auto'
          >
            <Flex flexDirection='column' width='50%'>
              <ContactText mt={spacing.sm} mb={spacing.base} fontSize={sizes.md0}>
                {content.fields.investorText}
              </ContactText>
              <Btn width='150px' variant='light'>
                <Link href='/registration'>Register</Link>
              </Btn>
              <ContactText mt='40vh' mb={spacing.base} fontSize={sizes.md0}>
                {content.fields.footerText}
              </ContactText>
            </Flex>
            <Flex flexDirection='column' width='50%' paddingLeft={spacing.md}>
              <ContactText mt={spacing.sm} mb={spacing.base} fontSize={sizes.md0}>
                {content.fields.founderText}
              </ContactText>
              <Btn width='150px' variant='light' background='light'>
                <Link href={'mailto:' + `${content.fields.email}`}><a>Email us</a></Link> 
              </Btn>
            </Flex>
          </Flex>
        </div>


      ))}
  </BlockWrapper>
)

export default ContactBlock

