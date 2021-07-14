import { useState, useEffect } from 'react'
import { Box, Flex, Text, Image } from 'rebass'
import Layout from '../components/common/layout'
import { colors } from '../styles/variables.js'
import client from '../services/contentful'
import styled from 'styled-components'
import { sizes, font } from '../styles/variables'
import { useRouter } from 'next/router'
import Link from 'next/link'

const PageTitle = styled(Text)`
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 20px;
`

const BlockTitle = styled(Text)`
  font-family: 'PTBold';
  font-size: ${sizes.md}px;
  margin: ${sizes.sm}px 0 0;
`

const TextBlock = styled(Text)`
  margin-top: ${sizes.sm}px;
  margin-bottom: ${sizes.sm}px;
`

const Section = styled(Box)`
  margin-top: ${sizes.md}px;
  padding: ${sizes.sm}px ${sizes.md}px;
`

const Btn = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center
  justify-content: space-between;
  text-align: center;
  background: ${colors.steel};
  color: ${colors.white};
  padding: ${sizes.xxxs}px ${sizes.xs}px;
  margin: ${sizes.sm}px 0;
  border-radius: 3px;
`

const BtnText = styled(Text)`
  color: ${colors.white};
  margin-top: 3px;
  padding-right: 10px;
`

const blockImage = {
  height: 300,
  width: 300,
  resizeMode: 'cover',
  backgroundColor: colors.white,
  cursor: 'pointer',
}

const Home = () => {
  const router = useRouter()
  const { id } = router.query

  const [loaded, setLoaded] = useState(false)
  const [content, setContent] = useState([])
  const [surfSpots, setSurfSpots] = useState([])
  
  console.log(router)
  console.log(router.query)
  console.log(id)

  const fetchData = async () => {
    const entriesObj = {
      content_type: 'homePage',
    }

  const response = await client.getEntries(entriesObj)
    if (response) {
    setLoaded(true)
    setContent(response.items[0].fields)
    setSurfSpots(response.items[0].fields.surfSpots)
   }
  }

  const showSurfSpots = surfSpots.map(a => {
    return (
      <Section> 
        <Link key={a.sys.id} href={`/${a.sys.id}`}> 
          <Image style={blockImage} src={`https:${a.fields.image.fields.file.url}`} /> 
        </Link>
        <BlockTitle>{a.fields.title}</BlockTitle>
        <Text>{a.fields.location}</Text>
      </Section>
  )})
  
  useEffect(() => {
    fetchData()
  }, [])

  console.log(loaded)
  console.log(content)
  console.log(surfSpots)

  return (
    <Layout>
      <Flex
        minHeight='100vh' 
        bg={colors.smoke}
        flexDirection='column'
        width='100%'
        alignItems='center'
      > 
        <PageTitle>{content.title}</PageTitle>
        <TextBlock>{content.text}</TextBlock>
        
        <Flex 
          bg={colors.white}
          flexDirection='row'
          flexWrap='wrap'
          width='60%'
          height='500px'
          > 
          {showSurfSpots} 
        </Flex>
      </Flex>
    </Layout> 
  )
}

export default Home 