import styled from 'styled-components/primitives'
import { ifProp, switchProp } from 'styled-tools'
import colors from '../../../utils/colors'

 const Title = styled.Text`
  flex-basis: fit-content;
  font-weight: ${ifProp({ bold: true }, 'bold', 'normal')};
  color: ${switchProp('theme', {
     light: colors.text.light,
     dark: colors.text.dark,
 })};
  font-size: ${switchProp('size', {
     xs: '18px',
     sm: '28px',
     md: '38px',
     lg: '48px',
     xl: '58px',
 })};
`
export default Title


