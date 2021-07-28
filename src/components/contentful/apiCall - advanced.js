import Layout from '@common/layout'
import { Text, Flex, Box } from 'rebass'
import { contentfulClient } from '@services/contentful'
import BlockWrapper from '@components/blocks/blockWrapper'
import { colors, font, layout, sizes, spacing } from '@styles/variables'
import ReactMarkdown from 'react-markdown'
import Line from '@common/line'
import isEmpty from 'lodash/isEmpty'

const Privacy = ({
  title,
  metaTitle,
  metaDescription,
  metaImage,
  privacypageBlocks,
}) => {
  const meta = {
    page: 'privacy',
    pageTitle: title,
    metaTitle,
    metaDescription,
    metaImage,
    privacypageBlocks,
  }

  return (
    <>
      <Layout meta={meta} backgroundColor={colors.pvLightGrey}>
        <BlockWrapper>
          <Flex
            flexDirection='column'
            justifyContent='space-between'
            width={['100%', '60%']}
            mt={layout.headerHeight}
            pb={spacing.md}
            color={colors.pvBlue}
          >
            <Text
              mt={spacing.md}
              fontWeight={font.weight.bold}
              fontSize={sizes.lg}
            >
              {title}
              <Box py={spacing.base}>
                <Line />
              </Box>
            </Text>
            <Text mb={spacing.md}>
              {metaDescription}
            </Text>
            {!isEmpty(privacypageBlocks) &&
              privacypageBlocks.map((block) => (
                <>
                  <Text
                    color={colors.pvBlue}
                    fontWeight={font.weight.bold}
                    mb={spacing.sm}
                    fontSize={sizes.md0}
                    color={colors.pvBlue}>
                    {block.fields.title}
                  </Text>
                  <Text mb={spacing.md} color={colors.pvBlue}>
                    <ReactMarkdown>
                      {!isEmpty(block.fields) && block.fields.description}
                    </ReactMarkdown>
                  </Text>
                </>
              ))}
          </Flex>
        </BlockWrapper>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const page = await contentfulClient.getEntry('4DTwnSMH5xev8nx0e2i42S')

  return {
    props: {
      ...page.fields,
    },
  }
}

export default Privacy
