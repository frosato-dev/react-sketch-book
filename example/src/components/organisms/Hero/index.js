import React from 'react'
import PropTypes from 'prop-types'
import { Image } from 'react-primitives';
import TextBlockActions from '../../molecules/TextBlockActions/index.js'

const Hero = ({ title, subtitle, titleWidth, callToActions, image, height, theme }) => (
    <Image
        source={image}
        resizeMode='cover'
        style={{
            height,
            justifyContent: 'center',
            flexDirection: 'column',
            padding: '20px'
        }}
    >
        <TextBlockActions
            title={title}
            subtitle={subtitle}
            callToActions={callToActions}
            theme={theme}
            titlesWidth='50%'
        />
    </Image>
)

Hero.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    callToActions: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string
        })
    ).isRequired,
    image: PropTypes.string.isRequired,
    height: PropTypes.number,
    theme: PropTypes.oneOf(['light', 'dark'])
}

Hero.defaultProps = {
    height: 500,
    theme: 'light'
}

export default Hero