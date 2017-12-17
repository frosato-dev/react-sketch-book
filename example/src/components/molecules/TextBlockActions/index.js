import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/primitives'
import { View } from 'react-primitives';
import Title from '../../atoms/Title/index.js'
import Button from '../../atoms/Button/index.js'

const SubTitle = styled(({ children, ...props }) => (
    <Title {...props}>{children}</Title>
))`
  margin-top: 15px;
  margin-bottom: 30px;
`;

const Buttons = styled.View`
  flex-direction: row;
`

const TextBlockActions = ({ title, titleSize, subtitle, subtitleSize, titlesWidth, callToActions, theme, width }) => (
    <View style={{ width: titlesWidth }}>
        <Title
            size={titleSize}
            theme={theme}
        >
            {title}
        </Title>
        <SubTitle
            size={subtitleSize}
            theme={theme}
        >
            {subtitle}
        </SubTitle>
        {callToActions && (
            <Buttons>
                {callToActions.map((callToAction, index) =>
                    <Button
                        styles={{ marginRight: '20px' }}
                        key={index}
                        type={((index + 1) % 2) ? 'primary' : 'secondary'}
                    >
                        {callToAction.title}
                    </Button>
                )}
            </Buttons>
        )}
    </View>
)

TextBlockActions.propTypes = {
    title: PropTypes.string.isRequired,
    titleSize: PropTypes.string,
    subtitle: PropTypes.string.isRequired,
    subtitleSize: PropTypes.string,
    titlesWidth: PropTypes.string,
    callToActions: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string
        })
    ),
    width: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    theme: PropTypes.oneOf(['light', 'dark'])
}

TextBlockActions.defaultProps = {
    width: '100%',
    titlesWidth: '100%',
    theme: 'light',
    titleSize: 'xl',
    subtitleSize: 'xs'
}

export default TextBlockActions