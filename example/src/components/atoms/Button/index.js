import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components/primitives'
import { switchProp } from 'styled-tools'
import colors from './../../../utils/colors'

const Wrapper = styled.View`
  min-width: 200px;
  padding: 10px 20px;
  align-items: center;
  flex-basis: fit-content;
  background-color: ${switchProp('type', {
    default: colors.default,
    primary: colors.primary,
    secondary: colors.secondary,
    tertiary: colors.tertiary,
    })};
`

const Inner = styled.Text`
  color: ${colors.text.light};
  font-weight: bold;
`

const Button = ({ children, type, styles }) => (
    <Wrapper type={type} style={styles}>
        <Inner>{children}</Inner>
    </Wrapper>
)


Button.defaultProps = {
    type: 'default',
    styles: {}
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    styles: PropTypes.object,
    type: PropTypes.oneOf([
        'default',
        'primary',
        'secondary',
        'tertiary',
    ])
}

export default Button


