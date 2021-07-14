import { useState, useEffect } from 'react'
import { Box, Flex, Text, Image } from 'rebass'
import Layout from '../components/common/layout'
import { colors } from '../styles/variables.js'
import client from '../services/contentful'
import styled from 'styled-components'
import { sizes, font } from '../styles/variables'
import { useRouter } from 'next/router'
import Link from 'next/link'
import isEmpty from 'lodash/isEmpty'

const BlockTitle = styled(Text)`
  font-family: 'PTBold';
  font-size: ${sizes.md}px;
  margin: ${sizes.sm}px 0 0;
`

const blockImage = {
  height: 400,
  width: 400,
  resizeMode: 'cover',
  backgroundColor: colors.white,
}

const SurfSpot = () => {
  const router = useRouter()
  const { id } = router.query 
  const [loaded, setLoaded] = useState(false)
  const [surfSpot, setSurfSpot] = useState([])

  useEffect(() => {
    if (id !== undefined) {
      fetchData()
    }
  }, [id])

  const fetchData = async () => {
    const entriesObj = {
      content_type: 'surfSpots',
      'sys.id': id,
      limit: 1,
    }
    const response = await client.getEntries(entriesObj)
    if (response) {
      setSurfSpot(response.items[0].fields)
      setLoaded(true)
    } else {
      setLoaded(true)
    }
  }

console.log(loaded)
console.log(id)
console.log(surfSpot)
console.log(surfSpot.title)

return loaded && !isEmpty(surfSpot) ? (
  <>
  <Layout> 
    <Flex
      minHeight='100vh' 
      bg={colors.white}
      flexDirection='column'
      width='100%'
      alignItems='center'
    >
     <BlockTitle>{surfSpot.title}</BlockTitle>
     <Text>{surfSpot.textBlock}</Text>
     <Image style={blockImage} src={`https:${surfSpot.image.fields.file.url}`}></Image>
    </Flex>
  </Layout>
</>
) : (
  <Text>Loading...</Text>
 )
}

export default SurfSpot