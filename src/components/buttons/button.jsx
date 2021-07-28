import { Flex } from 'rebass'
import styled from 'styled-components'
import { colors, easing, font, sizes, spacing } from '@styles/variables'

const Wrapper = styled(Flex)`
  transition: ${easing.default};
  border: 1px solid;
  justify-content: center;
  border-color: ${({ variant }) =>
    variant === 'light' ? colors.pvBlue : colors.white};
  color: ${({ variant }) =>
    variant === 'light' ? colors.pvBlue : colors.white};
  background-color: ${({ variant, isActive }) =>
    variant === 'solid' && isActive ? isActive : 'transparent'};
  font-family: ${font.family.heading};
  font-weight: ${font.weight.bold};
  font-size: ${({ fontSize }) => 
    fontSize === 'small' ? `${sizes.sm}px` : `${sizes.md}px`};
  border-radius: ${spacing.md}px;
  padding: ${spacing.sm}px ${spacing.base}px;
  cursor: pointer;
  &:hover {
    background-color: ${({ background }) =>
      background === 'light' ? colors.white : colors.pvBlue};
    color: ${({ background }) =>
      background === 'light' ? colors.pvBlue : colors.white};
  }
`

const Button = ({ children, variant, isActive, fontSize, width, background }) => (
  <Wrapper variant={variant} isActive={isActive} fontSize={fontSize} width={width} background={background}>
    {children}
  </Wrapper>
)

export default Button
