import Footer from './footer'
import Header from './header'
import { Flex, Box, Heading, Text } from 'rebass';

const Layout = ({children}) => (
  <>
  <Header />
    <Flex> 
      {children}
    </Flex>
  <Footer />
  </>
)

export default Layout