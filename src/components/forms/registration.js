import Layout from '@common/layout'
import { Text, Flex, Box } from 'rebass'
import { contentfulClient } from '@services/contentful'
import BlockWrapper from '@components/blocks/blockWrapper'
import { colors, font, layout, sizes, spacing } from '@styles/variables'
import ReactMarkdown from 'react-markdown'
import Line from '@common/line'
import isEmpty from 'lodash/isEmpty'
import styled from 'styled-components'

const Wrapper = styled(Box)`
  background-color: ${colors.pvLightgrey};
  width: 50%;
  padding-bottom: 30px;
  padding-left: 10vh;
  padding-right: 10vh;
`

const Title = styled(Text)`
  color: ${colors.pvBlue};
  margin-bottom: 5px;

`

const TextBox = styled(Box)`
  background-color: ${colors.white};
  height: 40px;
  border: 1px solid; 
  border-color: ${colors.pvBlue};
  border-radius: 10px; 
`

const Registration = () => {
  return ( 
    <>
      <Layout backgroundColor={colors.pvLightGrey}>
        <BlockWrapper>
          <Flex
            flexDirection='column'
            width='100%'
            mt={layout.headerHeight}
          >
            <Text
              my={spacing.md}
              color={colors.pvBlue}
              fontWeight={font.weight.bold}
              fontSize={sizes.lg}
              color={colors.pvBlue}
            >
              Investor Registration 
            </Text> 
            <Line />
          </Flex>
          
          <Flex
            flexWrap='wrap'
            width='100%'
            my='10vh'
            py='10vh'
            height='auto'
            justifyContent='center'
            bg={colors.white}
            sx={{borderRadius: '40px'}}
          >
            <Wrapper><Title mb='5px'>First name</Title><TextBox /></Wrapper>
            <Wrapper><Title mb='5px'>Last name</Title><TextBox /></Wrapper>
            <Wrapper><Title mb='5px'>Email address</Title><TextBox /></Wrapper>
            <Wrapper><Title mb='5px'>Telephone number</Title><TextBox /></Wrapper>
            <Wrapper width='100%'>
              <Title mb='5px'>Tell us about yourself</Title>
              <TextBox height='20vh'/>
            </Wrapper>

          </Flex>
        </BlockWrapper>
      </Layout>
    </>
  )
}

export default Registration
