import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-primitives'
import TextBlockActions from '../../molecules/TextBlockActions/index.js'

const News = ({ articles }) => (!articles && articles.length) ? false : (
    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 40, marginBottom: 40 }}>
        {articles.map((article, index) => (
            <View style={{ flex: 1, padding: 15, flexWrap: 'wrap' }} key={index}>
                <TextBlockActions
                    title={article.title}
                    titleSize="sm"
                    subtitle={article.description}
                    subtitleSize="xs"
                    theme="dark"
                    callToActions={[
                        {title: 'Read more'}
                    ]}
                />
            </View>
        ))}
    </View>

)

News.propTypes = {
    articles: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string,
            description: PropTypes.string,
            callToActions: PropTypes.string
        })
    ),
}

News.defaultProps = {}

export default News