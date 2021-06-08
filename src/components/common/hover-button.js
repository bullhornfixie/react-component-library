import { Flex, Box, Heading, Text, Button } from 'rebass';
import { useState } from 'react';
import { withRouter } from 'next/router'
import { font, colors, sizes } from '@styles/variables'
import styled from 'styled-components'

const Menu = () => {
  const [isActive, setIsActive] = useState(false)
  console.log(isActive)
  return (
  <>
    <Button bg={colors.steel} fontWeight='bold'
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}>
      MENU
    </Button>
    {isActive && (
      <Text> I appear when you hover over button </Text>
    )}
  {console.log(isActive)}
  </>
  )
}

export default Menu