import Layout from '@common/layout'
import { Text, Flex, Box } from 'rebass'
import { contentfulClient } from '@services/contentful'
import BlockWrapper from '@components/blocks/blockWrapper'
import { colors, easing, font, sizes, spacing } from '@styles/variables'
import ReactMarkdown from 'react-markdown'

const Privacy = ({ title, metaTitle, metaDescription, metaImage, privacypageBlocks }) => {
  const meta = {
    page: 'privacy',
    pageTitle: title,
    metaTitle,
    metaDescription,
    metaImage,
    privacypageBlocks,
  }

const content = (
  privacypageBlocks.map((block) => 
    <>
    
    <Text my={spacing.base}>{block.fields.title}</Text>
    <ReactMarkdown fontSize="20px">{block.fields.description}</ReactMarkdown>
    </>
    )
  )

  return (
   <>
    <Layout meta={meta}>
      <BlockWrapper> 
       <Flex
         flexDirection="column"
         justifyContent="space-between"
         width="75%"
        > 
        <Text my={spacing.md}>{title}</Text>
        <Text mb={spacing.md}>{metaDescription}</Text>
        {content}

      </Flex>
    </BlockWrapper>
  </Layout>
  </>
  )
}

export async function getStaticProps() {
  const page = await contentfulClient.getEntry('4DTwnSMH5xev8nx0e2i42S')
  
  
  console.log(page)
  return {
    props: {
      ...page.fields,
    },
  }
}

export default Privacy
