import React from 'react'
import { useState, useEffect } from 'react'
import * as WebBrowser from 'expo-web-browser'
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native'
import { Asset } from 'expo-asset'
import styled from 'styled-components'
import { useFonts } from '@use-expo/font'
import { Ionicons } from '@expo/vector-icons'
import { sizes, colors, textStyles } from '../styles/variables'
import client from '../services/contentful'

// Fonts
import Hind from '../../assets/fonts/Hind/Hind-Regular.ttf'
import HindBold from '../../assets/fonts/Hind/Hind-SemiBold.ttf'
import PTBold from '../../assets/fonts/Futura/FuturaPTBold.otf'
import { block } from 'react-native-reanimated'

// Styles
const Container = styled(SafeAreaView)`
  flex: 1;
  height: 100vh;
  background-color: ${colors.grey};
  padding-top: ${sizes.md}px;
  padding-bottom: ${sizes.md}px;
`

const Wrapper = styled(ScrollView)`
  height: 100px;
`

const Angle = styled(View)`
  position: absolute;
  width: 100%;
  height: 50px;
  padding-top: 300px;
  top: 0;
  left: 0;
  background-color: ${colors.grey};
  border-bottom-width: 80px;
  border-bottom-color: ${colors.grey};
  border-style: solid;
  border-left-width: 700px;
  border-left-color: ${colors.jet};
`

const Section = styled(View)`
  margin-top: ${sizes.md}px;
  padding: ${sizes.sm}px ${sizes.md}px;
`

const Border = styled(View)`
  height: 1px;
  background-color: ${colors.white};
  margin: ${sizes.xxxs}px 0;
`

const ImageWrapper = styled(View)`
  padding: ${sizes.sm}px 0;
  width: 100%;
`

const PageTitle = styled(Text)`
  font-family: 'PTBold';
  ${textStyles.title};
  color: ${colors.white};
  font-size: ${sizes.lg}px;
  margin-bottom: 0;
`

const BlockTitle = styled(Text)`
  font-family: 'PTBold';
  ${textStyles.title};
  font-size: ${sizes.md}px;
  margin: ${sizes.sm}px 0 0;
`
const SubHeading = styled(Text)`
  font-family: 'HindBold';
  font-size: ${sizes.ms}px;
  line-height: ${sizes.md}px;
  margin: ${sizes.sm}px 0;
`
const TextBlock = styled(Text)`
  margin-bottom: ${sizes.sm}px;
`
const Btn = styled(TouchableOpacity)`
  display: flex;
  flex-direction: row;
  align-items: center
  justify-content: space-between;
  text-align: center;
  background: ${colors.summerSky};
  color: ${colors.pureWhite};
  padding: ${sizes.xxxs}px ${sizes.xs}px;
  margin: ${sizes.sm}px 0;
  border-radius: 3px;
`
const BtnText = styled(Text)`
  color: ${colors.white};
  margin-top: 3px;
  padding-right: 10px;
`

const BorderOil = styled(Border)`
  background-color: ${colors.oil}
`

const blockImage = {
  height: 300,
  width: '100%',
  resizeMode: 'cover',
  backgroundColor: colors.darkGrey,
}

const arrowIcon = (
  <Ionicons
    name='ios-arrow-round-forward'
    size={24}
    color='white'
  /> 
)

const About = ({ navigation }) => {
  const [loaded, setLoaded] = useState(false)
  const [content, setContent] = useState([])
  const [blocks, setBlocks] = useState([])

  const [isLoaded] = useFonts({
    Hind: Asset.fromModule(Hind).uri,
    HindBold: Asset.fromModule(HindBold).uri,
    PTBold: Asset.fromModule(PTBold).uri,
  })

  const fetchData = async () => {
    const entriesObj = {
      content_type: 'aboutPage',
    }

  const response = await client.getEntries(entriesObj)
    if (response) {
    setLoaded(true)
    setContent(response.items[0].fields)
    setBlocks(response.items[0].fields.block)
   }
  }

    useEffect(() => {
    fetchData()
  }, [])

  const showBlocks = blocks.map(a => {
    return (
    <Section>
      <Image source={{uri: a.fields.image.fields.file.url}} style={blockImage} />
      <BlockTitle>{a.fields.title}</BlockTitle>
      <BorderOil />
      <SubHeading>{a.fields.subHeading}</SubHeading>
      <TextBlock>{a.fields.textBlock}</TextBlock>
      <TextBlock>{a.fields.buttonUrl}</TextBlock>
      <Btn onPress={() => window.location.href = a.fields.buttonUrl}>
        <BtnText>{a.fields.buttonText}</BtnText>
        {arrowIcon}
      </Btn>
    </Section>
    )
  })

  return (
    <Container>
      {loaded && (
        <Wrapper>
          <Angle />
            <Section>
              <PageTitle>{content.title}</PageTitle>
              <Text style={{ color: colors.white }}>
                {content.textBlock}
              </Text>
            </Section>
          {showBlocks}
        </Wrapper>
      )}
    </Container>
  )
}

export default About